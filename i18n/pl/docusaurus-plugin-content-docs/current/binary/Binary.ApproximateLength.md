---
title: Binary.ApproximateLength
---

# Binary.ApproximateLength


Zwraca przybliżoną wartość długości danych binarnych.


## Syntax

```powerquery
Binary.ApproximateLength(
    binary as binary
) as number
```


## Remarks

Zwraca przybliżoną wartość długości <code>binary</code> lub zwraca błąd, jeśli źródło danych nie obsługuje oszacowanej długości.


## Examples

### Example #1 
Uzyskaj przybliżoną wartość długości danych binarnych.
```powerquery
Binary.ApproximateLength(Binary.FromText("i45WMlSKjQUA", BinaryEncoding.Base64))
```

Result: 
```powerquery
9
```




## Category
Binary
