---
title: Record.FieldValues
---

# Record.FieldValues


## Description

Retourne une liste de valeurs de champ.


## Syntax

```powerquery
Record.FieldValues(
    record as record
) as list
```


## Details

Retourne une liste de valeurs de champ dans un enregistrement <code>record</code>.


## Examples

### Example #1 
Recherche les valeurs des champs dans l&#39;enregistrement.
```powerquery
Record.FieldValues([CustomerID = 1, Name = "Bob", Phone = "123-4567"])
```

Result: 
```powerquery
{1, "Bob", "123-4567"}
```




## Category
Record.Selection
