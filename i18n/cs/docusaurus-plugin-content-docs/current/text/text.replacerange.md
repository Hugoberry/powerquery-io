---
title: Text.ReplaceRange
---

# Text.ReplaceRange


Odebere rozsah znaků a vloží novou hodnotu na zadané pozici.


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

Vrátí výsledek odebrání `count` znaků z textové hodnoty `text` počínaje na pozici `offset` a následného vložení textové hodnoty `newText` na stejné pozici v hodnotě `text`.


## Examples

### Example #1
Nahradí jediný znak na pozici 2 v textové hodnotě „ABGF“ novou textovou hodnotou „CDE“.
```powerquery
Text.ReplaceRange("ABGF", 2, 1, "CDE")
```

Result: 
```powerquery
"ABCDEF"
```




## Category
Text.Modification
