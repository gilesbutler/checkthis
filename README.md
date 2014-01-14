# Checkthis!
---
### A simple jQuery plugin for replacing radio buttons with a styled alternative.

1. Add a radio button or checkbox input and give it a unique class or ID.
2. Add an anchor tag with a class of **checkthis**
3. Add a data attribute with class **data-checkthis** to the anchor tag, The value of the data attribute should be the unique class or ID from the radio button or checkbox input.
4. Run the plugin when your document loads `$('.checkthis').checkthis();`

###Example
##### Markup
```
<input type="radio" name="example_select" class="ct-yes" value="yes">

<a href="#" data-checkthis=".ct-yes" class="checkthis">Yes</a>

<input type="radio" name="example_select" class="ct-no" value="no">

<a href="#" data-checkthis=".ct-no" class="checkthis">No</a>

<input id="ct-hello" type="checkbox">

<a href="#" data-checkthis="#ct-hello" class="checkthis">Checkbox</a>
```

##### JS
```
$('.checkthis').checkthis();
```

##### CSS
```
input[type=radio], input[type=checkbox] {
  display: none;
}
.checkthis {
  color: blue;
}
.checked {
  color: red;
}
```