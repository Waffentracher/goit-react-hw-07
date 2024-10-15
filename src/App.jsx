import { useEffect } from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store'; // Використовуйте іменований імпорт
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
      <div className="App">
        <h1>Contact Book</h1>
        <ContactsForm />
        <SearchBox />
        <ContactList />
      </div>
    </Provider>
  );
};

export default App;
