---
title: Record.AddField
---

# Record.AddField


## Description

Lägger till ett fält i en post.


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

Lägger till ett fält i en post, <code>record</code>, baserat på namnet på fältet <code>fieldName</code> och värdet <code>value</code>.


## Examples

### Example #1 
Lägg till fältet Address till posten.
```powerquery
Record.AddField([CustomerID = 1, Name = "Bob", Phone = "123-4567"], "Address", "123 Main St.")
```

Result: 
```powerquery
[CustomerID = 1, Name = "Bob", Phone = "123-4567", Address = "123 Main St."]
```




## Category
Record.Transformations
