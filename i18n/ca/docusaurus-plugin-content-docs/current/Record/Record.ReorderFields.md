---
title: Record.ReorderFields
---

# Record.ReorderFields


## Description

Reordena els camps especificats en l&#39;ordre nou.


## Syntax

```powerquery
Record.ReorderFields(
    record as record,
    fieldOrder as list,
    optional missingField as MissingField.Type
) as record
```


## Details

Retorna un registre després de reordenar els camps a <code>record</code> en l'ordre dels camps especificats a la llista <code>fieldOrder</code>. Els valors de camp es mantenen i els camps que no apareixen a <code>fieldOrder</code> es deixen en la posició original.


## Examples

### Example #1 
Reordena alguns dels camps del registre.
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
