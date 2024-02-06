---
title: Record.FieldNames
---

# Record.FieldNames


Retourne les noms des champs.


## Syntax

```powerquery
Record.FieldNames(
    record as record
) as list
```


## Remarks

Retourne les noms des champs dans l'enregistrement <code>record</code> sous la forme d'un texte.


## Examples

### Example #1 
Recherche les noms des champs dans l&#39;enregistrement.
```powerquery
Record.FieldNames([OrderID = 1, CustomerID = 1, Item = "Fishing rod", Price = 100.0])
```

Result: 
```powerquery
{"OrderID", "CustomerID", "Item", "Price"}
```




## Category
Record.Selection
