---
title: Text.Upper
---

# Text.Upper


Visas rakstzīmes tiek pārvērstas par lielajiem burtiem.


## Syntax

```powerquery
Text.Upper(
    text as text,
    optional culture as text
) as text
```


## Remarks

Atgriež rezultāts, kas tiek iegūts, pārvēršot visas parametra `text` vērtības rakstzīmes par lielajiem burtiem. Var norādīt arī neobligātu parametru `culture` (piemēram, "lv-LV").


## Examples

### Example #1
Iegūstiet aBcD versiju ar lielajiem burtiem.
```powerquery
Text.Upper("aBcD")
```

Result: 
```powerquery
"ABCD"
```




## Category
Text.Transformations
