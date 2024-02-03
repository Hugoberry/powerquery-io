---
title: Record.Combine
---

# Record.Combine


## Description

Об&#39;єднує записи в заданому списку.


## Syntax

```powerquery
Record.Combine(
    records as list
) as record
```


## Details

Об'єднує записи в заданому списку <code>records</code>. Якщо <code>records</code> містить значення, відмінні від записів, повертається помилка.


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
