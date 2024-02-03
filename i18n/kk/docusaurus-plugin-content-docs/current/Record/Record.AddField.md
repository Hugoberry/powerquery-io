---
title: Record.AddField
---

# Record.AddField


## Description

Жазбаға өрісті қосады.


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

Өріс атауы <code>fieldName</code> және мән <code>value</code> болғанда <code>record</code> жазбасына өрісті қосады.


## Examples

### Example #1 
Жазбаға &#34;Address&#34; өрісін қосу.
```powerquery
Record.AddField([CustomerID = 1, Name = "Bob", Phone = "123-4567"], "Address", "123 Main St.")
```

Result: 
```powerquery
[CustomerID = 1, Name = "Bob", Phone = "123-4567", Address = "123 Main St."]
```




## Category
Record.Transformations
