---
title: Binary.ApproximateLength
---

# Binary.ApproximateLength


Возвращает примерную длину двоичного значения.


## Syntax

```powerquery
Binary.ApproximateLength(
    binary as binary
) as number
```


## Remarks

Возвращает примерную длину <code>binary</code> или ошибку, если источник данных не поддерживает примерную длину.


## Examples

### Example #1 
Получение примерной длины двоичного значения.
```powerquery
Binary.ApproximateLength(Binary.FromText("i45WMlSKjQUA", BinaryEncoding.Base64))
```

Result: 
```powerquery
9
```




## Category
Binary
