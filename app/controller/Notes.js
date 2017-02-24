Ext.define("Infodata.controller.Notes", {

    extend: "Ext.app.Controller",
    config: {
        refs: {
            // We're going to lookup our views by xtype.
            notesListView: "noteslistview",
            noteEditorView: "noteeditorview",
			selectEditorView: "selecteditorview",
			myselectView: "myselectview",
			myselectListView: "myselectlistview",
			myformView: "myformview",
            notesList: "#notesList",
			optionList: "#optionList"
        },
        control: {
            notesListView: {
                // The commands fired by the notes list container.
                newNoteCommand: "onNewNoteCommand",
                editNoteCommand: "onEditNoteCommand",
				newCommand: "onNewCommand",
				onClientOptCommand: "onClientOptCommand"
            },
            noteEditorView: {
                // The commands fired by the note editor.
                saveNoteCommand: "onSaveNoteCommand",
                deleteNoteCommand: "onDeleteNoteCommand",
                backToHomeCommand: "onBackToHomeCommand",
                selectCommand: "onSelectCommand",
				selectSaveCommand: "onselectSaveCommand"
            },
            selectEditorView: {
                // The commands fired by the note editor.
                editLDCommand: "onEditSelectCommand",
				saveSelectCommand: "onSaveSelectCommand",
                deleteNoteCommand: "onDeleteOptionCommand",
                backToHomeCommand: "onBackToHomeCommand",
				alertCommand: "onalertCommand",
				newM: "onNewM"
            },
            myselectView: {
                // The commands fired by the note editor.
                newOCommand: "onNewOptionCommand",
				newToggleCommand: "onNewToggleCommand",
				backHomeCommand: "onBackCommand",
				sCommand: "onsCommand"
            },
			myselectListView: {
                // The commands fired by the note editor.
                baCommand: "onBaCommand",
				newC: "onNewC",
				optsCommand: "onOptsCommand",
				newB: "onNewB",
				onDCommand: "onDCommand",
				MyFormTap: "onMyFormTap"
            },
			myFormView: {
			    baCommand: "onBackCommand",
				listCommand: "onListCommand"
			}

        }
    },
    // Transitions
    slideLeftTransition: { type: 'slide', direction: 'left' },
    slideRightTransition: { type: 'slide', direction: 'right' },

    // Helper functions
    getRandomInt: function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    activateNoteEditor: function (record) {

        var noteEditorView = this.getNoteEditorView();
        noteEditorView.setRecord(record); // load() is deprecated.
        Ext.Viewport.animateActiveItem(noteEditorView, this.slideLeftTransition);
    },
	activateSelectEditor: function (record) {

        var selectEditorView = this.getSelectEditorView();
        selectEditorView.setRecord(record); // load() is deprecated.
        Ext.Viewport.animateActiveItem(selectEditorView, this.slideLeftTransition);
    },
    activateNotesList: function () {
        Ext.Viewport.animateActiveItem(this.getNotesListView(), this.slideRightTransition);
    },
	activateMyselectList: function () {
        Ext.Viewport.animateActiveItem(this.getMyselectListView(), this.slideRightTransition);
    },
    activateMyselect: function (record) {
	    var myselectView = this.getMyselectView();
        myselectView.setRecord(record);
        Ext.Viewport.animateActiveItem(myselectView, this.slideLeftTransition);
    },
	activateMyform: function (record) {
	    var myformView = this.getMyformView();
        myformView.setRecord(record);
        Ext.Viewport.animateActiveItem(myformView, this.slideLeftTransition);
    },
    onNewM: function() {
	    console.log("newM");
        //this.getOptionList().add({
          // text: 'Logout'
        //});
		//var ed = Ext.create('MyApp.model.User', {
    //name: 'Ed',
    //email: 'ed@sencha.com',
    //password: 'secret'
//});

//form.setRecord(ed);
       console.log("onDeleteOptionCommand");

        var selectEditorView = this.getSelectEditorView();
        var cF = selectEditorView.getRecord();
        var opStore = Ext.getStore("Options");

       // optionStore.remove(currentSelect);
        op.sync();
		var form = Ext.create('Infodata.form.Myformselect', {
   
        text: "",
        value: ""
});
		form.setValues("text", cF.text);
        form.setValues("value", cF.value);
		//form.setRecord(newSelect);
		//form.setRecord(cF);
        this.activateMyform(form);
    },
	onMyFormTap: function() {
	    console.log("onMyFormTap");
	    var form = Ext.create('Infodata.form.Myformselect', {
   
        extend : 'Ext.form.Panel',
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
});
		var selectEditorView = this.getSelectEditorView();

        var currentS = selectEditorView.getRecord();
        var newS = selectEditorView.getValues();
		var now = new Date();
        var selectId = (now.getTime()).toString() + (this.getRandomInt(0, 100)).toString();

        var newSe = Ext.create("Infodata.model.Option", {
            id: selectId,
            dateCreated: now,
            text: "",
            value: ""
        });
        // Update the current note's fields with form values.
        newSe.set("text", newS.text);
        newSe.set("value", newS.value);

        var optionsStore = Ext.getStore("Options");
        optionsStore.add(newSe);
        
        optionsStore.sync();

        optionsStore.sort([{ property: 'dateCreated', direction: 'DESC'}]);
     
        form.setValues("text", newS.text);
        form.setValues("value", newS.value);
		//form.setRecord(newSelect);
	 this.activateMyform(form);
    },
    // Commands.
	onNewToggleCommand: function(field, thumb, enabled) {
	        
      
            if (enabled) {
                
                Ext.Msg.alert('Selected!');
            } else {
                pass
               //getMyselectView.setText('Listener Disabled');
           }
			this.activateMyselect();
        },
	onClientOptCommand: function() {
		console.log("onClientOptCommand");

        var now = new Date();
        var noteId = (now.getTime()).toString() + (this.getRandomInt(0, 100)).toString();

        var newO = Ext.create("Infodata.model.Option", {
            id: noteId,
            dateCreated: now,
            text: "",
            value: ""
        });

        this.activateMyselect(newO);
            
        },
	onNewB: function() {
		console.log("onCommand");

        var now = new Date();
        var noteId = (now.getTime()).toString() + (this.getRandomInt(0, 100)).toString();

        var newO = Ext.create("Infodata.model.Option", {
            id: noteId,
            dateCreated: now,
            text: "",
            value: ""
        });

        this.activateSelectEditor(newO);
            
        },
	onalertCommand: function (list, record) {
	   console.log("onalertCommand");
		
		this.activateMyselect(record);
            
        },
	onListCommand: function (list, record) {
	    console.log("listCommand");
        //var prom = this.getOptionList().add({
            //text: 'Logout'
        //});
	    this.activateSelectEditor(record);
	},
    onNewNoteCommand: function () {

        console.log("onNewNoteCommand");

        var now = new Date();
        var noteId = (now.getTime()).toString() + (this.getRandomInt(0, 100)).toString();

        var newNote = Ext.create("Infodata.model.Note", {
            id: noteId,
            dateCreated: now,
            title: "",
            narrative: ""
        });

        this.activateNoteEditor(newNote);

    },
	onNewOptionCommand: function (list, record) {
	    console.log("onNewOCommand");
        //var prom = this.getOptionList().add({
            //text: 'Logout'
        //});
	    this.activateMyselect(record);
	},
	onNewCommand: function () {
	    console.log("onNewOCommand");
        //var prom = this.getOptionList().add({
            //text: 'Logout'
        //});
	    this.activateMyselectList();
	},
    onEditNoteCommand: function (list, record) {

        console.log("onEditNoteCommand");
		

        this.activateNoteEditor(record);
    },
	onOptsCommand: function (list, record) {

        console.log("onOptsCommand");

        this.activateSelectEditor(record);
    },
	onEditSelectCommand: function () {

        console.log("onEditSelectCommand");
        var selectEditorView = this.getSelectEditorView();

        var currenTem = selectEditorView.getRecord();
        var newTem = selectEditorView.getValues();
		var now = new Date();
        var temId = (now.getTime()).toString() + (this.getRandomInt(0, 100)).toString();

        var newT = Ext.create("Infodata.model.Option", {
            id: temId,
            dateCreated: now,
            text: "",
            value: ""
        });
        // Update the current note's fields with form values.
      //  newT.set("text", newTem.text);
       // newT.set("value", newTem.value);

     
    
        this.activateMyForm(newT);
    },
	onselectSaveCommand: function () {
        console.log("onselectsaveCommand");
		var noteEditorView = this.getNoteEditorView();

        var currentNote = noteEditorView.getRecord();
        var newValues = noteEditorView.getValues();
		var now = new Date();
        var selectId = (now.getTime()).toString() + (this.getRandomInt(0, 100)).toString();

        var newSelect = Ext.create("Infodata.model.Option", {
            id: selectId,
            dateCreated: now,
            text: "",
            value: ""
        });
        // Update the current note's fields with form values.
        newSelect.set("text", newValues.title);
        newSelect.set("value", newValues.narrative);

        var optionsStore = Ext.getStore("Options");
        optionsStore.add(newSelect);
        
        optionsStore.sync();

        optionsStore.sort([{ property: 'dateCreated', direction: 'DESC'}]);
     
        this.activateMyselectList();
	},
	onsCommand: function () {

        console.log("onSCommand");
        var myselectView = this.getMyselectView();
        var current = myselectView.getRecord();
        var newV = myselectView.getValues();
		var now = new Date();
        var selectId = (now.getTime()).toString() + (this.getRandomInt(0, 100)).toString();

		var newT = Ext.create("Infodata.model.Option", {
            id: selectId,
            dateCreated: now,
            text: "",
            value: ""
        });
		newT.set("text", newV.text);
        newT.set("value", newV.value);
        var optiStore = Ext.getStore("Options");

        optiStore.add(newT);

        optiStore.sync();

        optiStore.sort([{ property: 'dateCreated', direction: 'DESC'}]);

        this.activateSelectEditor();
    },
    onSaveNoteCommand: function () {

        console.log("onSaveNoteCommand");

        var noteEditorView = this.getNoteEditorView();

        var currentNote = noteEditorView.getRecord();
        var newValues = noteEditorView.getValues();

        // Update the current note's fields with form values.
        currentNote.set("title", newValues.title);
        currentNote.set("narrative", newValues.narrative);

        var errors = currentNote.validate();

        if (!errors.isValid()) {
            Ext.Msg.alert('Wait!', errors.getByField("title")[0].getMessage(), Ext.emptyFn);
            currentNote.reject();
            return;
        }

        var notesStore = Ext.getStore("Notes");

        if (null == notesStore.findRecord('id', currentNote.data.id)) {
            notesStore.add(currentNote);
        }

        notesStore.sync();

        notesStore.sort([{ property: 'dateCreated', direction: 'DESC'}]);

        this.activateNotesList();
    },
	onSelectCommand: function () {

        console.log("onselectCommand");
		var noteEditorView = this.getNoteEditorView();

        var currentNote = noteEditorView.getRecord();
        var newValues = noteEditorView.getValues();
		var now = new Date();
        var selectId = (now.getTime()).toString() + (this.getRandomInt(0, 100)).toString();

        var newSelect = Ext.create("Infodata.model.Option", {
            id: selectId,
            dateCreated: now,
            text: "",
            value: ""
        });
        // Update the current note's fields with form values.
        newSelect.set("text", newValues.title);
        newSelect.set("value", newValues.narrative);

        var optionsStore = Ext.getStore("Options");
        optionsStore.add(newSelect);
        
        optionsStore.sync();

        optionsStore.sort([{ property: 'dateCreated', direction: 'DESC'}]);
     
        this.activateSelectEditor(newSelect);

    },
	onSaveSelectCommand: function () {
        console.log("onSelectCommand");
		
        var selectEditorView = this.getSelectEditorView();
        var currentSelected = selectEditorView.getRecord();
        var newSelected = selectEditorView.getValues();
		var now = new Date();
        var selectId = (now.getTime()).toString() + (this.getRandomInt(0, 100)).toString();
        var newSelectopt = Ext.create("Infodata.model.Option", {
            id: selectId,
            dateCreated: now,
            text: "",
            value: ""
        });
        // Update the current note's fields with form values.
        newSelectopt.set("text", newSelected.text);
        newSelectopt.set("value", newSelected.value);

        var optStore = Ext.getStore("Options");
        optStore.add(newSelectopt);
        
        optStore.sync();

        optStore.sort([{ property: 'dateCreated', direction: 'DESC'}]);
     
        this.activateMyselectList();
    },
    onDeleteNoteCommand: function () {

        console.log("onDeleteNoteCommand");

        var noteEditorView = this.getNoteEditorView();
        var currentNote = noteEditorView.getRecord();
        var notesStore = Ext.getStore("Notes");

        notesStore.remove(currentNote);
        notesStore.sync();

        this.activateNotesList();
    },
	onDeleteOptionCommand: function () {

        console.log("onDeleteOptionCommand");

        var selectEditorView = this.getSelectEditorView();
        var currentSelect = selectEditorView.getRecord();
        var optionStore = Ext.getStore("Options");

        optionStore.remove(currentSelect);
        optionStore.sync();

        this.activateMyselectList();
    },
    onBackToHomeCommand: function () {

        console.log("onBackToHomeCommand");
        this.activateNotesList();
    },
    onBackCommand: function () {

        console.log("onBackHomeCommand");
        this.activateNotesList();
    },
	onBaCommand: function () {

        console.log("onBackHomeCommand");
        this.activateNotesList();
    },
	onNewC: function () {

        
		Ext.Msg.alert('Your connection type is:  + Ext.device.Connection.getType()');
       
    },
    // Base Class functions.
    launch: function () {
        this.callParent(arguments);
        var notesStore = Ext.getStore("Notes");
        notesStore.load();
		var optionsStore = Ext.getStore("Options");
        optionsStore.load();
        console.log("launch");
    },
    init: function () {
        this.callParent(arguments);
        console.log("init");
    }
});