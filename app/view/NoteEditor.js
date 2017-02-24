Ext.define("Infodata.view.NoteEditor", {
    extend: "Ext.form.Panel",
    requires: ["Ext.form.FieldSet", "Ext.dataview.List"],
    alias: "widget.noteeditorview",
    config: {
        scrollable: 'vertical',
        items: [
            {
                xtype: "toolbar",
                docked: "top",
                title: "Edit Note",
                items: [
                    {
                        xtype: "button",
                        ui: "back",
                        text: "Home",
                        itemId: "backButton"
                    },
                    { xtype: "spacer" },
                    {
                        xtype: "button",
                        ui: "action",
                        text: "Save",
                        itemId: "saveButton"
                    }
                ]
            },
            {
                xtype: "toolbar",
                docked: "bottom",
                items: [
                    {
                        xtype: "button",
                        iconCls: "trash",
                        iconMask: true,
                        itemId: "deleteButton"
                    },
                    { xtype: "spacer" },
                    {
                        xtype: "button",
                        ui: "action",
                        text: "Save as demand of Client",
                        itemId: "saveSelectButton"
                    },
                    {
                        xtype: "button",
                        ui: "action",
                        text: "Save this item in client list",
                        itemId: "selectButton"
                    }
                ]
            },
		//{xtype: "panel",
    //fullscreen: true,
   // items: [
        { xtype: "fieldset",
                items: [
                    {
                        xtype: 'textfield',
                        name: 'title',
                        label: 'Title',
                        required: true
                    },
                    {
                        xtype: 'textareafield',
                        name: 'narrative',
                        label: 'Narrative'
                    }
                ]
            }
   // ]
//}
        ],
        listeners: [
            {
                delegate: "#backButton",
                event: "tap",
                fn: "onBackButtonTap"
            },
            {
                delegate: "#saveButton",
                event: "tap",
                fn: "onSaveButtonTap"
            },
            {
                delegate: "#deleteButton",
                event: "tap",
                fn: "onDeleteButtonTap"
            },
            {
                delegate: "#selectButton",
                event: "tap",
                fn: "onSelectButtonTap"
            },
            {
                delegate: "#saveSelectButton",
                event: "tap",
                fn: "onSaveSelectButtonTap"
            }
        ]
    },
    onSaveButtonTap: function () {
        console.log("saveNoteCommand");
        this.fireEvent("saveNoteCommand", this);
    },
    onDeleteButtonTap: function () {
        console.log("deleteNoteCommand");
        this.fireEvent("deleteNoteCommand", this);
    },
    onBackButtonTap: function () {
        console.log("backToHomeCommand");
        this.fireEvent("backToHomeCommand", this);
    },
    onSelectButtonTap: function () {
        console.log("selectCommand");
        this.fireEvent("selectCommand", this);
    },
    onSaveSelectButtonTap: function () {
        console.log("selectSaveCommand");
        this.fireEvent("selectSaveCommand", this);
    }

});

