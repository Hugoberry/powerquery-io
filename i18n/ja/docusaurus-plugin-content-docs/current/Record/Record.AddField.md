---
title: Record.AddField
---

# Record.AddField


## Description

レコードにフィールドを追加します。


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

レコード <code>record</code> にフィールド名 <code>fieldName</code>、値 <code>value</code> のフィールドを追加します。


## Examples

### Example #1 
レコードにフィールド Address を追加します。
```powerquery
Record.AddField([CustomerID = 1, Name = "Bob", Phone = "123-4567"], "Address", "123 Main St.")
```

Result: 
```powerquery
[CustomerID = 1, Name = "Bob", Phone = "123-4567", Address = "123 Main St."]
```




## Category
Record.Transformations
