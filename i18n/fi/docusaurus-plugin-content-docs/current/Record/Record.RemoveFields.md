---
title: Record.RemoveFields
---

# Record.RemoveFields


## Description

Poistaa määritetyt kentät syötetietueesta.


## Syntax

```powerquery
Record.RemoveFields(
    record as record,
    fields as any,
    optional missingField as MissingField.Type
) as record
```


## Details

Palauttaa tietueen, joka poistaa kaikki luettelossa <code>fields</code> määritetyt kentät syötteestä <code>record</code>. Jos määritettyä kenttää ei ole, tapahtuu poikkeus.


## Examples

### Example #1 
Poista kenttä &#34;Price&#34; tietueesta.
```powerquery
Record.RemoveFields([CustomerID = 1, Item = "Fishing rod", Price = 18.00], "Price")
```

Result: 
```powerquery
[CustomerID = 1, Item = "Fishing rod"]
```


### Example #2 
Poista kentät &#34;Price&#34; ja &#34;Item&#34; tietueesta.
```powerquery
Record.RemoveFields([CustomerID = 1, Item = "Fishing rod", Price = 18.00], {"Price", "Item"})
```

Result: 
```powerquery
[CustomerID = 1]
```




## Category
Record.Transformations
