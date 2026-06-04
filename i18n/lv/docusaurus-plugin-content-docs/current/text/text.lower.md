---
title: Text.Lower
---

# Text.Lower


Visas rakstzīmes tiek pārvērstas mazajos burtos.


## Syntax

```powerquery
Text.Lower(
    text as text,
    optional culture as text
) as text
```


## Remarks

Atgriež rezultāts, kas tiek iegūts, pārvēršot visas parametra `text` vērtības rakstzīmes par mazajiem burtiem. Var norādīt arī neobligātu parametru `culture` (piemēram, "lv-LV").


## Examples

### Example #1
Iegūstiet AbCd versiju ar mazajiem burtiem.
```powerquery
Text.Lower("AbCd")
```

Result: 
```powerquery
"abcd"
```




## Category
Text.Transformations
