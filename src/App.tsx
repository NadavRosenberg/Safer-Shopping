import Header from './components/Header';
import Footer from "./components/Footer";
import About from "./components/About";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Home from './interfaces/Home'
import AddHome from './components/AddHome';
import Homes from './components/Homes';
import db from './firebase'

function App() {
  const [showAddHome, setShowAddHome] = useState(false);
  const [homes, setHomes] = useState<Home[]>([]);

  useEffect(() => {
    db.child('home').on('value', snapshot => {
      let newHomeState: Home[] = [];
      snapshot.forEach(data => {
        const dataVal = data.val()
        newHomeState.push({
          key: data.key + '',
          title: dataVal.title,
          address: dataVal.address,
          notes: dataVal.notes,
          reminder: dataVal.reminder,
        })
      })
      setHomes(newHomeState);
    })
  }, [])

  const deleteHome = (uuid: string): void => {
    db.child('home').child(uuid).remove();
    setHomes(homes.filter((home) => home.key !== uuid));
  };

  const toggleReminder = (uuid: string): void => {
    setHomes(
      homes.map((home) =>
        home.key === uuid ? { ...home, reminder: !home.reminder } : home
      )
    );
  };

  return (
    <Router>
      <div className="container">
        <Header
          title="Home's Tracker"
          onAdd={() => setShowAddHome(!showAddHome)}
          showAdd={showAddHome}
        />

        <Route
          path="/"
          exact
          render={(props) => (
            <>
              {showAddHome && <AddHome homes={homes} setHomes={setHomes} />}
              {homes.length > 0 ? (
                <Homes
                  homes={homes}
                  onDelete={deleteHome}
                  onToggle={toggleReminder}
                />
              ) : (
                "No Homes to show :("
              )}
            </>
          )}
        ></Route>
        <Route path="/about" component={About} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
