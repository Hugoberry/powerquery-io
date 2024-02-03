---
title: Text.ReplaceRange
---

# Text.ReplaceRange


## Description

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


## Details

Vrátí výsledek odebrání <code>count</code> znaků z textové hodnoty <code>text</code> počínaje na pozici <code>offset</code> a následného vložení textové hodnoty <code>newText</code> na stejné pozici v hodnotě <code>text</code>.


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
