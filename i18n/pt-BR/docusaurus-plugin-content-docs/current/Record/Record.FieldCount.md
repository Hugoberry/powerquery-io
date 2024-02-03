---
title: Record.FieldCount
---

# Record.FieldCount


## Description

Retorna o número de campos no registro.


## Syntax

```powerquery
Record.FieldCount(
    record as record
) as number
```


## Details

Retorna o número de campos no registro <code>record</code>.


## Examples

### Example #1 
Localizar o número de campos no registro.
```powerquery
Record.FieldCount([CustomerID = 1, Name = "Bob"])
```

Result: 
```powerquery
2
```




## Category
Record.Information
