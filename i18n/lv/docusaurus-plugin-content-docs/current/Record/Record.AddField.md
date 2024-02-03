---
title: Record.AddField
---

# Record.AddField


## Description

Ierakstam tiek pievienots lauks.


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

Ierakstam <code>record</code> tiek pievienots lauks atbilstoši norādītajam lauka nosaukumam <code>fieldName</code> un vērtībai <code>value</code>.


## Examples

### Example #1 
Pievienojiet ierakstam lauku &#34;Address&#34;.
```powerquery
Record.AddField([CustomerID = 1, Name = "Bob", Phone = "123-4567"], "Address", "123 Main St.")
```

Result: 
```powerquery
[CustomerID = 1, Name = "Bob", Phone = "123-4567", Address = "123 Main St."]
```




## Category
Record.Transformations
