---
title: Record.SelectFields
---

# Record.SelectFields


Gibt einen Datensatz zurück, der ausschließlich die angegebenen Felder enthält.


## Syntax

```powerquery
Record.SelectFields(
    record as record,
    fields as any,
    optional missingField as MissingField.Type
) as record
```


## Remarks

Gibt einen Datensatz zurück, der ausschließlich die in der Liste "<code>fields</code>" angegebenen Felder aus der Eingabe "<code>record</code>" enthält.


## Examples

### Example #1 
Wählt die Felder &#34;Item&#34; und &#34;Price&#34; des Datensatzes aus.
```powerquery
Record.SelectFields(
    [OrderID = 1, CustomerID = 1, Item = "Fishing rod", Price = 100.0],
    {"Item", "Price"}
)
```

Result: 
```powerquery
[Item = "Fishing rod", Price = 100]
```




## Category
Record.Selection
