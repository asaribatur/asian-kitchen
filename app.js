const menu = [
  {
    id: 1,
    title: "Tteokbokki",
    category: "Korea",
    price: 10.99,
    img: "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
    desc: `Spicy rice cakes, serving with fish cake.`,
  },
  {
    id: 2,
    title: "Chicken Ramen",
    category: "Japan",
    price: 7.99,
    img: "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
    desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
  },
  {
    id: 3,
    title: "Bibimbap",
    category: "Korea",
    price: 8.99,
    img: "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
    desc: `Boiling vegetables, serving with special hot sauce`,
  },
  {
    id: 4,
    title: "Dan Dan Mian",
    category: "China",
    price: 5.99,
    img: "https://www.savingdessert.com/wp-content/uploads/2019/02/Dan-Dan-Noodles-10.jpg",
    desc: `Dan dan noodle, serving with green onion `,
  },
  {
    id: 5,
    title: "Yangzhou Fried Rice",
    category: "China",
    price: 12.99,
    img: "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
    desc: `Yangzhou style fried rice, serving with bean and pickles `,
  },
  {
    id: 6,
    title: "Onigiri",
    category: "Japan",
    price: 9.99,
    img: "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
    desc: `Rice Sandwich, serving with soy sauce`,
  },
  {
    id: 7,
    title: "Jajangmyeon",
    category: "Korea",
    price: 15.99,
    img: "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
    desc: `Black bean sauce noodle, serving with green onion `,
  },
  {
    id: 8,
    title: "Ma Yi Shang Shu",
    category: "China",
    price: 12.99,
    img: "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
    desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
  },
  {
    id: 9,
    title: "Doroyaki",
    category: "Japan",
    price: 3.99,
    img: "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
    desc: `Red bean paste dessert, serving with honey.`,
  },
];

//Tıklanan butona uygun içerik getiren fonksiyon. Hangi butona tıklandığını butonun value değeri ile elde ettim
function getContent(obj) {
  const contArea = document.querySelector("#contentArea");
  contArea.innerHTML = ""; //Butonlara her bastığımızda önceki değerlerin üstüne ekleme yapmasını istemeyiz, değil mi :)

  //Tıklanan buton değerine göre dizimizi belirliyoruz.
  let country;
  switch (obj) {
    case "Korea":
      country = menu.filter((item) => item.category == "Korea");
      break;
    case "China":
      country = menu.filter((item) => item.category == "China");
      break;
    case "Japan":
      country = menu.filter((item) => item.category == "Japan");
      break;
    default:
      country = [...menu]; //Şayet üç ülkeden biri değilse tümü isteniyor demektir. Menü dizisinin tamamını dizimize kopyalıyoruz
  }

  //Şimdiyse belirlenen dizinin tüm değerlerini bir döngü vasıtasıyla Bootstrap card yapısında uygun yerlere yerleştiriyoruz.
  //Bunun için template literals işimizi hayli kolaylaştıracaktır.  <div class="row justify-content-center">

  for (let i = 0; i < country.length; i++) {
    let content = `
    <div class="card menu-items" style="max-width: 540px;">
      <div class="row g-0">
        <div class="col-md-4">
          <img src=${country[i].img} class="img-fluid rounded-start photo" alt="${country[i].title}">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <p class="card-title menu-title"><span>${country[i].title}</span><span class="float-end">${country[i].price}</span></p>
            <hr class="border border-danger border-2 opacity-50">
            <p class="card-text">${country[i].desc}</p>
          </div>
        </div>
      </div>
    </div>
    `;

    contArea.innerHTML += content; //Döngünün her cycle'ında dizideki her bir objenin bilgilerini ilgili alana ekliyoruz
  }
  darkModeSwitcher();
}

getContent("all"); //E tabi sayfayı ilk açtığımızda kategori ayrımı olmaksızın bütün objeleri görmek isteriz

function darkModeSwitcher() {
  const desc = document.querySelectorAll(".card-text");
  var element = document.body;
  let cb = document.getElementById("flexSwitchCheckChecked");

  if (cb.checked) {
    element.classList.add("dark-mode");
    desc.forEach((val, index) => {
      desc[index].classList.add("desc-dark-mode");
    });
  } else {
    element.classList.remove("dark-mode");
    desc.forEach((val, index) => {
      desc[index].classList.remove("desc-dark-mode");
    });
  }
}
