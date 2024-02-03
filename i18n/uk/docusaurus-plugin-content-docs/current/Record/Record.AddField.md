---
title: Record.AddField
---

# Record.AddField


## Description

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


## Details

Додає поле до запису <code>record</code>, враховуючи ім'я поля <code>fieldName</code> і значення <code>value</code>.


## Examples

### Example #1 
Додати до запису поле &#34;Адреса&#34;.
```powerquery
Record.AddField([CustomerID = 1, Name = "Bob", Phone = "123-4567"], "Address", "123 Main St.")
```

Result: 
```powerquery
[CustomerID = 1, Name = "Bob", Phone = "123-4567", Address = "123 Main St."]
```




## Category
Record.Transformations
