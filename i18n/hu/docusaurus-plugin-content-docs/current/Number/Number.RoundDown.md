---
title: Number.RoundDown
---

# Number.RoundDown


## Description

Az előző legnagyobb számot adja vissza. A számjegyek száma megadható.


## Syntax

```powerquery
Number.RoundDown(
    number as number,
    optional digits as number
) as number
```


## Details

A(z) <code>number</code> szám következő legnagyobb egész számra való lefelé kerekítésének eredményét adja vissza. Ha a(z) <code>number</code> értéke null, a függvény null értéket ad vissza.Ha meg van adva a(z) <code>digits</code> érték, <code>number</code> a megadott számú tizedesjegyre lesz kerekítve.  


## Examples

### Example #1 
Az 1,234 szám lefelé kerekítése a legközelebbi egész számra
```powerquery
Number.RoundDown(1.234)
```

Result: 
```powerquery
1
```


### Example #2 
Az 1,999 szám lefelé kerekítése a legközelebbi egész számra
```powerquery
Number.RoundDown(1.999)
```

Result: 
```powerquery
1
```


### Example #3 
Az 1,999 lefelé kerekítése két tizedesjegyre.
```powerquery
Number.RoundDown(1.999, 2)
```

Result: 
```powerquery
1.99
```




## Category
Number.Rounding
