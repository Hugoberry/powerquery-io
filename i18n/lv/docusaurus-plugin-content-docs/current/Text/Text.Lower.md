---
title: Text.Lower
---

# Text.Lower


## Description

Visas rakstzīmes tiek pārvērstas mazajos burtos.


## Syntax

```powerquery
Text.Lower(
    text as text,
    optional culture as text
) as text
```


## Details

Atgriež rezultāts, kas tiek iegūts, pārvēršot visas parametra <code>text</code> vērtības rakstzīmes par mazajiem burtiem. Var norādīt arī neobligātu parametru <code>culture</code> (piemēram, "lv-LV").


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
