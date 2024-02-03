---
title: Record.AddField
---

# Record.AddField


## Description

Προσθέτει ένα πεδίο σε μια εγγραφή.


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

Προσθέτει ένα πεδίο σε μια εγγραφή <code>record</code>, αφού δοθεί το όνομα πεδίου <code>fieldName</code> και η τιμή <code>value</code>.


## Examples

### Example #1 
Προσθέτει το πεδίο &#34;Address&#34; στην εγγραφή.
```powerquery
Record.AddField([CustomerID = 1, Name = "Bob", Phone = "123-4567"], "Address", "123 Main St.")
```

Result: 
```powerquery
[CustomerID = 1, Name = "Bob", Phone = "123-4567", Address = "123 Main St."]
```




## Category
Record.Transformations
