---
title: Record.RemoveFields
---

# Record.RemoveFields


No ievades ieraksta tiek noņemti norādītie lauki.


## Syntax

```powerquery
Record.RemoveFields(
    record as record,
    fields as any,
    optional missingField as MissingField.Type
) as record
```


## Remarks

Tiek atgriezts ieraksts, kurā no ievades ieraksta `record` ir noņemti visi sarakstā `fields` norādītie lauki. Ja norādītais lauks nepastāv, tiek izraisīta kļūda.


## Examples

### Example #1
Noņemiet no ieraksta lauku "Price".
```powerquery
Record.RemoveFields([CustomerID = 1, Item = "Fishing rod", Price = 18.00], "Price")
```

Result: 
```powerquery
[CustomerID = 1, Item = "Fishing rod"]
```


### Example #2
Noņemiet no ieraksta laukus "Price" un "Item".
```powerquery
Record.RemoveFields([CustomerID = 1, Item = "Fishing rod", Price = 18.00], {"Price", "Item"})
```

Result: 
```powerquery
[CustomerID = 1]
```




## Category
Record.Transformations
