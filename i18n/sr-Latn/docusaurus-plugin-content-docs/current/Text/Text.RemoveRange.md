---
title: Text.RemoveRange
---

# Text.RemoveRange


## Description

Uklanja broj znakova počev od datog pomaka


## Syntax

```powerquery
Text.RemoveRange(
    text as text,
    offset as number,
    optional count as number
) as text
```


## Details

Vraća kopiju tekstualne vrednosti <code>text</code> iz koje su uklonjeni svi znakovi sa položaja <code>offset</code>.    Može se koristiti opcionalni parametar, <code>count</code>, da bi se naveo broj znakova koje treba ukloniti. Podrazumevana vrednost za <code>count</code> je 1. Vrednosti položaja počinju od 0.


## Examples

### Example #1 
Uklanjanje 1 znaka iz tekstualne vrednosti „ABEFC“ na položaju 2.
```powerquery
Text.RemoveRange("ABEFC", 2)
```

Result: 
```powerquery
"ABFC"
```


### Example #2 
Uklanjanje dva znaka iz tekstualne vrednosti „ABEFC“ počev od položaja 2.
```powerquery
Text.RemoveRange("ABEFC", 2, 2)
```

Result: 
```powerquery
"ABC"
```




## Category
Text.Modification
