---
title: Record.FieldCount
---

# Record.FieldCount


## Description

Retourne le nombre de champs dans l&#39;enregistrement.


## Syntax

```powerquery
Record.FieldCount(
    record as record
) as number
```


## Details

Retourne le nombre de champs dans l'enregistrement <code>record</code>.


## Examples

### Example #1 
Recherche le nombre de champs dans l&#39;enregistrement.
```powerquery
Record.FieldCount([CustomerID = 1, Name = "Bob"])
```

Result: 
```powerquery
2
```




## Category
Record.Information
