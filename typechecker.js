const sentenceTag = document.querySelector(`input[type="text"]`)

const outputTag = document.querySelector("section.output")

const originalText = outputTag.innerHTML


// when I type in my sentence tag, update the output tag accordingly

// if there's no value, put in the original text

sentenceTag.addEventListener("keyup", function () {
  // outputTag.innerHTML = sentenceTag.value
  // outputTag.innerHTML = this.value
  if (this.value) {
    outputTag.innerHTML = this.value
  } else {
    outputTag.innerHTML = originalText 
  }
})



