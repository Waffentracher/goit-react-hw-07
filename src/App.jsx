import { useEffect } from 'react';
import { Provider, useDispatch } from 'react-redux';
import { store } from './redux/store'; 
import { fetchContacts } from './redux/contactsOps';
import ContactsForm from './components/ContactsForm/ContactsForm';
import ContactList from './components/ContactList/ContactList';
import SearchBox from './components/SearchBox/SearchBox';
import './App.css';

const AppContent = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts()); 
  }, [dispatch]);

  return (
    <div className="App">
      <h1>Contact Book</h1>
      <ContactsForm />
      <SearchBox />
      <ContactList />
    </div>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <AppContent /> 
    </Provider>
  );
};

export default App;
