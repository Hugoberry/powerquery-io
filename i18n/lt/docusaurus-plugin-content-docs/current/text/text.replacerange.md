---
title: Text.ReplaceRange
---

# Text.ReplaceRange


Pašalinamas simbolių diapazonas ir nurodytoje padėtyje įterpiama nauja reikšmė.


## Syntax

```powerquery
Text.ReplaceRange(
    text as text,
    offset as number,
    count as number,
    newText as text
) as text
```


## Remarks

Pateikiamas simbolių skaičiaus (`count`), pašalinimo iš tekstinės reikšmės `text`, pradedant nuo `offset` padėties, tada tekstinės reikšmės `newText` įterpimo toje pačioje `text` padėtyje, rezultatas.


## Examples

### Example #1
Pakeiskite vieną tekstinės reikšmės „ABGF“ simbolį 2 padėtyje nauja tekstine reikšme „CDE“.
```powerquery
Text.ReplaceRange("ABGF", 2, 1, "CDE")
```

Result: 
```powerquery
"ABCDEF"
```




## Category
Text.Modification
