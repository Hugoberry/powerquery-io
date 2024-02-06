---
title: Record.SelectFields
---

# Record.SelectFields


Returnerar en post som bara innehåller de angivna fälten.


## Syntax

```powerquery
Record.SelectFields(
    record as record,
    fields as any,
    optional missingField as MissingField.Type
) as record
```


## Remarks

Returnerar en post som bara innehåller fälten som anges i listan <code>fields</code> från indataposten <code>record</code>.


## Examples

### Example #1 
Välj fälten Item och Price i posten.
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
