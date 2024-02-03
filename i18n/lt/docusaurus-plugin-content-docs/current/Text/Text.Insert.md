---
title: Text.Insert
---

# Text.Insert


## Description

Įterpiama viena tekstinė reikšmė į kitą nurodytoje padėtyje.


## Syntax

```powerquery
Text.Insert(
    text as text,
    offset as number,
    newText as text
) as text
```


## Details

Pateikiamas tekstinių reikšmių <code>newText</code> įterpimo į tekstinę reikšmę <code>text</code> padėtyje <code>offset</code> rezultatas. Padėtys prasideda nuo skaičiaus 0.


## Examples

### Example #1 
„ABD“ įterpkite „C“ tarp „B“ ir „D“.
```powerquery
Text.Insert("ABD", 2, "C")
```

Result: 
```powerquery
"ABCD"
```




## Category
Text.Modification
