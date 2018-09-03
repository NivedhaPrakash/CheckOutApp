import React,{Component} from 'react';
import Carousel from 'react-image-carousel';
import history from '../history';
import './Form.css';

let images = [
    '/images/01.jpg',
    '/images/02.jpg',
    '/images/03.jpg',
    '/images/04.jpg',
    '/images/05.jpg',
    '/images/05.jpg'
];

class Carou extends Component{
    handleSubmit=(e)=>{
        e.preventDefault();
        history.push("/shopping");
      }
    render() {
        return (
            <div className="demoForm  jumbotron container">
            <div className="my-carousel">
               <Carousel images={images} autoplay={2000} />
            </div>
            <br/>
            <div className="but">
            <button className="btn btn-primary" >previous</button>
            <button type="submit" className="btn btn-primary" 
                onClick={(e)=>this.handleSubmit(e)}>Items In Cart</button>
            <button className="btn btn-primary" >next</button>
            </div>
            </div>
        );
    }
}

export default Carou;