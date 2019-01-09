const sentenceTag = document.querySelector(`input[type="text"]`)

const typesizeTag = document.querySelector(`input[name="typesize"]`)

const typesizeOutput = document.querySelector("span.typesize-output")

const lineheightTag = document.querySelector(`input[name="lineheight"]`)

const lineheightOutput = document.querySelector("span.lineheight-output")

const italicTag = document.querySelector(`input[name="italic"]`)

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