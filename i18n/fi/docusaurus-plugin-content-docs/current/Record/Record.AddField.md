---
title: Record.AddField
---

# Record.AddField


## Description

Lisää kentän tietueeseen.


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

Lisää kentän tietueeseen <code>record</code>, kun määritetään kentän <code>fieldName</code> nimi ja arvo <code>value</code>.


## Examples

### Example #1 
Lisää Address-kentän tietueeseen.
```powerquery
Record.AddField([CustomerID = 1, Name = "Bob", Phone = "123-4567"], "Address", "123 Main St.")
```

Result: 
```powerquery
[CustomerID = 1, Name = "Bob", Phone = "123-4567", Address = "123 Main St."]
```




## Category
Record.Transformations
