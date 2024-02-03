---
title: Record.FieldCount
---

# Record.FieldCount


## Description

Devuelve el número de campos del registro.


## Syntax

```powerquery
Record.FieldCount(
    record as record
) as number
```


## Details

Devuelve el número de campos del registro <code>record</code>.


## Examples

### Example #1 
Hallar el número de campos del registro.
```powerquery
Record.FieldCount([CustomerID = 1, Name = "Bob"])
```

Result: 
```powerquery
2
```




## Category
Record.Information
