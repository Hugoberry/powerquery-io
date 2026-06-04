---
title: Binary.ApproximateLength
---

# Binary.ApproximateLength


Повертає приблизну довжину двійкового значення.


## Syntax

```powerquery
Binary.ApproximateLength(
    binary as binary
) as number
```


## Remarks

Повертає приблизну довжину `binary` або помилку, якщо джерело даних не підтримує приблизну довжину.


## Examples

### Example #1
Отримайте приблизну довжину двійкового значення.
```powerquery
Binary.ApproximateLength(Binary.FromText("i45WMlSKjQUA", BinaryEncoding.Base64))
```

Result: 
```powerquery
9
```




## Category
Binary
