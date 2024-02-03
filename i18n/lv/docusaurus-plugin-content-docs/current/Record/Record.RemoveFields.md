---
title: Record.RemoveFields
---

# Record.RemoveFields


## Description

No ievades ieraksta tiek noņemti norādītie lauki.


## Syntax

```powerquery
Record.RemoveFields(
    record as record,
    fields as any,
    optional missingField as MissingField.Type
) as record
```


## Details

Tiek atgriezts ieraksts, kurā ir ietverti ievades ieraksta <code>record</code> lauki, noņemot sarakstā <code>fields</code> norādītos laukus. Ja norādītais lauks nepastāv, tiek aktivizēts izņēmums.


## Examples

### Example #1 
Noņemiet no ieraksta lauku &#34;Price&#34;.
```powerquery
Record.RemoveFields([CustomerID = 1, Item = "Fishing rod", Price = 18.00], "Price")
```

Result: 
```powerquery
[CustomerID = 1, Item = "Fishing rod"]
```


### Example #2 
Noņemiet no ieraksta laukus &#34;Price&#34; un &#34;Item&#34;.
```powerquery
Record.RemoveFields([CustomerID = 1, Item = "Fishing rod", Price = 18.00], {"Price", "Item"})
```

Result: 
```powerquery
[CustomerID = 1]
```




## Category
Record.Transformations
