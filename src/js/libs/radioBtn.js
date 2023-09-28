// Получите ссылки на радио кнопки и изображение
const whiteRadio = document.getElementById('whiteRadio')
const greenRadio = document.getElementById('greenRadio')
const image = document.getElementById('image')

// Добавьте обработчики событий для радио кнопок
whiteRadio.addEventListener('click', function () {
  // При выборе белой кнопки, установите изображение на белое.svg
  image.src = '../../img/white.svg'
})

greenRadio.addEventListener('click', function () {
  // При выборе зеленой кнопки, установите изображение на зеленое.svg
  image.src = '../../img/green.svg'
})
