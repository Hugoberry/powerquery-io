---
title: Text.At
---

# Text.At


Returns the character at the specified position.


## Syntax

```powerquery
Text.At(
    text as text,
    index as number
) as text
```


## Remarks

Returns the character in the text value, `text` at position `index`. The first character in the text is at position 0.


## Examples

### Example #1
Find the character at position 4 in string "Hello, World".
```powerquery
Text.At("Hello, World", 4)
```

Result: 
```powerquery
"o"
```




## Category
Text.Extraction
