// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className='mainDiv'>
      <header>
        <img
          src='https://logos-download.com/wp-content/uploads/2016/09/React_logo_wordmark.png'
          className='App-logo'
          alt='logo'
        />
      </header>
      <nav>
        <ul className='first-ul'>
          <li className='first-li'>
            <a href='default.asp'>Home</a>
          </li>
          <li className='first-li'>
            <a href='news.asp'>Product</a>
          </li>
          <li className='first-li'>
            <a href='contact.asp'>Company</a>
          </li>
          <li className='first-li'>
            <a href='about.asp'>Contact</a>
          </li>
        </ul>
      </nav>
      <div className='mainLogo'>
        <img
          src='https://cdn.hackernoon.com/images/541r0RExUOQ3nFAQs7oJuST9Axf2-g6aq337h.jpeg'
          className='main-logo'
          alt='main-logo'
        />
        
      </div>
      <div className='middleDiv'>
        <div className='card'>
          <h1>About</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
            harum nam nisi reprehenderit accusantium vero unde perferendis
            consequatur illum! Quam corrupti quidem..
          </p>
        </div>
        <div className='card'>
          <h1>Company</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
            harum nam nisi reprehenderit accusantium vero unde perferendis
            consequatur illum! Quam corrupti quidem..
          </p>
        </div>
        <div className='card'>
          <h1>Services</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
            harum nam nisi reprehenderit accusantium vero unde perferendis
            consequatur illum! Quam corrupti quidem..
          </p>
        </div>
      </div>
      <div className='lastMain'>
        <div className='card-content'>
          <h1>Content</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
            harum nam nisi reprehenderit accusantium vero unde perferendis
            consequatur illum! Quam corrupti quidem..
          </p>
          <h2>Sub Header</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
            harum nam nisi reprehenderit accusantium vero unde perferendis
            consequatur illum! Quam corrupti quidem. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Pariatur, harum nam nisi reprehenderit
            accusantium vero unde perferendis consequatur illum! Quam corrupti
            quidem..
          </p>
        </div>
        <div className='card-navigation'>
          <h1>Navigation</h1>
          <div>
            <ul className='last-ul'>
              <li className='last-li'>
                <a href='default.asp'>Home</a>
              </li>
              <li className='last-li'>
                <a href='news.asp'>Product</a>
              </li>
              <li className='last-li'>
                <a href='contact.asp'>Company</a>
              </li>
              <li className='last-li'>
                <a href='about.asp'>Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
