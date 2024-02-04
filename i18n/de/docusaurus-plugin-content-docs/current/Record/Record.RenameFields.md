---
title: Record.RenameFields
---

# Record.RenameFields


## Description

Wendet Umbenennungen aus einer Liste im Format &#34;\{ old, new }&#34; an.


## Syntax

```powerquery
Record.RenameFields(
    record as record,
    renames as list,
    optional missingField as MissingField.Type
) as record
```


## Details

Gibt einen Datensatz zurück, nachdem Felder aus der Eingabe "<code>record</code>" mit den neuen Feldnamen aus der Liste "<code>renames</code>" versehen wurden. Für mehrere Umbenennungen kann eine geschachtelte Liste \{ \{old1, new1}, \{old2, new2} } verwendet werden.


## Examples

### Example #1 
Benennt das Feld &#34;UnitPrice&#34; aus dem Datensatz in &#34;Price&#34; um.
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
Benennt die Felder &#34;UnitPrice&#34; aus dem Datensatz in &#34;Price&#34; und &#34;OrderNum&#34; in &#34;OrderID&#34; um.
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
