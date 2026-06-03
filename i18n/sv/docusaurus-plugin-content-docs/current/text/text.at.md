---
title: Text.At
---

# Text.At


Returnerar tecknet vid angiven position.


## Syntax

```powerquery
Text.At(
    text as text,
    index as number
) as text
```


## Remarks

Returnerar tecknet i textvärdet, `text` vid position `index`. Det första tecknet i texten finns vid position 0.


## Examples

### Example #1
Hitta tecknet vid position 4 i strängen "Hello, World".
```powerquery
Text.At("Hello, World", 4)
```

Result: 
```powerquery
"o"
```




## Category
Text.Extraction
