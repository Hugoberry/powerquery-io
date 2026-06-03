---
title: Binary.Range
---

# Binary.Range


Zwraca podzbiór wartości binarnej rozpoczynający się od przesunięcia.


## Syntax

```powerquery
Binary.Range(
    binary as binary,
    offset as number,
    optional count as number
) as binary
```


## Remarks

Zwraca podzbiór wartości binarnej rozpoczynający się od przesunięcia `binary`. Opcjonalny parametr, `offset`, określa maksymalną długość podzbioru.


## Examples

### Example #1
Zwraca podzbiór wartości binarnej rozpoczynający się od przesunięcia 6.
```powerquery
Binary.Range(#binary({0..10}), 6)
```

Result: 
```powerquery
#binary({6, 7, 8, 9, 10})
```


### Example #2
Zwraca podzbiór o długości 2 od przesunięcia 6 wartości binarnej.
```powerquery
Binary.Range(#binary({0..10}), 6, 2)
```

Result: 
```powerquery
#binary({6, 7})
```




## Category
Binary
