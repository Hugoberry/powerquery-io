---
title: Record.ReorderFields
---

# Record.ReorderFields


Sortera om postfälten så att de matchar ordningen i en lista med fältnamn.


## Syntax

```powerquery
Record.ReorderFields(
    record as record,
    fieldOrder as list,
    optional missingField as MissingField.Type
) as record
```


## Remarks

Sortera om fälten av en post så att de matchar ordningen i en lista med fältnamn.

-   `record`: Den post som innehåller fälten som ska sorteras om.
-   `fieldOrder`: En lista som innehåller den nya ordningen för fälten som ska tillämpas på posten. Fältvärden bevaras och fält som inte anges i denna parameter lämnas kvar i sina ursprungliga positioner.
-   `missingField`Anger den förväntade åtgärden för saknade värden i en rad som innehåller färre fält än förväntat. Följande värden är giltiga:
    -   `MissingField.Error`: (Standard) Anger att saknade fält ska resultera i ett fel. Om inget värde anges för `missingField`\-parametern används detta värde.
    -   `MissingField.Ignore`: Anger att saknade fält ska ignoreras.
    -   `MissingField.UseNull`: Anger att saknade fält ska inkluderas som `null` värden.


## Examples

### Example #1
Ändra ordning på fälten i posten.
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


### Example #2
Ändra ordning på några av fälten i posten och inkludera `null` för eventuella saknade fält.
```powerquery
let
    Source = [CustomerID = 3, First Name = "Paul", Phone = "543-7890", Purchase = "Fishing Rod"],
    reorderedRecord = Record.ReorderFields(
        Source,
        {"Purchase", "Last Name", "First Name"},
        MissingField.UseNull
    )
in
    reorderedRecord
```

Result: 
```powerquery
[CustomerID = 3, Purchase = "Fishing Rod", Phone = "543-7890", Last Name = null, First Name = "Paul"]
```




## Category
Record.Transformations
