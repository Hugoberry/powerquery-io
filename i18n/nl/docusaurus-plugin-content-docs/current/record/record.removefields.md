---
title: Record.RemoveFields
---

# Record.RemoveFields


Verwijdert het opgegeven veld of de opgegeven velden uit de invoerrecord.


## Syntax

```powerquery
Record.RemoveFields(
    record as record,
    fields as any,
    optional missingField as MissingField.Type
) as record
```


## Remarks

Retourneert een record die alle velden die in de lijst `fields` zijn opgegeven, verwijdert uit de invoer `record`. Er wordt een fout gegenereerd als het opgegeven veld niet bestaat.


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
