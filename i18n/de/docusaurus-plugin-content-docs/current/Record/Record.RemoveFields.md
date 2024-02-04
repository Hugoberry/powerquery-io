---
title: Record.RemoveFields
---

# Record.RemoveFields


## Description

Entfernt die angegebenen Felder aus dem Eingabedatensatz.


## Syntax

```powerquery
Record.RemoveFields(
    record as record,
    fields as any,
    optional missingField as MissingField.Type
) as record
```


## Details

Gibt einen Datensatz zurück, in dem alle in der Liste "<code>fields</code>" angegebenen Felder aus der Eingabe "<code>record</code>" entfernt wurden. Ist das angegebene Feld nicht vorhanden, wird eine Ausnahme ausgelöst.


## Examples

### Example #1 
Entfernt das Feld &#34;Price&#34; aus dem Datensatz.
```powerquery
Record.RemoveFields([CustomerID = 1, Item = "Fishing rod", Price = 18.00], "Price")
```

Result: 
```powerquery
[CustomerID = 1, Item = "Fishing rod"]
```


### Example #2 
Entfernt die Felder &#34;Price&#34; und &#34;Item&#34; aus dem Datensatz.
```powerquery
Record.RemoveFields([CustomerID = 1, Item = "Fishing rod", Price = 18.00], {"Price", "Item"})
```

Result: 
```powerquery
[CustomerID = 1]
```




## Category
Record.Transformations
