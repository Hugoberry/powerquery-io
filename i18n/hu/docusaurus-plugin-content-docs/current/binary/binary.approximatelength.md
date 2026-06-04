---
title: Binary.ApproximateLength
---

# Binary.ApproximateLength


A bináris fájl hozzávetőleges hosszát adja vissza.


## Syntax

```powerquery
Binary.ApproximateLength(
    binary as binary
) as number
```


## Remarks

A(z) `binary` hozzávetőleges hosszát adja vissza, vagy hibát, ha az adatforrás nem támogatja a hozzávetőleges hosszt.


## Examples

### Example #1
A bináris érték hozzávetőleges hosszának lekérése.
```powerquery
Binary.ApproximateLength(Binary.FromText("i45WMlSKjQUA", BinaryEncoding.Base64))
```

Result: 
```powerquery
9
```




## Category
Binary
