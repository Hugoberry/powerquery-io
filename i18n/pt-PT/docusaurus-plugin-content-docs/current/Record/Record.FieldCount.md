---
title: Record.FieldCount
---

# Record.FieldCount


## Description

Devolve o número de campos no registo.


## Syntax

```powerquery
Record.FieldCount(
    record as record
) as number
```


## Details

Devolve o número de campos no registo <code>record</code>.


## Examples

### Example #1 
Determinar o número de campos existentes no registo.
```powerquery
Record.FieldCount([CustomerID = 1, Name = "Bob"])
```

Result: 
```powerquery
2
```




## Category
Record.Information
