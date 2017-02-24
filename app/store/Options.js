Ext.define("Infodata.store.Options", {
    extend: "Ext.data.Store",
    requires: "Ext.data.proxy.LocalStorage",
    config: {
        model: "Infodata.model.Option",
        proxy: {
            type: 'localstorage',
            id: 'options-app-store'
        },
        sorters: [{ property: 'dateCreated', direction: 'DESC'}],
        grouper: {
            sortProperty: "dateCreated",
            direction: "DESC",
            groupFn: function (record) {

                if (record && record.data.dateCreated) {
                    return record.data.dateCreated.toDateString();
                } else {
                    return '';
                }
            }
        }
    }
});
