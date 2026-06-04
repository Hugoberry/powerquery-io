---
title: Text.RemoveRange
---

# Text.RemoveRange


Uklanja broj znakova počev od datog pomaka


## Syntax

```powerquery
Text.RemoveRange(
    text as text,
    offset as number,
    optional count as number
) as text
```


## Remarks

Vraća kopiju tekstualne vrednosti `text` iz koje su uklonjeni svi znakovi sa položaja `offset`. Može se koristiti opcionalni parametar, `count`, da bi se naveo broj znakova koje treba ukloniti. Podrazumevana vrednost za `count` je 1. Vrednosti položaja počinju od 0.


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
