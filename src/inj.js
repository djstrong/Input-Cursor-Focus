if (document.activeElement.tagName != "INPUT") {
  var inputs = document.body.getElementsByTagName("input")
  focused = false
  for (var i=0; i<inputs.length; i++) {
    var input = inputs[i]
    if (input.type=="text") {
      input.focus()
      focused = true
      break
    }
  }
  
  if (!focused && inputs.length>0)
    inputs[0].focus()
}