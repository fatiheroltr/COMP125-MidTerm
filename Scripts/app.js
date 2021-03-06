/*
File name : app.js v1.0
Author : Fatih Erol
Website : https://fatiheroltr.github.io/COMP125-MidTerm
Description : COMP125 - Midterm Project
*/

"use strict";

// IIFE - Immediately Ivoked Function Expression
(function () {

  function addParagraphsToPage() {

    let StringVariables = {
      introParagraph:
        `Now is the time to travel to Greece. The country may be going through an economic crisis, but many travellers say that it hasn't impacted the experience of visiting. Plus, there may be some great deals.</br></br>Greece has 1,400 islands, though only 230 of them are inhabited.</br></br>And while everyone knows about Santorini and Mykonos, there are gorgeous lesser-known islands in Greece, too.`,
      folegandros:
        `Folegandros is almost a Greek cliché, full of beautiful whitewashed houses with bright blue doors lining cobblestoned streets on steep cliffs. Rugged and remote, without chain hotels or package tours — not even a bank or ATM — and accessible only by ferry, the volcanic island boasts solitude in spades, secluded beaches, and incredible sunsets.`,
      alonissos:
        `Off the mainland, this island, whose surrounding waters are a designated marine park full of seals and dolphins, is a nature lover's dream. The spectacular spot's crystal clear waters and beautiful beaches are perfect for diving, and its lush flora and dense forests ideal for hikes. Since the rich landscape is chock full of indigenous herbs, it's also known for its traditional medicine, and home of the International Academy of Homeopathy.`,
      spetses:
        `This bohemian paradise is more Côte d'Azur than Grecian island. Spetses was hot in the '60s, when it hosted Marilyn Monroe and Elizabeth Taylor, and remains a swanky summer retreat for Athens' glitterati to this day, full of fancy hotels, mansions and yachts, and stylish boutiques. Aside from a handful of locally-owned cabs, the four-mile-long island has banned cars in town, giving it a refreshingly 19th-century vibe, with horse-drawn carriages being a common sight.`,
      amorgos:
        `Shipwrecks, sea caves and beautiful clear waters make Amorgos popular with snorkelers, but the mountainous island is the perfect compromise between unwinding and adventure, boasting beautiful beaches but also hiking, scuba diving and rock-climbing. One of the island's main attractions is the 11th-century cliffside monastery of Panayia Hozoviótissa, which is precariously carved into a cliff.`,
      syros:
        `A favourite Athenian escape and former shipowners' vacation spot full of grand mansions, Syros is little known to foreigners. Famous for its neoclassical architecture and perfectly preserved heritage, its capital, Ermoupolis, was a 13th-century Venetian-built town and important trade and industrial centre, and boasts giant churches and beautiful villas, a stunning town hall, and labyrinthine streets and stairways.`,
      milos:
        `This volcanic island, with catacombs and ancient iron mines to explore, is dramatically rugged, and famous for its stunning rock formations. Often likened to a moonscape, it's also known for its hot springs, the ancient Venus De Milo statue that was found here, and for its diversity of incredible beaches. Known as \"the island of colours\" it's home to around 80 beaches — some only accessible by boat — ranging from stunningly white, to striking black, and even unusual red and grey. However, each beach has the same Evian-clear turquoise waters, and is surrounded by a rugged mountain landscape.`,
      hydra:
        `The first thing you'll notice on this beautiful island is the lack of cars — and buses, motorcycles, or other wheeled vehicles, as well as high rises. The winding little streets full of beautiful 18th-century mansions, churches, cathedrals, museums and art galleries are covered in cobblestones, and mostly trafficked by donkeys and humans. Back in the day, the island attracted celebrities like Leonard Cohen and Sophia Loren, but was somehow forgotten over the years. That means that travellers to Hydra can have the chic yet almost rural island paradise more or less to themselves.`,
      ithaca:
        `Most famous for being the home of Odysseus, and a prominent figure in Homer's "The Odyssey," Ithaca is said to have been inhabited since the 2nd millennium BC.Made up of two islands joined by a narrow strip of land, many visit it to see the legendary sites mentioned by Homer.However, Ithaca is more than its mythical counterpart, beckoning with secluded beaches, dramatic cliffs, beautiful olive groves, and sleepy fishing villages full of Byzantine churches and monasteries.`,
      gavdos:
        `Near the more well-known Crete, Gavdos is the most southern island in Greece — and the most southern spot in Europe discounting the Canaries. Only accessible by ferry, the remote island has only about 50 permanent residents, and can feel like your private playground. Local legend has it that the island was the home of goddess Calypso, who kept Odysseus prisoner here. Today, a favorite tourist activity is to visit the spot believed to be her cave. Be warned, you won't find any luxury hotels here. While the romantically under-developed, super laid back island has a number of rooms for rent, those are limited, as the real draw here for many is the free, seaside camping.`
    };

    document.getElementById("IntroParagraph").innerHTML = StringVariables.introParagraph;
    document.getElementById("Folegandros").innerHTML = StringVariables.folegandros;
    document.getElementById("Alonissos").innerHTML = StringVariables.alonissos;
    document.getElementById("Spetses").innerHTML = StringVariables.spetses;
    document.getElementById("Amorgos").innerHTML = StringVariables.amorgos;
    document.getElementById("Syros").innerHTML = StringVariables.syros;
    document.getElementById("Milos").innerHTML = StringVariables.milos;
    document.getElementById("Hydra").innerHTML = StringVariables.hydra;
    document.getElementById("Ithaca").innerHTML = StringVariables.ithaca;
    document.getElementById("Gavdos").innerHTML = StringVariables.gavdos;

    return true;
  }

  function formValidation() {

    let contactForm = document.getElementById("contactForm");

    if (contactForm) {
      let submitButton = document.getElementById("sendButton");
      let errorMessage = document.getElementById("errorMessage");

      contactForm.noValidate = true;
      submitButton.disabled = true; // will be enabled after validation completed

      let firstName = document.getElementById("firstName");
      firstName.addEventListener("blur", (event) => {
        if (firstName.value.length < 2) {
          firstName.focus();
          errorMessage.hidden = false;
          errorMessage.textContent = "Please enter a valid First Name (at least two characters)"
          firstName.classList.remove('valid'); // If a form element cannot be validated, loses the "valid" class
        }
        else {
          errorMessage.hidden = true;
          console.log('%c+ Somebody is writing to the contact form', "color:#228B22; font-size:12px;")
          firstName.classList.add('valid'); // If a form element validated succesfully, takes a "valid" class
        }
      });

      let lastName = document.getElementById("lastName");
      lastName.addEventListener("blur", (event) => {
        if (lastName.value.length < 2) {
          lastName.focus();
          errorMessage.hidden = false;
          errorMessage.textContent = "Please enter a valid Last Name (at least two characters)"
          lastName.classList.remove('valid'); // If a form element cannot be validated, loses the "valid" class
        }
        else {
          errorMessage.hidden = true;
          lastName.classList.add('valid'); // If a form element validated succesfully, takes a "valid" class
        }
      });

      let contactNumber = document.getElementById("contactNumber");
      contactNumber.addEventListener("blur", (event) => {
        let phoneNo = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/; // Ref: https://www.w3resource.com/javascript/form/javascript-form-validation.php
        if (contactNumber.value.match(phoneNo)) {
          errorMessage.hidden = true;
          contactNumber.classList.add('valid'); // If a form element validated succesfully, takes a "valid" class
        }
        else {
          contactNumber.focus();
          errorMessage.hidden = false;
          errorMessage.textContent = "Please enter a valid Phone number (10 digits)";
          contactNumber.classList.remove('valid'); // If a form element cannot be validated, loses the "valid" class
        }
      });

      let email = document.getElementById("email");
      email.addEventListener("blur", (event) => {
        let eMail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; // Ref: https://www.w3resource.com/javascript/form/javascript-form-validation.php
        if (email.value.match(eMail)) {
          errorMessage.hidden = true;
          email.classList.add('valid'); // If a form element validated succesfully, takes a "valid" class
        }
        else {
          email.focus();
          errorMessage.hidden = false;
          errorMessage.textContent = "Please enter a valid email address";
          email.classList.remove('valid'); // If a form element cannot be validated, loses the "valid" class
        }
      });

      let comments = document.getElementById("comments");
      comments.addEventListener("blur", (event) => {
        if (comments.value.length < 9) {
          comments.focus();
          errorMessage.hidden = false;
          errorMessage.textContent = "Message should be at least 10 character";
          comments.classList.remove('valid'); // If a form element cannot be validated, loses the "valid" class
        }
        else {
          errorMessage.hidden = true;
          comments.classList.add('valid'); // If a form element validated succesfully, takes a "valid" class
        }
      });

      submitButton.addEventListener("click", () => { // When the user presses to Send buttton
        event.preventDefault();
        console.log('%c+ Send button clicked', "font-size:12px; color:#228B22;")
        console.log('\n%cContact Form Output\n--------------------', "font-weight:bold; font-size:11px;")
        console.log("First Name : " + firstName.value)
        console.log("Last Name : " + lastName.value)
        console.log("Phone number : " + contactNumber.value)
        console.log("Email : " + email.value)
        console.log("Message : " + comments.value)
      });

      let formElements = document.querySelectorAll('.form-control'); // // Store every form-control elements
      formElements.forEach(function (input) { // Loop through each of the form-control element
        input.addEventListener("blur", function () { // Listen for the "blur" event for the current form-control element
          let validFormElements = document.querySelectorAll('.valid'); // store all of the validated form-control elements 
          // during the blur event, so that we have the most up to date valid fields stored.

          // Check the number of form elements against the number of valid form elements
          // If the numbers are equal, our form is valid, otherwise we still have
          // invalid fields
          if (formElements.length == validFormElements.length) {
            submitButton.disabled = false;
            console.log('%c+ Form validation completed and Send button enabled', "font-size:12px; color:#228B22;")
          }
          else {
            submitButton.disabled = true; // disable the send button
          }
        });
      });
    }

    return false;
  }

  function Start() {
    console.log('%cThe Travel Report App Started!', "font-size: 16px; font-weight:bold; color:darkred;");
    console.log('%cCurrent Status:', "font-weight:bold; font-size:14px;")

    let success = addParagraphsToPage();
    if (success) {
      console.log('%c+ Successfully added paragraphs to the page', "color:#228B22; font-size:12px;");
    }
    else {
      console.warn('%c- Content not added to the page!', "color:red; font-size:12px;");
    }

    formValidation();
  }

  window.addEventListener("load", Start);

})();