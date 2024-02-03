---
title: Record.FieldCount
---

# Record.FieldCount


## Description

Retorna el nombre de camps del registre.


## Syntax

```powerquery
Record.FieldCount(
    record as record
) as number
```


## Details

Retorna el nombre de camps del registre <code>record</code>.


## Examples

### Example #1 
Cerca el nombre de camps del registre.
```powerquery
Record.FieldCount([CustomerID = 1, Name = "Bob"])
```

Result: 
```powerquery
2
```




## Category
Record.Information
