---
title: Text.At
---

# Text.At


Pateikiamas simbolis nurodytoje padėtyje.


## Syntax

```powerquery
Text.At(
    text as text,
    index as number
) as text
```


## Remarks

Pateikiamas simbolis tekstinėje reikšmėje `text`, padėtyje `index`. Pirmasis teksto simbolis yra 0 padėtyje.


## Examples

### Example #1
Raskite simbolį 4 padėtyje eilutėje „Hello, World“.
```powerquery
Text.At("Hello, World", 4)
```

Result: 
```powerquery
"o"
```




## Category
Text.Extraction
