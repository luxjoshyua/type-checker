const sentenceTag = document.querySelector(`input[type="text"]`)

const typesizeTag = document.querySelector(`input[name="typesize"]`)

const typesizeOutput = document.querySelector("span.typesize-output")

const lineheightTag = document.querySelector(`input[name="lineheight"]`)

const lineheightOutput = document.querySelector("span.lineheight-output")

// for the font-weight
const fontweightTag = document.querySelector(`input[name="fontweight"]`)

// for the font-weight
const fontweightOutput = document.querySelector("span.fontweight-output")

const italicTag = document.querySelector(`input[name="italic"]`)

const typefaceTag = document.querySelector(`select[name="typeface"]`)



// for the different colour backgrounds on the a
// querySelectorAll because there's multiple colours, not just querySelector
const colorTags = document.querySelectorAll("div.colors div")



const outputTag = document.querySelector("textarea.output")

const originalText = outputTag.value


// when I type in my sentence tag, update the output tag accordingly

// if there's no value, put in the original text
sentenceTag.addEventListener("keyup", function () {
  // outputTag.innerHTML = sentenceTag.value
  // outputTag.innerHTML = this.value
  if (this.value) {
    outputTag.value = this.value
  } else {
    outputTag.value = originalText
  }
})


// when I type in my ouput tag, update the sentence tag accordingly
// makes it work both ways
outputTag.addEventListener("keyup", function () {
  sentenceTag.value = this.value
})


// when I change my typesize slider, update the text next to it AND
// change the outputTag's font size  
typesizeTag.addEventListener("input", function () {
  // change the font size style
  outputTag.style.fontSize = this.value + "px"
  // normal HTML tag
  typesizeOutput.innerHTML = this.value
})


// change my font-weight using the fontweightTag and fontweightOutput

fontweightTag.addEventListener("input", function () {
  outputTag.style.fontWeight = this.value
  fontweightOutput.innerHTML = this.value
})


lineheightTag.addEventListener("input", function () {

  outputTag.style.lineHeight = this.value
  lineheightOutput.innerHTML = this.value

})

// when I change my italic checkbox, update the font style to either
// normal or italic if it's checked or not
italicTag.addEventListener("change", function () {

  if (this.checked) {
    // pick the output tag then change the style then find the font style
    outputTag.style.fontStyle = "italic"

  }
  // doesn't need the curly brackets because already connected to the if statement
  else {
    outputTag.style.fontStyle = "normal"

  }

})

// when I change my select for typeface, update the font family
typefaceTag.addEventListener("input", function () {
  outputTag.style.fontFamily = this.value
})


// go through all of my colour tags, then ...
// when I click one of them, change the background colour and the text colour, and make this tag be selected

// 1. load all the color tags
colorTags.forEach(tag => {
  
  // 2. wait for a click, then change the background colour and text 
  tag.addEventListener("click", function () {
    outputTag.style.backgroundColor = this.style.backgroundColor
    outputTag.style.color = this.style.color

    // reset the classes
    // 3. then go through all the previous tags and remove the class .selected
    colorTags.forEeach(tag => {
      tag.classList.remove("selected")
    })
    
    // 4. then only add the class .selected to this clicked one
    this.classList.add("selected")

  })

})