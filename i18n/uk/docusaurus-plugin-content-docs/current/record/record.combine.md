---
title: Record.Combine
---

# Record.Combine


Об'єднує записи в заданому списку.


## Syntax

```powerquery
Record.Combine(
    records as list
) as record
```


## Remarks

Об'єднує записи в заданому списку `records`. Якщо `records` містить значення, відмінні від записів, повертається помилка.


## Examples

### Example #1
Створити об’єднаний запис із записів.
```powerquery
Record.Combine({
    [CustomerID = 1, Name = "Bob"],
    [Phone = "123-4567"]
})
```

Result: 
```powerquery
[CustomerID = 1, Name = "Bob", Phone = "123-4567"]
```




## Category
Record.Transformations
