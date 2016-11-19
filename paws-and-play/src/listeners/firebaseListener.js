const db = firebase.database().ref('users');

//we need store access

const objectsToListenTo = [
    {
        dbRef: db
        add: {
            insert: item => store.dispatch({type: 'ADD_USER', item}),
            delete: key => store.dispatch({type: 'DELETE_USER', key}),
        },
    },
    {
        dbRef: db.child('users/dogs'),
        add: {
            insert: item => store.dispatch({type: 'ADD_DOG', item}),
            remove: key => store.dispatch({type: 'REMOVE_DOG', key}),
        },
    }
];

class ObjectWatcher {
    constructor(snapshot, type) {
        this.type = type;
        this.key = snapshot.key;
        this.ref = type.dbRef.child(this.key);
        this.ref.on('value', this.onChange.bind(this));
    }

    onChange(snapshot) {
        if (!snapshot) return; // this fires when the object is removed. But the child_removed event handles the removal

        this.type.actions.upsert({
            [this.key]: snapshot.val(),
        });
    }

    remove() {
        this.type.actions.remove(this.key);
        this.ref.off('value', this.onChange);
    }
}

class ListWatcher {
    constructor() {
        this.cache = {};
    }

    watchList(ref, type) {
        ref.on('child_added', snap => this.onChildAdded(snap, type));
        ref.on('child_removed', snap => this.onChildRemoved(snap));
    }

    onChildAdded(snapshot, type) {
        this.cache[snapshot.key] = new ObjectWatcher(snapshot, type);
    }

    onChildRemoved(snapshot) {
        this.cache[snapshot.key].remove();
        delete this.cache[snapshot.key];
    }
}

const listWatcher = new ListWatcher();

objectsToListenTo.forEach(objectToListenTo => {
    listWatcher.watchList(userRef.child(objectToListenTo.keyPath), objectToListenTo);
});
view rawfirebase-listen.js hosted with ❤ by GitHub
