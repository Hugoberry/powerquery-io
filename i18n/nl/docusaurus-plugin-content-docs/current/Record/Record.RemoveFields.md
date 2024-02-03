---
title: Record.RemoveFields
---

# Record.RemoveFields


## Description

Verwijdert het opgegeven veld of de opgegeven velden uit de invoerrecord.


## Syntax

```powerquery
Record.RemoveFields(
    record as record,
    fields as any,
    optional missingField as MissingField.Type
) as record
```


## Details

Retourneert een record die alle velden die in de lijst <code>fields</code> zijn opgegeven, verwijdert uit de invoer <code>record</code>. Als het opgegeven veld niet bestaat, wordt er een uitzondering gegenereerd.


## Examples

### Example #1 
Het veld Price uit de record verwijderen.
```powerquery
Record.RemoveFields([CustomerID = 1, Item = "Fishing rod", Price = 18.00], "Price")
```

Result: 
```powerquery
[CustomerID = 1, Item = "Fishing rod"]
```


### Example #2 
De velden Price en Item uit de record verwijderen.
```powerquery
Record.RemoveFields([CustomerID = 1, Item = "Fishing rod", Price = 18.00], {"Price", "Item"})
```

Result: 
```powerquery
[CustomerID = 1]
```




## Category
Record.Transformations
