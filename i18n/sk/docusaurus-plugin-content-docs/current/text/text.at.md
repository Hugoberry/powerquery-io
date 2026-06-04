---
title: Text.At
---

# Text.At


Vráti znak na zadanej pozícii.


## Syntax

```powerquery
Text.At(
    text as text,
    index as number
) as text
```


## Remarks

Vráti znak v textovej hodnote `text` na pozícii `index`. Prvý znak v texte je na pozícii 0.


## Examples

### Example #1
Nájdite znak na pozícii 4 v reťazci "Hello, World".
```powerquery
Text.At("Hello, World", 4)
```

Result: 
```powerquery
"o"
```




## Category
Text.Extraction
