Ext.define("Infodata.view.SelectEditor", {
    extend: "Ext.Container",
    requires: ["Ext.form.FieldSet", "Ext.dataview.List"],
    alias: "widget.selecteditorview",
    config: {
        scrollable: 'vertical',
        items: [
            {
                xtype: "toolbar",
                docked: "top",
                title: "Selected",
                items: [
                    {
                        xtype: "button",
                        ui: "back",
                        text: "Home",
                        itemId: "backButton"
                    },
                    { xtype: "spacer" },
			{
            xtype: "selectfield",
            store: "Options",
            itemId:"optionList",
            loadingText: "Loading Notes...",
            emptyText: "<div class=\"notes-list-empty-text\">No notes found.</div>",
            onItemDisclosure: true,
            grouped: true,
            itemTpl: "<div class=\"list-item-title\">{text}</div><div class=\"list-item-narrative\">{value}</div>"       
        }
					//,
                    //{
                      //  xtype: "button",
                      //  ui: "action",
                      //  text: "Save",
                      //  itemId: "saveButton"
                    //}
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
					  {
    xtype: 'togglefield',
    docked: 'bottom',
	itemid: "toggleList",
    label: 'Toggle Listener'},{
                xtype: 'button',
                text: 'change from offline to online',
                flex: 1,
                handler: function() {
                    Ext.ComponentQuery.query('togglefield')[0].toggle();
                }
            },
					{
                        xtype: "button",
						ui: "action",
                        text: "form",
                        itemId: "myformvie",
						listeners: {
        tap: function() {
            alert('You are currently connected via + Ext.device.Connection.getType()');
        }
                    }}
                ]
            },
            { xtype: "fieldset",
			  itemId: "optionList",
                items: [
                    {
                        xtype: 'textfield',
                        name: 'text'
                    },
                    {
                        xtype: 'textareafield',
                        name: 'value'
                    }
                ]
            }
        ],
        listeners: [
            {
                delegate: "#backButton",
                event: "tap",
                fn: "onBackButtonTap"
            },
            //{
             //   delegate: "#saveButton",
               // event: "tap",
               // fn: "onSaveButtonTap"
           // },
            {
                delegate: "#deleteButton",
                event: "tap",
                fn: "onDeleteButtonTap"
            },{
              delegate: "#alertClientoption",
              event: "tap",
              fn: "alertClientoption"
            },
			{
            delegate: "#optionList",
            event: "disclose",
            fn: "onSelectListDisclose"
        }
		//,
		//{ delegate: "#myformvie",
         // event: "tap",
         // fn: "onMyFormTap"
        //}
        ]
    },
    //onSaveButtonTap: function () {
        //console.log("saveSelectCommand");
        //this.fireEvent("saveSelectCommand", this);
    //},
    onDeleteButtonTap: function () {
        console.log("deleteNoteCommand");
        this.fireEvent("deleteNoteCommand", this);
    },
    onBackButtonTap: function () {
        console.log("backToHomeCommand");
        this.fireEvent("backToHomeCommand", this);
    },
	alertClientoption: function () {
	
        console.log("alertCommand");
        this.fireEvent("alertCommand", this);
    },
	onSelectListDisclose: function (list, record, target, index, evt, options) {
        console.log("editLDCommand");
        this.fireEvent('editLDCommand', this, record);
    }
	//,
	//onMyFormTap: function () {
    //  console.log("newM");
    //  this.fireEvent("newM", this);
    //}

});

