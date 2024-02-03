---
title: Text.Upper
---

# Text.Upper


## Description

Visas rakstzīmes tiek pārvērstas par lielajiem burtiem.


## Syntax

```powerquery
Text.Upper(
    text as text,
    optional culture as text
) as text
```


## Details

Atgriež rezultāts, kas tiek iegūts, pārvēršot visas parametra <code>text</code> vērtības rakstzīmes par lielajiem burtiem. Var norādīt arī neobligātu parametru <code>culture</code> (piemēram, "lv-LV").


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
