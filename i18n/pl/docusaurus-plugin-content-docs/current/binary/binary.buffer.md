---
title: Binary.Buffer
---

# Binary.Buffer


Buforuje wartość binarną w pamięci.


## Syntax

```powerquery
Binary.Buffer(
    binary as binary
) as binary
```


## Remarks

Buforuje wartość binarną w pamięci. Wynikiem tego wywołania jest stabilna wartość binarna, czyli wartość o deterministycznej długości i kolejności bajtów.


## Examples

### Example #1 
Utwórz stabilną wersję wartości binarnej.
```powerquery
Binary.Buffer(Binary.FromList({0..10}))
```

Result: 
```powerquery
#binary({0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10})
```




## Category
Binary
