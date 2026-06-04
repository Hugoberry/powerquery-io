---
title: Record.ReorderFields
---

# Record.ReorderFields


Reordena os campos do rexistro para que coincidan coa orde dunha lista de nomes de campos.


## Syntax

```powerquery
Record.ReorderFields(
    record as record,
    fieldOrder as list,
    optional missingField as MissingField.Type
) as record
```


## Remarks

Reordena os campos dun rexistro para que coincidan coa orde dunha lista de nomes de campo.

-   `record` : O rexistro que contén os campos para reordenar.
-   `fieldOrder` : Unha lista que contén a nova orde dos campos que se aplicarán ao rexistro. Os valores dos campos mantéñense e os campos que non figuran neste parámetro mantéñense nas súas posicións orixinais.
-   `missingField` : Especifica a acción esperada para os valores que faltan nunha fila que contén menos campos dos esperados. Os seguintes valores son válidos:
    -   `MissingField.Error`: (Predeterminado) Indica que os campos que faltan deberían provocar un erro. Se non se introduce ningún valor para o parámetro `missingField` , úsase este valor.
    -   `MissingField.Ignore`: Indica que os campos que faltan deben ser ignorados.
    -   `MissingField.UseNull`: Indica que os campos que faltan deben incluírse como valores `nulo`.


## Examples

### Example #1
Reordenar algúns dos campos do rexistro.
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
Reordena algúns dos campos do rexistro e inclúe `nulo` para os campos que faltan.
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
