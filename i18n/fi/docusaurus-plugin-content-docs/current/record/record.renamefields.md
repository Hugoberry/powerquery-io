---
title: Record.RenameFields
---

# Record.RenameFields


Ottaa käyttöön uudelleennimeämiset luettelosta muodossa \{ old, new \}.


## Syntax

```powerquery
Record.RenameFields(
    record as record,
    renames as list,
    optional missingField as MissingField.Type
) as record
```


## Remarks

Palauttaa tietueen sen jälkeen, kun syötteen `record` kentät on nimetty uudelleen luettelossa `renames` määritetyillä uusilla kenttien nimillä. Jos kyseessä on useita uudelleennimeämisiä, voidaan käyttää sisäkkäistä luetteloa (\{ \{old1, new1\}, \{old2, new2\} \}.


## Examples

### Example #1
Nimeä kenttä "UnitPrice" uudelleen nimellä "Price" tietueesta.
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
Nimeä kenttä "UnitPrice" uudelleen nimellä "Price" ja kenttä "OrderNum" nimellä "OrderID" tietueesta.
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
