define(["sitecore", "/-/speak/v1/ExperienceEditor/ExperienceEditor.js"], function (Sitecore, ExperienceEditor) {
    var confirmDialog = Sitecore.Definitions.App.extend({
        initialized: function () {
            $(this.MessageBody.viewModel.$el[0]).html(decodeURIComponent(ExperienceEditor.Web.getUrlQueryStringValue("message", true)));
            this.setOkButtonClick();
            this.setCancelButtonClick();
            //The fix: change the size of jqueryModalDialogsFrame according to the size of dialogContent
            setTimeout(function () {
                var dialogFrame = window.top.document.getElementById("jqueryModalDialogsFrame");
                var scContentIframeId0Element = dialogFrame.contentWindow.document.getElementById("scContentIframeId0");
                var dialogContentElement = scContentIframeId0Element.contentWindow.document.getElementById("dialogContent");
                dialogFrame.contentWindow.setDialogDimension(parseInt(dialogContentElement.clientWidth), parseInt(dialogContentElement.clientHeight + 100));
            }, 100);
        },
        setCancelButtonClick: function () {
            this.on("button:cancel", function () {
                this.closeDialog(false);
            }, this);
        },
        setOkButtonClick: function () {
            this.on("button:ok", function () {
                this.closeDialog(true);
            }, this);
        },
    });
    return confirmDialog;
});