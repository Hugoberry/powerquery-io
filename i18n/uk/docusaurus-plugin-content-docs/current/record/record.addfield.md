---
title: Record.AddField
---

# Record.AddField


Додає поле до запису.


## Syntax

```powerquery
Record.AddField(
    record as record,
    fieldName as text,
    value as any,
    optional delayed as logical
) as record
```


## Remarks

Додає поле до запису `record`, враховуючи ім'я поля `fieldName` і значення `value`.


## Examples

### Example #1
Додати до запису поле "Адреса".
```powerquery
Record.AddField([CustomerID = 1, Name = "Bob", Phone = "123-4567"], "Address", "123 Main St.")
```

Result: 
```powerquery
[CustomerID = 1, Name = "Bob", Phone = "123-4567", Address = "123 Main St."]
```




## Category
Record.Transformations
