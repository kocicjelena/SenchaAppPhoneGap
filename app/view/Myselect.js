Ext.define('Infodata.view.Myselect', {
    extend : 'Ext.form.Panel',
	alias: "widget.myselectview",
	extend: 'Ext.Panel',
    requires: [
        'Ext.Toolbar'],
    config:  {items: [{
                xtype: "toolbar",
                docked: "top",
                title: "option",
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
                        itemId: "saveClientoption"
                    }
					//,
					//{
                      //  xtype: "button",
                      //  ui: "action",
                      //  text: "Alert",
                       // itemId: "alertClientoption"
                    //}
                ]
            },	{xtype: "fieldset",
                items: [
                    {
                        xtype: 'textfield',
                        name: 'text',
                        label: 'Text',
                        required: true
                    },
                    {
                        xtype: 'textareafield',
                        name: 'value',
                        label: 'Value'
                    }
                ]
            }
  ],
	listeners: [{
            delegate: "#optionList",
			event: "disclose",
            fn: "onNewOptionTap"
        },
			{
                delegate: "#backButton",
                event: "tap",
                fn: "onBackButtonTapp"
            },
            {
                delegate: "#saveClientoption",
                event: "tap",
                fn: "onSaveClientoption"
            }
]
		},
	onNewOptionTap: function (list, record, target, index, evt, options) {
        console.log("newOCommand");
		
        this.fireEvent("newOCommand", this);
    },
	onBackButtonTapp: function () {
        console.log("backHomeCommand");
        this.fireEvent("backHomeCommand", this);
    },
	onSaveClientoption: function () {
        console.log("sCommand");
        this.fireEvent("sCommand", this);
    }
});