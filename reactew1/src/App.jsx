import React from 'react'

const App = () => {
  return (
    <div>
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
    </div>
  )
}

export default App
