---
title: Record.ReorderFields
---

# Record.ReorderFields


Reordena os campos de registo para corresponder à ordem de uma lista de nomes de campos.


## Syntax

```powerquery
Record.ReorderFields(
    record as record,
    fieldOrder as list,
    optional missingField as MissingField.Type
) as record
```


## Remarks

Reordena os campos de um registo para corresponderem à ordem de uma lista de nomes de campo.

-   `record`: o registo que contém os campos a reordenar.
-   `fieldOrder`: uma lista que contém a nova ordem dos campos a aplicar ao registo. Os valores dos campos são mantidos e os campos não listados neste parâmetro são deixados nas posições originais.
-   `missingField`: especifica a ação esperada para valores em falta numa linha que contém menos campos do que o esperado. Os seguintes valores são válidos:
    -   `MissingField.Error`: (predefinido) indica que os campos em falta devem resultar num erro. Se não for introduzido qualquer valor para o parâmetro `missingField`, este valor é utilizado.
    -   `MissingField.Ignore`: indica que os campos em falta devem ser ignorados.
    -   `MissingField.UseNull`: indica que os campos em falta devem ser incluídos como valores `null`.


## Examples

### Example #1
Reordenar alguns dos campos existentes no registo.
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
Reordenar alguns dos campos no registo e incluir `null` para quaisquer campos em falta.
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
