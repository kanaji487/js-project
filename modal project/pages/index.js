import { Inter } from 'next/font/google'

const modalBtn = document.querySelector('.modal-btn');
const modal = document.querySelector('.modal-overlay');
const closeBtn = document.querySelector('.close-btn');

modalBtn.addEventListener('click', function(){
  modal.classList.add('open-modal');
});

closeBtn.addEventListener('click', function(){
  modal.classList.remove('open-modal');
});

export default function Home() {
  return (
    <>
      <header className='hero'>
        <div className='banner'>
          <h1>Modal project</h1>
          <button className='btn modal-btn'>Open modal</button>
        </div>
      </header>

      <div className='modal-overlay'>
        <div className='modal-container'>
          <h3>Modal content</h3>
          <button className='close-btn'>
            <i className='fas fa-times'></i>
          </button>
        </div>
      </div>
    </>
  )
}
