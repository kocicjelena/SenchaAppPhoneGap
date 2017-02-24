Ext.define("Infodata.model.Option", {
    extend: "Ext.data.Model",
    config: {
        idProperty: 'id',
        fields: [
            { name: 'id', type: 'int' },
            { name: 'dateCreated', type: 'date', dateFormat: 'c' },
            { name: 'text', type: 'string' },
            { name: 'value', type: 'string' }
        ]
    }
});