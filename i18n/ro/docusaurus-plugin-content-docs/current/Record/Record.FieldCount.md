---
title: Record.FieldCount
---

# Record.FieldCount


## Description

Returnează numărul de câmpuri din înregistrare.


## Syntax

```powerquery
Record.FieldCount(
    record as record
) as number
```


## Details

Returnează numărul de câmpuri din înregistrarea <code>record</code>.


## Examples

### Example #1 
Găsiți numărul de câmpuri din înregistrare.
```powerquery
Record.FieldCount([CustomerID = 1, Name = "Bob"])
```

Result: 
```powerquery
2
```




## Category
Record.Information
