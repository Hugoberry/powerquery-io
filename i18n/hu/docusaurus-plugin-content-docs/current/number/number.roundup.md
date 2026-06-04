---
title: Number.RoundUp
---

# Number.RoundUp


A következő legnagyobb számot adja vissza. A számjegyek száma megadható.


## Syntax

```powerquery
Number.RoundUp(
    number as number,
    optional digits as number
) as number
```


## Remarks

A(z) `number` szám következő legnagyobb egész számra való felfelé kerekítésének eredményét adja vissza. Ha a(z) `number` értéke null, a függvény null értéket ad vissza. Ha meg van adva a(z) `digits` érték, `number` a megadott számú tizedesjegyre lesz kerekítve.


## Examples

### Example #1
Az 1,234 szám felfelé kerekítése a legközelebbi egész számra
```powerquery
Number.RoundUp(1.234)
```

Result: 
```powerquery
2
```


### Example #2
Az 1,999 szám felfelé kerekítése a legközelebbi egész számra
```powerquery
Number.RoundUp(1.999)
```

Result: 
```powerquery
2
```


### Example #3
Az 1,2345 felfelé kerekítése két tizedesjegyre.
```powerquery
Number.RoundUp(1.234, 2)
```

Result: 
```powerquery
1.24
```




## Category
Number.Rounding
