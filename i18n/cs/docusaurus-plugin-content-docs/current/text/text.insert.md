---
title: Text.Insert
---

# Text.Insert


Vloží jednu textovou hodnotu do jiné na dané pozici.


## Syntax

```powerquery
Text.Insert(
    text as text,
    offset as number,
    newText as text
) as text
```


## Remarks

Vrátí výsledek vložení textové hodnoty `newText` do textové hodnoty `text` na pozici `offset`. Pozice začínají číslem 0.


## Examples

### Example #1
Vloží znak „C“ mezi znaky „B“ a „D“ v řetězci „ABD“.
```powerquery
Text.Insert("ABD", 2, "C")
```

Result: 
```powerquery
"ABCD"
```




## Category
Text.Modification
