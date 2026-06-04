---
title: Record.RemoveFields
---

# Record.RemoveFields


Poistaa määritetyt kentät syötetietueesta.


## Syntax

```powerquery
Record.RemoveFields(
    record as record,
    fields as any,
    optional missingField as MissingField.Type
) as record
```


## Remarks

Palauttaa tietueen, joka poistaa kaikki luettelossa `fields` määritetyt kentät syötteestä `record`. Jos määritettyä kenttää ei ole, ilmenee virhe.


## Examples

### Example #1
Poista kenttä "Price" tietueesta.
```powerquery
Record.RemoveFields([CustomerID = 1, Item = "Fishing rod", Price = 18.00], "Price")
```

Result: 
```powerquery
[CustomerID = 1, Item = "Fishing rod"]
```


### Example #2
Poista kentät "Price" ja "Item" tietueesta.
```powerquery
Record.RemoveFields([CustomerID = 1, Item = "Fishing rod", Price = 18.00], {"Price", "Item"})
```

Result: 
```powerquery
[CustomerID = 1]
```




## Category
Record.Transformations
