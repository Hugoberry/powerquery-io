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

Returnerar tecknet i textvärdet, <code>text</code> vid position <code>index</code>. Det första tecknet i texten finns vid position 0.


## Examples

### Example #1 
Hitta tecknet vid position 4 i strängen &#34;Hello, World&#34;.
```powerquery
Text.At("Hello, World", 4)
```

Result: 
```powerquery
"o"
```




## Category
Text.Extraction
