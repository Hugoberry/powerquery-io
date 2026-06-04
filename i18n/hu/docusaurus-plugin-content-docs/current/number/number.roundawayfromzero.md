---
title: Number.RoundAwayFromZero
---

# Number.RoundAwayFromZero


A pozitív számok felfelé kerekítésének, illetve a negatív számok lefelé kerekítésének eredményét adja vissza. A számjegyek száma megadható.


## Syntax

```powerquery
Number.RoundAwayFromZero(
    number as number,
    optional digits as number
) as number
```


## Remarks

A(z) `number` szám előjeltől függő kerekítésének eredményét adja vissza. Ez a függvény felfelé kerekíti a pozitív számokat, és lefelé kerekíti a negatív számokat. Ha meg van adva a(z) `digits` érték, a(z) `number` szám `digits` tizedesjegyre lesz kerekítve.


## Examples

### Example #1
A -1,2 szám nullától távolodó irányba való kerekítése
```powerquery
Number.RoundAwayFromZero(-1.2)
```

Result: 
```powerquery
-2
```


### Example #2
Az 1,2 szám nullától távolodó irányba való kerekítése
```powerquery
Number.RoundAwayFromZero(1.2)
```

Result: 
```powerquery
2
```


### Example #3
A -1,234 kerekítése két tizedesjegyre a nullától távolodó irányban.
```powerquery
Number.RoundAwayFromZero(-1.234, 2)
```

Result: 
```powerquery
-1.24
```




## Category
Number.Rounding
