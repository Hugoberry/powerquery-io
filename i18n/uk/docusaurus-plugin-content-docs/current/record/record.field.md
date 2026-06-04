---
title: Record.Field
---

# Record.Field


Повертає значення вказаного поля в записі.


## Syntax

```powerquery
Record.Field(
    record as record,
    field as text
) as any
```


## Remarks

Повертає значення вказаного поля `field` у записі `record`. Якщо поле не знайдено, стається помилка.


## Examples

### Example #1
Знайти в записі значення поля "CustomerID".
```powerquery
Record.Field([CustomerID = 1, Name = "Bob", Phone = "123-4567"], "CustomerID")
```

Result: 
```powerquery
1
```




## Category
Record.Selection
