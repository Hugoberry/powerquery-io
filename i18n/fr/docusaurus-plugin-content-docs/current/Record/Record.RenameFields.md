---
title: Record.RenameFields
---

# Record.RenameFields


## Description

Attribue de nouveaux noms à partir d&#39;une liste dans le formulaire \{ old, new }.


## Syntax

```powerquery
Record.RenameFields(
    record as record,
    renames as list,
    optional missingField as MissingField.Type
) as record
```


## Details

Retourne un enregistrement après avoir renommé les champs dans l'entrée <code>record</code> avec les nouveaux noms des champs spécifiés dans la liste <code>renames</code>. En cas de renommages multiples, une liste imbriquée peut être utilisé (\{ \{old1, new1}, \{old2, new2} }.


## Examples

### Example #1 
Renomme le champ de l&#39;enregistrement &#34; UnitPrice &#34; en &#34; Price &#34;.
```powerquery
Record.RenameFields(
    [OrderID = 1, CustomerID = 1, Item = "Fishing rod", UnitPrice = 100.0],
    {"UnitPrice", "Price"}
)
```

Result: 
```powerquery
[OrderID = 1, CustomerID = 1, Item = "Fishing rod", Price = 100.0]
```


### Example #2 
Renomme les champs de l&#39;enregistrement &#34; UnitPrice &#34; en &#34; Price &#34; et &#34; OrderNum &#34; en &#34; OrderID &#34;.
```powerquery
Record.RenameFields(
    [OrderNum = 1, CustomerID = 1, Item = "Fishing rod", UnitPrice = 100.0],
    {
        {"UnitPrice", "Price"},
        {"OrderNum", "OrderID"}
    }
)
```

Result: 
```powerquery
[OrderID = 1, CustomerID = 1, Item = "Fishing rod", Price = 100.0]
```




## Category
Record.Transformations
