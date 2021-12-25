

let paragraphContents = [`Consequat occaecat ullamco amet non eiusmod nostrud dolore irure
incididunt est duis anim sunt officia. Fugiat velit proident aliquip
nisi incididunt nostrud exercitation proident est nisi. Irure magna
elit commodo anim ex veniam culpa eiusmod id nostrud sit cupidatat
in veniam ad. Eiusmod consequat eu adipisicing minim anim aliquip
cupidatat culpa excepteur quis. Occaecat sit eu exercitation irure
Lorem incididunt nostrud.`, `Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum similique illum ab, obcaecati quo voluptas
placeat quibusdam soluta nostrum excepturi! Repellat nesciunt ut voluptas sapiente eos aperiam eaque illo
culpa, doloribus architecto, odit nam minima autem voluptatem inventore illum expedita dicta atque eligendi.
Consequuntur quos obcaecati quas dolores tenetur natus.`, `There worse by an of miles civil. Manner before lively wholly am mr indeed expect. Among every merry his yet
has her. You mistress get dashwood children off. Met whose marry under the merit. In it do continual consulted
no listening. Devonshire sir sex motionless travelling six themselves. So colonel as greatly shewing herself
observe ashamed. Demands minutes regular ye to detract is.`]



document.querySelectorAll('.btn-tab').forEach(btn => {
  btn.addEventListener('click', changeTextFade)
})



function changeTextFade(e) {
  if (e.currentTarget.classList.contains('active')) return
  document.querySelectorAll('.btn-tab').forEach(btn => {
    btn.classList.remove('active')
  }
  )
  e.currentTarget.classList.add('active')

  let index = [...document.querySelectorAll('.btn-tab')].indexOf(e.currentTarget)
  let paragraph = document.querySelector('.profileParagraph')
  paragraph.classList.remove('show')
  setTimeout(() => {
    paragraph.textContent = paragraphContents[index]
  }, 200)
  setTimeout(() => {
    paragraph.classList.add('show')
  }, 200)
}


let navbar = document.querySelector('.navbar')
document.addEventListener('scroll', () => {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    console.log('navbar :>> ', navbar)
    navbar.classList.add('scrolled')
  } else {
    navbar.classList.remove('scrolled')
  }
})

function showDownload() {
  document.getElementById('Download').scrollIntoView()
}


