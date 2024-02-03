---
title: Record.AddField
---

# Record.AddField


## Description

Добавляет поле к записи.


## Syntax

```powerquery
Record.AddField(
    record as record,
    fieldName as text,
    value as any,
    optional delayed as logical
) as record
```


## Details

Добавляет поле к записи <code>record</code> для заданного имени поля <code>fieldName</code> и значения <code>value</code>.


## Examples

### Example #1 
Добавление поля Address к записи.
```powerquery
Record.AddField([CustomerID = 1, Name = "Bob", Phone = "123-4567"], "Address", "123 Main St.")
```

Result: 
```powerquery
[CustomerID = 1, Name = "Bob", Phone = "123-4567", Address = "123 Main St."]
```




## Category
Record.Transformations
