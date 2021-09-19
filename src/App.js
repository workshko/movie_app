import React from "react";
import PropTypes from "prop-types";

const foodILike = 
[
   {
      id : 1
     ,name : "김치"
     ,image : "https://contents.lotteon.com/itemimage/_v203726/LE/12/05/06/12/42/_1/22/75/97/45/0/LE1205061242_1227597450_1.jpg/dims/resizef/554X554"
     ,rating : 3.8
   }
  ,{
      id : 2
     ,name : "라면"
     ,image : "https://health.chosun.com/site/data/img_dir/2020/09/07/2020090702900_0.jpg"
     ,rating : 4.8
  }
  ,{
      id : 3
     ,name : "김밥"
     ,image : "https://recipe1.ezmember.co.kr/cache/recipe/2016/06/29/e7401296033ab8e4297cd53d71e1bba91.jpg"
     ,rating : 4.1
  }
  ,{
      id : 4
     ,name : "치킨"
     ,image : "https://blog.kakaocdn.net/dn/eR0RoG/btqXY1vmW8J/cKhyjxeV9wAZK79wWcxZc0/img.png"
     ,rating : 5.0
  }
];

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number
}
;
function Food({name, picture, rating}){
  
  return <div>
    <h1>I like {name}</h1>
    <h3>{rating}/5.0</h3>
    <img src={picture} alt={name} width="250px" height="250px"></img>
  </div>;
}

function App() {
  return (
    <div>
      {foodILike.map(dish => (
        <Food key ={dish.id} name = {dish.name} picture = {dish.image} rating = {dish.rating}/>
      ))}
    </div>
  );
}

export default App;
