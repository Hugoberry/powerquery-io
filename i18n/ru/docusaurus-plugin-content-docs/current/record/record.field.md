---
title: Record.Field
---

# Record.Field


Возвращает значение указанного поля в записи.


## Syntax

```powerquery
Record.Field(
    record as record,
    field as text
) as any
```


## Remarks

Возвращает значение указанного <code>field</code> в <code>record</code>. Если поле не найдено, возникает исключение.


## Examples

### Example #1 
Нахождение значения поля CustomerID в записи.
```powerquery
Record.Field([CustomerID = 1, Name = "Bob", Phone = "123-4567"], "CustomerID")
```

Result: 
```powerquery
1
```




## Category
Record.Selection
