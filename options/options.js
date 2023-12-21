let rules = [];

function uuidv4() {
    return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
        (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
}

function saveRule(rule_id, data) {
    let ruleData = {};
    ruleData[rule_id] = data;
    browser.storage.sync.set(ruleData);
}

function addRule(e, id, data) {
    let newForm = $("#form_template_wrapper .form_template").clone().first();
    const rule_id = id || uuidv4();
    $(newForm).attr("id", rule_id);
    $("#rules").append(newForm);

    if (data) {
        $(newForm).find(".rule_name").val(data.rule_name || "");
        $(newForm).find(".title_regex").val(data.title_regex || "");
        $(newForm).find(".and").val(data.and || true);
        $(newForm).find(".url_regex").val(data.url_regex || "");
        $(newForm).find(".custom_title").val(data.custom_title || "");

        if (data.custom_icon_url) {
            $(newForm).find(".icon-preview").attr("src", data.custom_icon_url);
        }
    }

    $(newForm).find(".save-button").on("click", function(e) {

        const data = {
            rule_name: $(newForm).find(".rule_name").first().val(),
            title_regex: $(newForm).find(".title_regex").first().val(),
            and: $(newForm).find(".and").first().val(),
            url_regex: $(newForm).find(".url_regex").first().val(),
            custom_title: $(newForm).find(".custom_title").first().val(),
            custom_icon_url: $(newForm).find(".icon-preview").first()[0].src
        };
        const fileList = $(newForm).find(".custom_icon").first()[0].files;

        if (fileList.length === 1) {
            let f = fileList[0];
            const reader = new FileReader()
            reader.onload = (function(imageAsURL) {
                return function(e) {
                    data.custom_icon_url = e.target.result;
                    saveRule(rule_id, data);
                    $(newForm).find(".icon-preview").attr("src", data.custom_icon_url);
                }
            })(f);
            reader.readAsDataURL(fileList[0]);
        } else {
            saveRule(rule_id, data);
        }

        e.preventDefault();

    if (data && data.custom_icon_url) {
        $(newForm).find(".icon-preview").attr("src", data.custom_icon_url);
    }
    });

    $(newForm).find(".delete-button").on("click", function(e) {
        $(newForm).remove();
        browser.storage.sync.remove(rule_id);

        e.preventDefault();
    });

    if (data && data.custom_icon_url) {
        $(newForm).find(".icon-preview").attr("src", data.custom_icon_url);
    }
}


function restoreRules() {
    let allRules = browser.storage.sync.get();
    allRules.then((rules) => {
        if (Object.keys(rules).length === 0) {
            addRule();
        } else {
            $.each(rules, function(key, rule) {
                addRule(null, key, rule);
            });
        }
    });
}

document.addEventListener('DOMContentLoaded', restoreRules);

$("#add_rule_button").on("click", addRule);
