import { useState } from 'react';
import Products from './components/products.component';

import loginService from './service/loginService';

function App() {
  const [session, setSession] = useState(null);
  const username = 'mor_2314';
  const password = '83r5^_';

  const handleLogin = () => {
    loginService.post('', { username, password }).then((res) => {
      setSession(res.data);
    });
  };

  return (
    <div className="container">
      <h3>Productos</h3>
      <div>
        <input name="username" type="text"  value="mor_2314" required /><br />
        <input name="password" type="password" value="83r5^_" required /><br />
        <input type="submit" value="Login" onClick={handleLogin} />
      </div>
      { session && (<Products />) }
    </div>
  );
}

export default App;
