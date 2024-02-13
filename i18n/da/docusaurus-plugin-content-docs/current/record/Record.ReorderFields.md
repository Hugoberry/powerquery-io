---
title: Record.ReorderFields
---

# Record.ReorderFields


Omarrangerer det eller de angivne felter i den nye rækkefølge.


## Syntax

```powerquery
Record.ReorderFields(
    record as record,
    fieldOrder as list,
    optional missingField as MissingField.Type
) as record
```


## Remarks

Returnerer en post efter at have omarrangeret felterne i <code>record</code> i den feltrækkefølge, der er angivet på listen <code>fieldOrder</code>. Feltværdier bevares, og felter, der ikke er anført i <code>fieldOrder</code>, forbliver på deres oprindelige placering.


## Examples

### Example #1 
Omarranger nogle af felterne i posten.
```powerquery
Record.ReorderFields(
    [CustomerID = 1, OrderID = 1, Item = "Fishing rod", Price = 100.0],
    {"OrderID", "CustomerID"}
)
```

Result: 
```powerquery
[OrderID = 1, CustomerID = 1, Item = "Fishing rod", Price = 100.0]
```




## Category
Record.Transformations
