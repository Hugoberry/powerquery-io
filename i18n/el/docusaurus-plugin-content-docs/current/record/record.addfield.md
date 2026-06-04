---
title: Record.AddField
---

# Record.AddField


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


## Remarks

Προσθέτει ένα πεδίο σε μια εγγραφή `record`, αφού δοθεί το όνομα πεδίου `fieldName` και η τιμή `value`.


## Examples

### Example #1
Προσθέτει το πεδίο "Address" στην εγγραφή.
```powerquery
Record.AddField([CustomerID = 1, Name = "Bob", Phone = "123-4567"], "Address", "123 Main St.")
```

Result: 
```powerquery
[CustomerID = 1, Name = "Bob", Phone = "123-4567", Address = "123 Main St."]
```




## Category
Record.Transformations
