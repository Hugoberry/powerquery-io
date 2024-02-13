---
title: Text.Remove
---

# Text.Remove


Removes all occurrences of the given character or list of characters from the input text value.


## Syntax

```powerquery
Text.Remove(
    text as text,
    removeChars as any
) as text
```


## Remarks

Returns a copy of the text value <code>text</code> with all the characters from <code>removeChars</code> removed.  


## Examples

### Example #1 
Remove characters , and ; from the text value.
```powerquery
Text.Remove("a,b;c", {",",";"})
```

Result: 
```powerquery
"abc"
```




## Category
Text.Modification
