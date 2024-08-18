// src/App.jsx
import { useEffect } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';
import { fetchContacts } from './redux/contactsOps';
import ContactsForm from './components/ContactsForm/ContactsForm';
import ContactList from './components/ContactList/ContactList';
import SearchBox from './components/SearchBox/SearchBox';
import './App.css';

const App = () => {
  useEffect(() => {
    store.dispatch(fetchContacts());
  }, []);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className="App">
          <h1>Contact Book</h1>
          <ContactsForm />
          <SearchBox />
          <ContactList />
        </div>
      </PersistGate>
    </Provider>
  );
};

export default App;
