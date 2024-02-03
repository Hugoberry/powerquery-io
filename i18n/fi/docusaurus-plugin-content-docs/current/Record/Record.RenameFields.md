---
title: Record.RenameFields
---

# Record.RenameFields


## Description

Ottaa käyttöön uudelleennimeämiset luettelosta muodossa \{ old, new }.


## Syntax

```powerquery
Record.RenameFields(
    record as record,
    renames as list,
    optional missingField as MissingField.Type
) as record
```


## Details

Palauttaa tietueen sen jälkeen, kun syötteen <code>record</code> kentät on nimetty uudelleen luettelossa <code>renames</code> määritetyillä uusilla kenttien nimillä. Jos kyseessä on useita uudelleennimeämisiä, voidaan käyttää sisäkkäistä luetteloa (\{ \{old1, new1}, \{old2, new2} }.


## Examples

### Example #1 
Nimeä kenttä &#34;UnitPrice&#34; uudelleen nimellä &#34;Price&#34; tietueesta.
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
Nimeä kenttä &#34;UnitPrice&#34; uudelleen nimellä &#34;Price&#34; ja kenttä &#34;OrderNum&#34; nimellä &#34;OrderID&#34; tietueesta.
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
