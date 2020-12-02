import { Link } from 'react-router-dom';

import './Shop.css'


export default function Shop(props) {


  return (
    <div className="shop">

      <div className="shop-main">      


          <div className="items-container">
            {props.items.map(item => (          
                <div key={item.id} className="item-card">
                
                  <Link to={`/shop/${item.id}`}>
                    <img src={`${item.image}`} className="image" />
                  </Link>
                
                </div>
            ))}

          </div>


      </div>
    </div>
  )
}
