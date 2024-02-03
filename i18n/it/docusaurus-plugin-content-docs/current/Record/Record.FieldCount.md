---
title: Record.FieldCount
---

# Record.FieldCount


## Description

Restituisce il numero di campi nel record.


## Syntax

```powerquery
Record.FieldCount(
    record as record
) as number
```


## Details

Restituisce il numero di campi nel record <code>record</code>.


## Examples

### Example #1 
Trovare il numero di campi nel record.
```powerquery
Record.FieldCount([CustomerID = 1, Name = "Bob"])
```

Result: 
```powerquery
2
```




## Category
Record.Information
