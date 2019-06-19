$(document).ready(function(){
 new TypeIt('#myElement', {
      speed: 70,
      cursor: true,
      })
      .type('Fala ae!')
      .pause(500)
      .break()
      .type('Meu nome é Saul Vieira')
      .pause(500)
      .break()
      .type('Desenvolvedor Front-end')
});