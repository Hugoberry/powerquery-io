---
title: Record.ReorderFields
---

# Record.ReorderFields


## Description

Réorganise les champs spécifiés dans le nouvel ordre.


## Syntax

```powerquery
Record.ReorderFields(
    record as record,
    fieldOrder as list,
    optional missingField as MissingField.Type
) as record
```


## Details

Retourne un enregistrement après avoir réorganisé les champs dans <code>record</code> dans l'ordre des champs spécifié dans la liste <code>fieldOrder</code>. Les valeurs des champs sont conservées et les champs non répertoriés dans <code>fieldOrder</code> sont laissés à leur position d'origine.


## Examples

### Example #1 
Réorganise certains des champs dans l&#39;enregistrement.
```powerquery
Record.ReorderFields(
    [CustomerID = 1, OrderID = 1, Item = "Fishing rod", Price = 100.0],
    {"OrderID", "CustomerID"}
)
```

Result: 
```powerquery
[OrderID = 1, CustomerID = 1, Item = "Fishing rod", Price = 100.0]
```




## Category
Record.Transformations
