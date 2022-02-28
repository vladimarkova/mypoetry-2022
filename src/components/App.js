import Layout from './Layout';
import Home from './Home';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

function App() {
  const text1 =
    '\n Ден след ден аз се моля \n Аз на тебе се моля, живот \n Дари ме със капчица воля \n Недей ми отнема единствен урок \n\n За теб аз се моля \n Тъгувам и пея, живея \n Но нима съм само в роля \n А не тази истинска, приказна фея \n\n Удари ме отново \n Накажи ме със своя закон справедлив \n Ще стана. Ще бъда сурова \n Но с много любов. Съблечена в стих';
  const text2 =
    '\n Щастие ти мое. \n Мое мило златно щастие. \n Пак ли се търкаля във порои... \n Пак ли ме забрави. Как са там захласите? \n\n Но знам каква е пролетта. \n Знам! Усещам, че ще бъде пролет! \n По-красива от звезда!  \n По-сияйна и отново. Аз се моля...  \n\n Беше тихо. Беше нежно.  \n Беше толкова спокойно. А в живота...  \n Нищо не е безнадеждно.  \n Падаш, ставаш, тичаш. Хващаш днешната посока.';
  const text3 =
    '\n И така вървим полека \n Ей така се смее и света \n Уж проправя ти пътека \nТуко-виж те хванал за носа \n\n А пък ти вървиш полека  \n Виждам пак се смееш на света  \n И не вярваш, че е леко \n Но вървиш, вървиш. Ура! \n\n А цъфти отново всяка пролет \n И умира всеки светъл и прекрасен ден \n Ражда се красив, отворен \n А човекът пак върви. Но леко уморен';
  const date = new Date();
  const allPoetries = [
    {
      id: 1,
      title: '',
      content: text1,
      img: 'https://st2.depositphotos.com/1105977/5461/i/600/depositphotos_54615585-stock-photo-old-books-on-wooden-table.jpg',
      joke: '\n- А бе, защо вратата на пералнята не се отваря веднага след прането? \n -Ами, на втория чорап му трябва време да се скрие!',
      date: date,
      front: true,
    },
    {
      id: 2,
      title: '',
      content: text2,
      img: 'https://d1e00ek4ebabms.cloudfront.net/production/c355b933-c751-4a24-85b8-b5371f181383.jpg',
      joke: `Бивш рецепционист на хотел споделя: \n „Една жена ми се обажда на рецепция и ми казва: \n – Ту ти ту рум ту! \n – Тирира ри ра рам! – отговорих ѝ аз, хилейки се…. и тутакси ме уволниха… \n …Откъде да се сетя, че искала два чая за стая №2 !“`,
      date: date,
      front: false,
    },
    {
      id: 3,
      title: '',
      content: text3,
      img: 'https://i.guim.co.uk/img/media/bddbf0ae13e4b0e4dc91e4cf67224228fb06e7b5/0_38_4928_2957/master/4928.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=7e93597ec9e4483095bbbdcc202a2ef1',
      joke: 'Графинята инструктира строго новия си иконом: \n – И запомнете, в този замък закуската трябва да бъде сервирана точно в осем часа! \n – Разбрах, милейди. Ако случайно закъснея, започвайте без мен..',
      date: date,
      front: true,
    },
    {
      id: 4,
      title: '',
      content: 'Some Test Content1',
      img: 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/201904/book_1.jpeg?WxnRLsMs9tHe1arG3XGrm6xdSZt.GoGt&size=770:433',
      joke: 'Ако жена ви след скандала, много бързо се е успокоила и ви е простила, \n това значи, че вече е измислила, как да ви отмъсти.',
      date: date,
      front: true,
    },
    {
      id: 5,
      title: '',
      content: 'Some Test Content2',
      img: 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/201904/book_1.jpeg?WxnRLsMs9tHe1arG3XGrm6xdSZt.GoGt&size=770:433',
      joke: 'Ако жена ви след скандала, много бързо се е успокоила и ви е простила, \n това значи, че вече е измислила, как да ви отмъсти.',
      date: date,
      front: true,
    },
    {
      id: 6,
      title: '',
      content: 'Some Test Content3',
      img: 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/201904/book_1.jpeg?WxnRLsMs9tHe1arG3XGrm6xdSZt.GoGt&size=770:433',
      joke: 'Ако жена ви след скандала, много бързо се е успокоила и ви е простила, \n това значи, че вече е измислила, как да ви отмъсти.',
      date: date,
      front: true,
    }
  ];

  // const testPoetry = {
  //   id: 4,
  //   title: '',
  //   content: 'Some Test Content',
  //   img: 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/201904/book_1.jpeg?WxnRLsMs9tHe1arG3XGrm6xdSZt.GoGt&size=770:433',
  //   joke: 'Ако жена ви след скандала, много бързо се е успокоила и ви е простила, \n това значи, че вече е измислила, как да ви отмъсти.',
  //   date: date,
  //   front: true,
  // };

  const numberOfPoetriesOnPage = 3;
  const [currentStartIndex, setCurrentStartIndex] = useState(0);
  const [poetries, setPoetries] = useState(
    allPoetries.slice(
      currentStartIndex,
      currentStartIndex + numberOfPoetriesOnPage
    )
  );

  const handleClick = (id) => {
    const poetry = poetries.find((poetry) => poetry.id === id);
    poetry.front = !poetry.front;
    const newPoetries = [];
    for (let i = 0; i < poetries.length; i++) {
      if (poetries[i].id !== id) {
        newPoetries[i] = poetries[i];
      } else {
        newPoetries[i] = poetry;
      }
    }
    setPoetries(newPoetries);
  };

  const handleNextPage = () => {
    console.log('next page loading...');
    setCurrentStartIndex(currentStartIndex + numberOfPoetriesOnPage);
    const newPoetries = allPoetries.slice(
      currentStartIndex,
      currentStartIndex + numberOfPoetriesOnPage
    );
    setPoetries(newPoetries);
  };

  return (
    <Routes>
      <Route path='/' element={<Layout poetryCount={poetries.length} />}>
        <Route
          index
          element={
            <Home
              poetries={poetries}
              handleClick={handleClick}
              handleNextPage={handleNextPage}
            />
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
