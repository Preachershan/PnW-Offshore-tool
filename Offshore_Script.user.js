// ==UserScript==
// @name         Offshore script
// @namespace    Preacher
// @version      1.0
// @description  Transaction to offshore made easy
// @author       Preacher
// @match        https://politicsandwar.com/alliance/id=*Your alliance id here*&display=bank
// @icon         https://pbs.twimg.com/profile_images/876630922547740672/dcqCkdZm_400x400.jpg
// @grant        nil

// ==/UserScript==

(function() {
    const push = () =>{
      const held = [...document.querySelector(".nationtable").children[0].children].slice(1).map(e=>Number(e.children[1].innerText.replace('$','').replace(/,/g, '')))
      const input = document.querySelectorAll('.nationtable')[2].querySelectorAll('[style="text-align:right;"]')
      input.forEach((i,ii)=> { i.children[0].value = held[ii]})
      document.querySelector('[name="withtype"]').value = "Alliance"
      document.querySelector('[name="withrecipient"]').value = "*Offshore name here*"
      document.querySelector('[name="withsubmit"]').click()

    }
    window.addEventListener('load', function() {
      const e = document.createElement('button')
      e.classList.add('btn','btn-primary')
      e.innerText = "Send to *Offshore name here*"
      e.addEventListener('click',push)
      document.querySelector('[href="#available-resources"]').parentElement.appendChild(e)
    })
})();
