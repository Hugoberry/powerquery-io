---
title: Record.FieldCount
---

# Record.FieldCount


## Description

Devolve o número de campos do rexistro.


## Syntax

```powerquery
Record.FieldCount(
    record as record
) as number
```


## Details

Devolve o número de campos do rexistro <code>record</code>.


## Examples

### Example #1 
Buscar o número de campos do rexistro.
```powerquery
Record.FieldCount([CustomerID = 1, Name = "Bob"])
```

Result: 
```powerquery
2
```




## Category
Record.Information
