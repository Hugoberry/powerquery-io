---
title: Record.AddField
---

# Record.AddField


Prie įrašo pridedamas laukas.


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

Prie įrašo `record` pridedamas laukas su lauko pavadinimu `fieldName` ir reikšme `value`.


## Examples

### Example #1
Į įrašą įtraukite lauką „Address“.
```powerquery
Record.AddField([CustomerID = 1, Name = "Bob", Phone = "123-4567"], "Address", "123 Main St.")
```

Result: 
```powerquery
[CustomerID = 1, Name = "Bob", Phone = "123-4567", Address = "123 Main St."]
```




## Category
Record.Transformations
