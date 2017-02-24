Ext.define("Infodata.view.MyselectList", {
    extend: "Ext.Container",
    requires:["Ext.field.Select", "Ext.dataview.List", "Ext.MessageBox"],
    alias: "widget.myselectlistview",

    config: {
	    scrollable: 'vertical',
        layout: {
            type: 'fit'
        },
        items: [{
            xtype: "toolbar",
            title: "Demand of client",
            docked: "top",
            items: [
			    {xtype: "button",
                        ui: "back",
                        text: "Home",
                        itemId: "backButton"
                    }
					//,
                //{ xtype: 'spacer' },
                //{
                  //  xtype: "button",
                  //  text: 'New for client',
//ui: 'action',
                  //  itemId: "newButton"
               // }
            ]
        },
			{
            xtype: "list",
            store: "Options",
            itemId:"optionList",
            loadingText: "Loading Notes...",
            emptyText: "<div class=\"notes-list-empty-text\">No notes found.</div>",
            onItemDisclosure: true,
            grouped: true,
            itemTpl: "<div class=\"list-item-title\">{text}</div><div class=\"list-item-narrative\">{value}</div>"       
        }],
        listeners: [
            {
                delegate: "#backButton",
                event: "tap",
                fn: "onBaButtonTap"
            },
			//{
           // delegate: "#newButton",
            //event: "tap",
            //fn: "onNewButtonTap"
       // }, 
		{
           delegate: "#optionList",
           event: "disclose",
           fn: "onOptsListDisclose"
        }
		//,
		//{ delegate: "#myformvie",
         // event: "tap",
         // fn: "onMyFormTap"
        //}
		]
    },
    onBaButtonTap: function () {
        console.log("baCommand");
        this.fireEvent("baCommand", this);
    },    
    //onNewButtonTap: function () {
        //console.log("newB");
        //this.fireEvent("newB", this);
    //},
    onOptsListDisclose: function (list, record, target, index, evt, options) {
        console.log("optsCommand");
        this.fireEvent('optsCommand', this, record);
    }
	//,
	//onMyFormTap: function () {
    //  console.log("MyFormTap");
     // this.fireEvent("MyFormTap", this);
    //}
});