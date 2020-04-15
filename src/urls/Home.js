import React from 'react'
import MainList from '../components/MainList';


function Home() {
  return (
    <div> 
      
      <div id="carouselFadeExampleIndicators" class="carousel slide carousel-fade" data-ride="carousel">
  <div class="carousel-inner" role="listbox">
    <div class="carousel-item active">
      <img class="d-block w-100" src="#" data-src="holder.js/900x400?theme=social" alt="First slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="#" data-src="holder.js/900x400?theme=industrial" alt="Second slide"/>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselFadeExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselFadeExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
    </div>
  )
}

export default Home;