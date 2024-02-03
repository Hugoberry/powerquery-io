---
title: Number.RoundTowardZero
---

# Number.RoundTowardZero


## Description

A pozitív számok lefelé kerekítésének, illetve a negatív számok felfelé kerekítésének eredményét adja vissza. A számjegyek száma megadható.


## Syntax

```powerquery
Number.RoundTowardZero(
    number as number,
    optional digits as number
) as number
```


## Details

A(z) <code>number</code> szám előjeltől függő kerekítésének eredményét adja vissza. Ez a függvény lefelé kerekíti a pozitív számokat, és felfelé kerekíti a negatív számokat.    Ha meg van adva a(z) <code>digits</code> érték, a(z) <code>number</code> szám <code>digits</code> tizedesjegyre lesz kerekítve.  


## Examples

### Example #1 
A -1,2 szám nullához közeledő irányba való kerekítése
```powerquery
Number.RoundTowardZero(-1.2)
```

Result: 
```powerquery
-1
```


### Example #2 
Az 1,2 szám nullához közeledő irányba való kerekítése
```powerquery
Number.RoundTowardZero(1.2)
```

Result: 
```powerquery
1
```


### Example #3 
A -1,234 kerekítése két tizedesjegyre a nullához közeledő irányban.
```powerquery
Number.RoundTowardZero(-1.234, 2)
```

Result: 
```powerquery
-1.23
```




## Category
Number.Rounding
