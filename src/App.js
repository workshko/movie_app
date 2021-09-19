import React from "react";

function Food({name, picture}){
  
  return <div>
    <h1>I like {name}</h1>
    <img src={picture} width="250px" height="250px"></img>
  </div>;
}

const foodILike = 
[
   {
      name : "김치"
     ,image : "https://contents.lotteon.com/itemimage/_v203726/LE/12/05/06/12/42/_1/22/75/97/45/0/LE1205061242_1227597450_1.jpg/dims/resizef/554X554"
   }
  ,{
      name : "라면"
     ,image : "https://health.chosun.com/site/data/img_dir/2020/09/07/2020090702900_0.jpg"
  }
  ,{
      name : "김밥"
     ,image : "https://recipe1.ezmember.co.kr/cache/recipe/2016/06/29/e7401296033ab8e4297cd53d71e1bba91.jpg"
  }
  ,{
      name : "치킨"
     ,image : "https://blog.kakaocdn.net/dn/eR0RoG/btqXY1vmW8J/cKhyjxeV9wAZK79wWcxZc0/img.png"
  }
];

//동적 데이터 바인딩 방법 실습

function App() {
  return (
    <div>
      {foodILike.map(dish => (
        <Food name = {dish.name} picture = {dish.image}/>
      ))}
    </div>
  );
}

export default App;
