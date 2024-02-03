---
title: Record.RenameFields
---

# Record.RenameFields


## Description

Uporabi preimenovanja iz seznama v obliki \{ old, new }.


## Syntax

```powerquery
Record.RenameFields(
    record as record,
    renames as list,
    optional missingField as MissingField.Type
) as record
```


## Details

Vrne zapis po preimenovanju polj v vnosu <code>record</code> v nova imena polj, navedena na seznamu <code>renames</code>. Za več preimenovanj lahko uporabite ugnezdeni seznam (\{ \{old1, new1}, \{old2, new2} }.


## Examples

### Example #1 
Preimenujte polje &#34;CenaEnote&#34; v &#34;Cena&#34; v zapisu.
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
Preimenujte polje &#34;CenaEnote&#34; v &#34;Cena&#34; in polje &#34;ŠtNaročila&#34; v &#34;IDNaročila&#34; v zapisu.
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
