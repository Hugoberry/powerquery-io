---
title: Text.Insert
---

# Text.Insert


Įterpiama viena tekstinė reikšmė į kitą nurodytoje padėtyje.


## Syntax

```powerquery
Text.Insert(
    text as text,
    offset as number,
    newText as text
) as text
```


## Remarks

Pateikiamas tekstinių reikšmių `newText` įterpimo į tekstinę reikšmę `text` padėtyje `offset` rezultatas. Padėtys prasideda nuo skaičiaus 0.


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
