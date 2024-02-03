---
title: Text.ReplaceRange
---

# Text.ReplaceRange


## Description

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


## Details

Pateikiamas simbolių skaičiaus (<code>count</code>), pašalinimo iš tekstinės reikšmės <code>text</code>, pradedant nuo <code>offset</code> padėties, tada tekstinės reikšmės <code>newText</code> įterpimo toje pačioje <code>text</code> padėtyje, rezultatas.


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
