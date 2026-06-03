---
title: Record.ReorderFields
---

# Record.ReorderFields


Reordena os campos de registro para corresponder à ordem de uma lista de nomes de campo.


## Syntax

```powerquery
Record.ReorderFields(
    record as record,
    fieldOrder as list,
    optional missingField as MissingField.Type
) as record
```


## Remarks

Reordena os campos de um registro para corresponder à ordem de uma lista de nomes de campo.

-   `record`: O registro que contém os campos a serem reordenados.
-   `fieldOrder`: Uma lista que contém a nova ordem dos campos a serem aplicados ao registro. Os valores de campo são mantidos e os campos não listados neste parâmetro são deixados em suas posições originais.
-   `missingField`: Especifica a ação esperada para valores ausentes em uma linha que contém menos campos do que o esperado. Os seguintes valores são válidos:
    -   `MissingField.Error`: (Padrão) Indica que campos ausentes devem resultar em um erro. Se nenhum valor for inserido para o parâmetro `missingField`, este valor será usado.
    -   `MissingField.Ignore`: Indica que campos ausentes devem ser ignorados.
    -   `MissingField.UseNull`: Indica que os campos ausentes devem ser incluídos como valores `null`.


## Examples

### Example #1
Reordenar alguns dos campos do registro.
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
Reordene alguns dos campos no registro e inclua `null` para quaisquer campos ausentes.
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
