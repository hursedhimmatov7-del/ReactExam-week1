import React, { useRef, useState } from 'react'
import Sec34 from './components/Sec34'
import Sec35 from './components/Sec35'
import Group from '../public/Group.png'
import Frame from '../public/Frame.png'
import Cards from './components/Cards'
import Modal from './components/Modal'

const App = () => {
  const [data , setData] = useState([
    {
    id: 1,
    image: "https://images.unsplash.com/photo-1606756790138-261d2b21cd75?auto=format&fit=crop&w=800&q=80",
    name: "Боул с лососем",
    price: "65 сомони",
    status: true,
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1670398564097-0762e1b30b3a?auto=format&fit=crop&w=800&q=80",
    name: "Курица с овощами",
    price: "48 сомони",
    status: true,
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1605034997426-399051e3f7ae?auto=format&fit=crop&w=800&q=80",
    name: "Крем-суп из тыквы",
    price: "32 сомони",
    status: false,
  },
  {
    id: 4,
    image: "https://images.pexels.com/photos/16743486/pexels-photo-16743486/free-photo-of-seafood-paella-with-lobster.jpeg?auto=compress&cs=tinysrgb&w=800",
    name: "Морепродукты с рисом",
    price: "85 сомони",
    status: true,
  },
  {
    id: 5,
    image: "https://images.pexels.com/photos/31235429/pexels-photo-31235429/free-photo-of-delicious-burrata-salad-with-fresh-ingredients.jpeg?auto=compress&cs=tinysrgb&w=800",
    name: "Салат с авокадо",
    price: "39 сомони",
    status: true,
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1597692493647-25bd4240a3f2?auto=format&fit=crop&w=800&q=80",
    name: "Паста с грибами",
    price: "52 сомони",
    status: false,
  },
  {
    id: 7,
    image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&w=800&q=80",
    name: "Стейк с картофелем",
    price: "95 сомони",
    status: true,
  },
  {
    id: 8,
    image: "https://images.pexels.com/photos/13574407/pexels-photo-13574407.jpeg?auto=compress&cs=tinysrgb&w=800",
    name: "Рисовый боул",
    price: "42 сомони",
    status: true,
  }
  ])
  function dltUser(id){
    setData((prev) => prev.filter((elem)=> elem.id !== id))
  }
  const addModal = useRef(null)
  const editModal = useRef(null)
  const [edit , editSet] = useState(null)
    const [search , searchSet] = useState('')
  const [sort , sortSet] = useState('all')

  const infoModal = useRef(null)
const [info , infoSet] = useState(null)

function infoShow(user){
  infoSet(user)
  infoModal.current.showModal()
}

  const addSave = (e) => {
    e.preventDefault()
   let newUser = {
    id : Date.now(),
    name : e.target.name.value ,
    price : e.target.price.value ,
    status : false ,
   }
   setData((prev)=> [...prev , newUser])
   addModal.current.close()
  }
   function editShow(user){
 editSet(user)
 editModal.current.showModal()
  }
  const editSave = (e)=> {
    e.preventDefault()
    setData((prev) => 
    prev.map((elem)=> (
      elem.id == edit.id ? {...elem , image : e.target.image.value , name : e.target.name.value , price : e.target.price.value} : elem
    )))
    editModal.current.close()
  editSet(null)
  }
   function chekFunc(id){
    setData((prev) => 
      prev.map((elem) => (
        elem.id == id ? 
        {...elem , status : !elem.status}:elem
      ))
    )
  }
   const filteredData =
  data.filter((elem) => 
    elem.name.toLocaleLowerCase().includes(search.toLocaleLowerCase().trim())
  )
  .filter((elem) =>{
    if(sort == 'true') return elem.status == true
    else if(sort == 'false') return elem.status == false
return true
  } 
)
  return (
   <div>
     <div className='bg-[#FAF6F2]'>
      <header className='max-w-[1600px] bg-[#A98C64] m-auto'>
        <div className='xl:w-200 m-auto hidden xl:flex  justify-between items-center p-3 text-white font-bold '>
          <div className='flex items-center gap-5'>
            <img src="../public/Vector.png" alt="" />
            <h2>Скидка <b>20%</b> на первый заказ</h2>
          </div>
          <div className='flex items-center gap-1'>
            <h2 className='underline'>Заказать</h2>
            <i class="fa-solid fa-right-long"></i>
          </div>
        </div>
        <div className='flex xl:hidden p-3 m-auto w-[90%] items-center justify-center gap-2 text-white text-[15px]'>
            <img className='w-[8%]' src="../public/Vector.png" alt="" />
            <h2>Скидка <b>10% </b> при заказе от 2х недель</h2>
          </div>
      </header>
      <section className='max-w-[1600px] bg-[#FAF6F2] m-auto '>
       <div className='lg:max-w-325 w-[90%] p-4 m-auto flex flex-col gap-2 items-center'>
        <h1 className=' lg:flex hidden self-end text-[#4D8F76] underline'>Перезвоните мне </h1>
        <div className='flex w-full items-center justify-between'>
          <img className='lg:w-[10%] w-[25%]' src="../public/logo.png" alt="" />
          <nav className='lg:flex hidden items-center gap-3'>
            <p>Подбор рациона</p>
            <p>Программы питания</p>
            <p>О нас</p>
            <p>Доставка</p>
            <p>Акции</p>
            <p>FAQ</p>
            <p>Отзывы</p>
          </nav>
          <div className='lg:flex hidden flex-col items-end gap-2'>
            <h1 className='text-2xl font-bold'>+7 988 500-1-700</h1>
            <h1>c 9:00 do 21:00</h1>
          </div>
          <img className='lg:hidden flex' src="../public/q2.png" alt="" />
        </div>
       </div>
       <div className='lg:max-w-325 w-[90%] m-auto flex lg:flex-row flex-col items-center justify-between'>
        <div className='lg:flex w-[55%] hidden flex-col items-start gap-16'>
      <h1 className='text-5xl font-bold'>Доставка прогрессивного
питания для гурманов</h1>
<div className='flex items-center gap-5'>
  <button className='bg-[#4D8F76] p-[8px_16px] rounded-[40px] text-white'>Подобрать питание</button>
  <button className='border-2 border-[#4D8F76] p-[6px_16px] rounded-[40px]'>Получить консультацию</button>
</div>
        </div>
        <div className='lg:hidden flex w-[90%] m-auto flex-col items-start gap-10'>
          <div className='flex flex-col items-start gap-5'>
            <h1 className='font-bold text-2xl'>Прогрессивное питание на каждый день</h1>
            <h1>Сбалансированный рацион в  современном формате — Супер-боул</h1>
          </div>
          <div className='flex items-center gap-5'>
  <button className='bg-[#4D8F76] p-[4px_6px] text-[15px] rounded-[40px] text-white'>Подобрать питание</button>
  <button className='border-2 border-[#4D8F76] p-[6px_6px] text-[12px] rounded-[40px]'>Получить консультацию</button>
</div>
        </div>
        <img src="../public/q1.png" alt="" />
       </div>
      </section>
      <Sec34  h1={"Еда, которая сделает тебя лучше!"} h2={"Мы помогаем создавать новое качество жизни для наших клиентов, чтоб каждый человек был счастливым, здоровым и не отвлекался на рутинные процессы."} h3={"Для этого мы создали новый уникальный продукт на рынке доставки еды и приглашаем вас окунуться в гастрономический шик уже сегодня."} img={Group}/>
      <Sec35 className="flex-row-reverse" h1={"Изысканное меню высокой кухни"} h2={"В наших блюдах мы продумали каждую деталь, все ингредиенты тщательно подобраны и создают неповторимый вкус."} h3={"Качественные продукты, деликатесы и суперфуды, которые помогают  поддерживать здоровье и обмен веществ. Мы используем крафтовые ингредиенты: с любовью выращиваем микрозелень, делаем соусы и масла, маринуем мясо, рыбу и морепродукты."} img={Frame}/>
     <section className='lg:max-w-325 w-[90%] m-auto flex flex-col gap-15 p-10  bg-[#E2DDC0] rounded-4xl'>
      <h1 className='lg:text-4xl text-2xl lg:text-start text-center font-bold'>Подберите рацион для своих целей</h1>
      <div className='w-full flex lg:flex-row lg:justify-start justify-center flex-wrap gap-5'>
        <div className='p-[6px_12px] bg-[#FAF6F2] shadow-md rounded-2xl flex items-center gap-2'>
          <p>Ж</p>
          <p>М</p>
        </div>
        <div className='p-[6px_10px] bg-[#FAF6F2] shadow-md   rounded-2xl'><p>Ваш вес</p></div>
        <div className='p-[6px_10px] bg-[#FAF6F2] shadow-md  rounded-2xl'><p>Ваш рост</p></div>
        <div className='p-[6px_10px] bg-[#FAF6F2] shadow-md  rounded-2xl'><p>Ваш возраст</p></div>
        <div className='p-[6px_10px] bg-[#FAF6F2] shadow-md  rounded-2xl flex items-center gap-5'>
          <p>Активность</p>
           <i class="fa-solid fa-angle-down"></i>
          </div>
        <div className='p-[6px_12px] bg-[#FAF6F2] shadow-md  rounded-2xl flex items-center gap-5'>
          <p>Выберите цель</p>
           <i class="fa-solid fa-angle-down"></i>
          </div>
           <button className='bg-[#4D8F76] p-[6px_12px] rounded-2xl text-white '>Рассчитать рацион</button>
      </div>
     </section>
     <section className='lg:max-w-325 w-[90%] m-auto mt-15 flex flex-col lg:items-start items-center gap-8 bg-white rounded-tr-2xl rounded-tl-2xl p-10'>
      <div className='w-full flex lg:flex-row flex-col justify-center items-center lg:justify-between gap-5'>
        <h1 className='lg:text-4xl font-bold'>Программа ПремиумБоул</h1>
        <div className='flex items-center gap-3 text-[#4D8F76]'>
<i class="fa-solid fa-bowl-food"></i>
<p>Каждый день новое меню</p>
        </div>
      </div>
      <div className='flex w-full flex-col gap-5'>
        <p>Калорийность</p>
        <div className='w-full flex items-center justify-center lg:justify-between flex-wrap gap-4'>
          <Cards tex1={"900 ккал"} tex2={"3 блюда"}/>
          <Cards tex1={"1 250 ккал "} tex2={"4 блюда"}/>
          <Cards tex1={"1 600 ккал"} tex2={"5 блюд"}/>
          <Cards tex1={"2 050 ккал"} tex2={"6 блюд"}/>
          <Cards tex1={"индивидуально "} tex2={"подобрать"}/>
        </div>
      </div>
       <div className='flex w-full flex-col gap-5'>
        <p>Продолжительность</p>
        <div className='w-full flex items-center justify-center lg:justify-between flex-wrap gap-4'>
          <Cards tex1={"Пробные 2 дня"} tex2={"за 2 900 ₽"}/>
          <Cards tex1={"11 неделя "} tex2={"1 700 ₽ в день"}/>
          <Cards tex1={"2 недели"} tex2={"1 600 ₽ в день"}/>
          <Cards tex1={"3 недели"} tex2={"1 520 ₽ в день"}/>
          <Cards tex1={"4 недели "} tex2={"1 450 ₽  в день"}/>
        </div>
      </div>
      <div className='flex gap-5 items-center  justify-between lg:w-[30%] w-full'>
        <p className='lg:text-[15px] font-bold text-[10px]' >Выберите, сколько дней <br /> в неделю вы хотите питаться</p>
        <div className='p-[6px_12px] border-2 border-[#DFCCB7] flex items-center#DFCCB7 gap-5 rounded-2xl'>
          <p>7</p>
          <p>8</p>
          <p>9</p>
        </div>
      </div>
      <div className='flex flex-col lg:items-start items-center gap-5'>
        <p className='text-2xl font-bold'>Пример дневного рациона</p>
        <p className='text-[#DFCCB7]'>6 блюд. Калорийность — 1 235 ккал. Белки — 103 г; жиры — 37 г; углеводы — 120 г</p>
        <div className='flex items-center flex-wrap gap-5'>
          <p className='p-[6px_10px] border-2 border-[#DFCCB7] rounded-2xl'>понедельник</p>
          <p className='p-[6px_10px] border-2 border-[#DFCCB7] rounded-2xl'>вторник</p>
          <p className='p-[6px_10px] border-2 border-[#DFCCB7] rounded-2xl'>четверг</p>
          <p className='p-[6px_10px] border-2 border-[#DFCCB7] rounded-2xl'>пятница</p>
          <p className='p-[6px_10px] border-2 border-[#DFCCB7] rounded-2xl'>суббота</p>
          <p className='p-[6px_10px] border-2 border-[#DFCCB7] rounded-2xl'>воскресенье</p> </div>
      </div>
      <div className='flex w-full lg:flex-row flex-col lg:justify-between justify-center items-center gap-5'>
        <div className='flex lg:w-[23%] w-full flex-col items-center gap-5'>
          <img src="../public/w1.png" alt="" />
          <div className='w-full flex flex-col items-start gap-2'>
            <p className='text-[#ffb35c] font-bold'>Завтрак 230/250 гр</p>
            <p className=' text-[13px] font-bold'>Утренний боул с перепелиным <br /> яйцом, киноа и лососем</p>
          </div>
        </div>
        <div className='flex lg:w-[23%] w-full flex-col items-center gap-5'>
          <img src="../public/w2.png" alt="" />
          <div className='w-full flex flex-col items-start gap-2'>
            <p className='text-[#ffb35c] font-bold'>Обед 230/250 гр</p>
            <p className=' text-[13px] font-bold'>Боул с куриными фрикадельками в кунжуте, брокколи и миндальным  соусом</p>
          </div>
        </div>
        <div className='flex lg:w-[23%] w-full flex-col items-center gap-5'>
          <img src="../public/w3.png" alt="" />
          <div className='w-full flex flex-col items-start gap-2'>
            <p className='text-[#ffb35c] font-bold'>Полдник 230/250 гр</p>
            <p className=' text-[13px] font-bold'>Утренний боул с перепелиным <br /> яйцом, киноа и лососем</p>
          </div>
        </div>
        <div className='flex lg:w-[23%] w-full flex-col items-center gap-5'>
          <img src="../public/w4.png" alt="" />
          <div className='w-full flex flex-col items-start gap-2'>
            <p className='text-[#ffb35c] font-bold'>Ужин 230/250 гр</p>
            <p className=' text-[13px] font-bold'>Утренний боул с перепелиным <br /> яйцом, киноа и лососем</p>
          </div>
        </div>
      </div>
     </section>
     <section className='bg-[#A2BE95] m-auto lg:max-w-325 max-w-[90%] flex lg:flex-row flex-col gap-8  items-center lg:p-20 p-5 text-white rounded-br-2xl rounded-bl-2xl'>
      <div className='flex flex-col items-center gap-5'>
        <button className='p-[8px_16px] bg-[#4D8F76] rounded-2xl'>Заказать 10 дней питания за 16 000 ₽</button>
        <p className='text-[15px] '>1 250 ккал за 1 600 ₽ в день</p>
      </div>
      <div className='flex lg:w-[70%] lg:flex-row items-center flex-col gap-5'>
        <img src="../public/e1.png" alt="" />
        <div className='flex flex-col items-start gap-2'>
          <p>Будем доставлять наборы каждый день.</p>
          <p>Доставка осуществляется каждый день с 06:00 до 12:00. Выбор интервала — 2 часа.
Заявки принимаются не позднее, чем за день до предполагаемой доставки.</p>
        </div>
      </div>
     </section>
     <section className='lg:max-w-325 w-[90%] m-auto flex flex-col lg:items-start items-center mt-15 gap-15'>
      <h1 className='lg:text-4xl font-bold text-2xl'>О нашем сервисе</h1>
      <div className='flex w-full flex-wrap gap-5'>
       <div className='lg:w-[32%] w-full flex flex-col lg:items-start items-center gap-5'>
        <img src="../public/r1.png" alt="" />
        <h1 className='font-bold text-[20px]'>Мы используем деликатные технологии приготовления блюд</h1>
        <h1>Сухой гриль без прямого контакта продукта
с жарочной поверхностью, запекание, су-вид</h1>
       </div>
       <div className='lg:w-[32%] w-full flex flex-col lg:items-start items-center gap-5'>
        <img src="../public/r2.png" alt="" />
        <h1 className='font-bold text-[20px]'>Меню из 90 блюд на две недели 
без повтора</h1>
        <h1>Сухой гриль без прямого контакта продукта
с жарочной поверхностью, запекание, су-вид</h1>
       </div>
       <div className='lg:w-[32%] w-full flex flex-col lg:items-start items-center gap-5'>
        <img src="../public/r3.png" alt="" />
        <h1 className='font-bold text-[20px]'>Здоровые рецепты</h1>
        <h1>Сухой гриль без прямого контакта продукта
с жарочной поверхностью, запекание, су-вид</h1>
       </div>
       <div className='lg:w-[32%] w-full flex flex-col lg:items-start items-center gap-5'>
        <img src="../public/r4.png" alt="" />
        <h1 className='font-bold text-[20px]'>Гарантия возврата</h1>
        <h1>Сухой гриль без прямого контакта продукта
с жарочной поверхностью, запекание, су-вид</h1>
       </div>
       <div className='lg:w-[32%] w-full flex flex-col lg:items-start items-center gap-5'>
        <img src="../public/r5.png" alt="" />
        <h1 className='font-bold text-[20px]'>Контроль температуры</h1>
        <h1>Сухой гриль без прямого контакта продукта
с жарочной поверхностью, запекание, су-вид</h1>
       </div>
       <div className='lg:w-[32%] w-full flex flex-col lg:items-start items-center gap-5'>
        <img src="../public/r6.png" alt="" />
        <h1 className='font-bold text-[20px]'>Забота о природе</h1>
        <h1>Сухой гриль без прямого контакта продукта
с жарочной поверхностью, запекание, су-вид</h1>
       </div>
       
      </div>
     </section>
          <section className='lg:max-w-325 w-[90%] m-auto mt-15 flex lg:flex-row flex-col items-center justify-between gap-8'>
      <div className='lg:w-[40%] w-full flex flex-col lg:items-start items-center gap-8'>
        <h1 className='text-[#4D8F76] font-bold text-xl'>Попробуйте новый формат рационов — Боулы! <br /> Это богатый набор полезных веществ и масса вкусовых впечатлений!</h1>
        <div className='flex flex-col gap-5 text-[15px] font-semibold'>
          <p>Боулы — это сбалансированный вариант блюда, содержащего в себе все необходимые элементы за счёт большого количества компонентов. Ингредиенты блюда не смешиваются между собой, а не спеша поедаются по отдельности.</p>
          <p>Мы готовим полноценное здоровое питание на день и ежедневно доставляем утром к вашим дверям.</p>
          <p>Наш сервис помогает экономить время, поддерживать стройность, работоспособность и укреплять здоровье.</p>
        </div>
      </div>
      <div className='lg:w-[55%] w-full flex items-center justify-between gap-3'>
        <div className='w-[40px] h-[40px] bg-white rounded-full flex items-center justify-center text-[#4D8F76]'>
          <i class="fa-solid fa-arrow-left"></i>
        </div>
        <img className='lg:w-[80%] w-[70%] rounded-3xl' src="../public/d1.png" alt="" />
        <div className='w-[40px] h-[40px] bg-white rounded-full flex items-center justify-center text-[#4D8F76]'>
          <i class="fa-solid fa-arrow-right"></i>
        </div>
      </div>
     </section>
     <section className='lg:max-w-325 w-[90%] m-auto mt-15 flex flex-col lg:items-start items-center gap-8'>
      <p className='text-[15px]  font-semibold'>Доставка правильного питания «Пора поесть» – это специально разработанные программы здорового, раздельного и, несомненно, вкусного питания.</p>
      <h1 className='lg:text-2xl text-xl font-bold text-[#4D8F76]'>Уникальность проекта заключается в объединении медицинских знаний и современных методов приготовления пищи.</h1>
      <p className='text-[15px] font-semibold'>Программы питания разработаны шеф-поваром нашей компании совместно с диетологами. А это предполагает, что организм регулярно будет получать в необходимом количестве и оптимальных соотношениях многие питательные вещества – белки, жиры, воду, минеральные вещества и витамины, а наш шеф-повар позаботится о вкусных качествах наших блюд</p>
     </section>

     <section className='lg:max-w-325 w-[90%] m-auto mt-15 flex flex-col gap-5 p-10 bg-[#F4EDDE] rounded-4xl'>
      <h1 className='lg:text-4xl text-2xl lg:text-start text-center font-bold'>Карта доставки</h1>
      <p className='lg:text-start text-center'>Доставка осуществляется каждый день с 06:00 до 12:00. <br /> Выбор интервала — 2 часа.</p>
      <div className='flex lg:flex-row flex-col justify-between gap-5'>
        <img className='lg:w-[70%] h-100 w-full rounded-2xl' src="../public/map.png" alt="" />
        <div className='lg:w-[30%] w-full flex flex-col lg:items-stretch items-center gap-5'>
          <div className='w-full flex lg:flex-col flex-wrap justify-center gap-4'>
            <p className='lg:w-full w-[48%] text-center text-[13px] lg:text-[16px] p-[8px_12px] border-2 border-[#1EB949] rounded-[40px]'>По городу бесплатно</p>
            <p className='lg:w-full w-[48%] text-center text-[13px] lg:text-[16px] p-[8px_12px] border-2 border-[#34A2FE] rounded-[40px]'>Пригород 25 км - 100 ₽</p>
            <p className='lg:w-full w-[48%] text-center text-[13px] lg:text-[16px] p-[8px_12px] border-2 border-[#FFBC4F] rounded-[40px]'>Пригород 35 км - 300 ₽</p>
            <p className='lg:w-full w-[48%] text-center text-[13px] lg:text-[16px] p-[8px_12px] border-2 border-[#FC5239] rounded-[40px]'>Пригород 50 км - 500 ₽</p>
          </div>
          <p className='text-[13px]'>Уточните стоимость и время доставки</p>
          <div className='flex flex-col lg:items-start items-center'>
            <h1 className='text-2xl font-bold'>+7 988 500-1-700</h1>
            <p className='text-[10px]'>с 09:00 до 21:00</p>
          </div>
          <button className='w-full bg-[#4D8F76] p-[10px_16px] rounded-[40px] text-white text-[13px] font-bold'>Перезвоните мне</button>
        </div>
      </div>
     </section>

     <section className='lg:max-w-325 w-[90%] m-auto mt-15 flex flex-col lg:items-start items-center gap-5 p-10 bg-[#FAF6F2] rounded-4xl'>
      <h1 className='lg:text-4xl text-2xl font-bold'>Частые вопросы</h1>
      <div className='flex items-center flex-wrap lg:justify-start justify-center gap-4'>
        <p className='p-[6px_16px] border-2 border-[#DFCCB7] rounded-[40px]'>Продукты</p>
        <p className='p-[6px_16px] border-2 border-[#DFCCB7] rounded-[40px]'>Программы</p>
        <p className='p-[6px_16px] border-2 border-[#DFCCB7] rounded-[40px]'>Оплата и доставка</p>
        <p className='p-[6px_16px] border-2 border-[#DFCCB7] rounded-[40px]'>Хранение</p>
      </div>
      <div className='w-full flex flex-col gap-3'>
        <div className='w-full bg-white rounded-2xl p-[16px_20px] flex items-center justify-between'>
          <p className='font-bold'>Как я могу оплатить заказ?</p>
          <i class="fa-solid fa-angle-down"></i>
        </div>
        <div className='w-full bg-white rounded-2xl p-[16px_20px] flex flex-col gap-3'>
          <div className='flex items-center justify-between'>
            <p className='font-bold'>Могу ли я изменить адрес и время доставки?</p>
            <i class="fa-solid fa-angle-up"></i>
          </div>
          <p className='text-[14px]'>Каждый вечер, в день доставки, с вами связывается курьер, ориентировочно с 19:00 до 20:00 для уточнения адреса и времени доставки. <br /> При необходимости, вы можете их изменить, сообщив об этом курьеру при звонке.</p>
        </div>
        <div className='w-full bg-white rounded-2xl p-[16px_20px] flex items-center justify-between'>
          <p className='font-bold'>Могу ли я перенести день доставки?</p>
          <i class="fa-solid fa-angle-down"></i>
        </div>
        <div className='w-full bg-white rounded-2xl p-[16px_20px] flex items-center justify-between'>
          <p className='font-bold'>Могу ли я приостановить доставку, на какой срок?</p>
          <i class="fa-solid fa-angle-down"></i>
        </div>
      </div>
     </section>

     <section className='lg:max-w-325 w-[90%] m-auto mt-15 flex lg:flex-row flex-col lg:justify-between justify-center items-center gap-8 p-10 bg-[#B89683] rounded-4xl text-white'>
      <div className='flex flex-col lg:items-start items-center gap-5'>
        <h1 className='lg:text-4xl font-semibold text-2xl'>Будьте всегда в курсе!</h1>
        <div className='flex lg:flex-row flex-col items-center gap-3'>
          <i class="fa-regular fa-envelope"></i>
          <p className='lg:text-start text-center text-[13px]'>Подпишитесь на рассылку и будьте всегда в курсе новинок, акций и новостей!</p>
        </div>
      </div>
      <div className='flex lg:flex-row flex-col lg:w-[45%] w-full items-center gap-5'>
        <input className='w-full bg-[#FAF6F2] p-[10px_20px] rounded-[40px] text-black outline-none' type="text" placeholder='Укажите вашу почту' />
        <button className='lg:w-auto w-full bg-[#4D8F76] p-[10px_20px] rounded-[40px] text-white text-[13px] font-bold'>Подписаться</button>
      </div>
     </section>

     <footer className='lg:max-w-325 w-[90%] m-auto mt-15 pb-10 flex flex-col lg:items-start items-center gap-8'>
      <div className='w-full flex lg:flex-row flex-col lg:justify-between items-center gap-5'>
        <div className='flex lg:flex-row flex-col items-center lg:gap-20 gap-5'>
          <div className='flex flex-col lg:items-start items-center'>
            <h1 className='text-2xl font-bold'>+7 988 500-1-700</h1>
            <p className='text-[10px]'>Ежедневно с 09:00 до 21:00</p>
          </div>
          <h1 className='text-2xl font-bold'>hello@pora-poest.com</h1>
        </div>
        <div className='flex items-center gap-4 text-white'>
          <div className='w-[35px] h-[35px] bg-[#4D8F76] rounded-full'></div>
          <div className='w-[35px] h-[35px] bg-[#4D8F76] rounded-full'></div>
          <div className='w-[35px] h-[35px] bg-[#4D8F76] rounded-full flex items-center justify-center'>
            <i class="fa-brands fa-instagram"></i>
          </div>
        </div>
      </div>
      <p className='lg:text-start text-center text-[13px]'>ООО «ПораПоесть», г. Краснодар, ул. Кубанская Набережная улица, дом 5, офис 4</p>
      <div className='w-full flex lg:flex-row flex-col lg:justify-between items-center gap-5'>
        <div className='flex flex-col lg:items-start items-center gap-2'>
          <p className='lg:text-start text-center text-[13px]'>© 2021 ПораПоесть — сервис доставки прогрессивного питания.</p>
          <p className='lg:text-start text-center text-[9px]'>Фотографии блюд на сайте являются вариантом сервировки блюда. Внешний вид блюда может отличаться от фотографии на сайте. <br /> Указывая электронную почту и номер телефона на сайте, вы соглашаетесь с условиями <span className='text-[#4D8F76]'>Публичной оферты</span> и <span className='text-[#4D8F76]'>Политикой конфиденциальности</span></p>
        </div>
        <div className='flex items-center gap-2'>
           <img src="../public/f.png" alt="" />
        </div>
      </div>
     </footer>
    </div>
  <section className='lg:max-w-325 m-auto w-[90%] flex flex-col items-center gap-10 py-8 lg:py-12'>
  <div className='flex w-full items-center justify-between'>
    <h1 className='lg:text-4xl text-2xl font-bold'>Меню Блюд</h1>
    <button
      className='bg-[#4D8F76] p-[8px_16px] rounded-[40px] text-white text-[15px] font-bold'
      onClick={() => addModal.current.showModal()}
    >+ Добавить Блюдо</button>
  </div>
  <div className='w-full flex flex-col gap-8 items-center'>
    <div className='flex items-center justify-between gap-3 w-full'>
      <input
        className='lg:w-[50%] w-full bg-white border-2 border-[#DFCCB7] p-[8px_20px] rounded-[40px] outline-none'
        type="search" placeholder='search'
        onInput={(e)=> searchSet(e.target.value)} />
      <select
        className='bg-white border-2 border-[#DFCCB7] p-[8px_16px] rounded-[40px] outline-none'
        onChange={(e)=> sortSet(e.target.value)} >
        <option value="all">Все Блюда</option>
        <option value="true">В наличии</option>
        <option value="false">Нету в наличии</option>
      </select>
    </div>
    <div className='w-full flex flex-wrap gap-6'>
      <Modal ref={addModal} nameMod={"Добавить блюдо"}>
        <form className='flex flex-col gap-4' onSubmit={addSave}>
          <input className='bg-white border border-grey p-[8px_20px] rounded-[40px] outline-none' type="text" placeholder='Image...' name='image'/>
          <input className='bg-white border border-grey p-[8px_20px] rounded-[40px] outline-none' type="text" placeholder='name...' name='name'/>
          <input className='bg-white border border-grey p-[8px_20px] rounded-[40px] outline-none' type="text" placeholder='price...' name='price'/>
          <button className='bg-[#4D8F76] p-[10px_16px] rounded-[40px] text-white font-bold' type='submit'>Save</button>
        </form>
      </Modal>
      <Modal ref={editModal} nameMod={"Редактировать блюдо"}>
        <form className='flex flex-col gap-4' onSubmit={editSave} key={edit?.id} >
          <input className='bg-white border border-grey p-[8px_20px] rounded-[40px] outline-none' defaultValue={edit?.image} type="text" placeholder='Image...' name='image'/>
          <input className='bg-white border border-grey p-[8px_20px] rounded-[40px] outline-none' defaultValue={edit?.name} type="text" placeholder='name...' name='name'/>
          <input className='bg-white border border-grey p-[8px_20px] rounded-[40px] outline-none' defaultValue={edit?.price} type="text" placeholder='price...' name='price'/>
          <button className='bg-[#4D8F76] p-[10px_16px] rounded-[40px] text-white font-bold' type='submit'>Save</button>
        </form>
      </Modal>
      <Modal ref={infoModal} nameMod={"Информация о блюде"}>
        <div className='flex flex-col gap-4'>
          <img className='w-full h-60 object-cover rounded-2xl' src={info?.image} alt="" />
          <h1 className='text-xl font-bold'>{info?.name}</h1>
          <p className='text-[#4D8F76] font-bold text-xl'>{info?.price}</p>
          <p className={`font-bold ${info?.status ? 'text-[#4D8F76]' : 'text-[#FC5239]'}`}>
            {info?.status ? 'В наличии' : 'Нет в наличии'}
          </p>
        </div>
      </Modal>
      {
        filteredData.map((elem)=>(
          <div className='lg:w-[23%] sm:w-[48%] w-full bg-white rounded-3xl overflow-hidden shadow-md' key={elem.id}>
           <img className='w-full h-60 object-cover' src={elem.image} alt="" />
           <div className='p-4 flex flex-col gap-3'>
            <div className='flex items-center justify-between gap-2'>
              <h1 className='font-bold'>{elem.name}</h1>
              <input className='accent-[#4D8F76] w-[18px] h-[18px]' type="checkbox" checked = {elem.status} onChange={()=> chekFunc(elem.id)}
        />
            </div>
            <h1 className=' font-bold text-xl'>{elem.price}</h1>
            <div className='flex items-center justify-between'>
              <h1 className={`text-[13px] font-semibold ${elem.status ? 'text-[#4D8F76]' : 'text-[#FC5239]'}`}>{elem.status ? 'В наличии' : 'Нет в наличии'}</h1>
              <div className='flex gap-2'>
                <button className=' text-[rgb(252,231,2)]' onClick={()=> infoShow(elem)}><i class="fa-solid fa-circle-info"></i></button>
                <button className=' text-[#FC5239]' onClick={()=> dltUser(elem.id)}><i class="fa-solid fa-trash"></i></button>
                <button className=' text-[#4d7f8f]' onClick={()=> editShow(elem)}><i class="fa-regular fa-pen-to-square"></i></button>
              </div>
            </div>
           </div>
          </div>
        ))
      }
    </div>
  </div>
</section>
   </div>
  )
}

export default App
