import React, { Component } from 'react';
import './App.css';
import ArtistCard from './ArtistCard.js';
import { Route, Link } from 'react-router-dom';
import Logo from './img/logo.png';
import Banner1 from './img/banner1.png';
import Banner2 from './img/banner2.png';
import Banner3 from './img/banner3.png';
import Banner4 from './img/banner4.png'


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      artist:[]
    };
  }

  componentDidMount(){
    const BASE_URL = 'https://peaceful-badlands-98440.herokuapp.com';
    const options = {
      method: "post",
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify({email: 'rafael@laboratoria.la', password: 'banana'})
    };
  
    fetch(`${BASE_URL}/login`, options)
      .then(res => {
        const options = {
          method: 'get',
          credentials: 'include',
        };
        fetch(`${BASE_URL}/artists`, options)
        .then(res => res.json())
        .then(data => this.setState({artist: data}));
      })
  }


  render() {
    return (
      <div> 
        <header>
          <nav className="menu navbar-default navbar-fixed-top">
            <div className="logo">
              <img src={Logo} />
            </div>
            <div className="links">
              <Link to="/" className="pages">
                <a>Home</a>
              </Link>
              <Link to="/artists" className="pages">
                <a>Artistas</a>
              </Link>
              <Link to="/about"  className="pages">
                <a>Sobre nós</a>
              </Link>
              <Link to="/contact"  className="pages">
                <a>Contato</a>
              </Link>
            </div>
          </nav>
        </header>


      
      <Route path="/about/:id" render={ ({match}) => "oi" + match.params.id} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contato} />
      <Route path="/artists" render={ () => 
        <div>
          {this.state.artist.map((artist) => <ArtistCard {...artist} key={artist.id}/>)}
        </div>
       } />
    </div>
    );
  }
}


const Contato = () => {
  return (
    <form className="contact">
      <div class="form-row">
        <div class="form-group col-md-6">
          <label for="inputEmail4">Email</label>
          <input type="email" class="form-control" id="inputEmail4" placeholder="Email" />
        </div>
        <div class="form-group col-md-6">
          <label for="inputPassword4">Password</label>
          <input type="password" class="form-control" id="inputPassword4" placeholder="Password" />
        </div>
      </div>
      <div class="form-group">
        <label for="inputAddress">Address</label>
        <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" />
      </div>
      <div class="form-group">
        <label for="inputAddress2">Address 2</label>
        <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
      </div>
      <div class="form-row">
        <div class="form-group col-md-6">
          <label for="inputCity">City</label>
          <input type="text" class="form-control" id="inputCity" />
        </div>
        <div class="form-group col-md-4">
          <label for="inputState">State</label>
          <input id="inputState" class="form-control" id="inputState" />
        </div>
        <div class="form-group col-md-2">
          <label for="inputZip">Zip</label>
          <input type="text" class="form-control" id="inputZip" />
        </div>
      </div>
      <div class="form-group col-md-2 message">
        <label for="inputZip">Message</label>
        <textarea type="text" class="form-control"></textarea>
      </div>
      <div class="form-group">
        <div class="form-check">
          <input class="form-check-input" type="checkbox" id="gridCheck" />
          <label class="form-check-label" for="gridCheck">
            Check me out
          </label>
        </div>
      </div>
      <button type="submit" class="btn btn-primary">Sign in</button>
    </form>
  )
}

const About = () => {
    return (
      <container>
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active d-flex justify-content-center">
              <img className="d-block w-100" src={Banner1} alt="First slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={Banner2} alt="Second slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={Banner3} alt="Third slide" />
            </div>
          </div>
          <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </container>
      )
}

export default App;