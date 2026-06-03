---
title: Record.ReorderFields
---

# Record.ReorderFields


Reordena los campos del registro para que coincidan con el orden de una lista de nombres de campo.


## Syntax

```powerquery
Record.ReorderFields(
    record as record,
    fieldOrder as list,
    optional missingField as MissingField.Type
) as record
```


## Remarks

Reordena los campos de un registro para que coincidan con el orden de una lista de nombres de campo.

-   `record`: el registro que contiene los campos que se van a reordenar.
-   `fieldOrder`: lista que contiene el nuevo orden de los campos que se van a aplicar al registro. Los valores de los campos se mantienen y los campos que no aparecen en este parámetro se dejan en sus posiciones originales.
-   `missingField`: especifica la acción esperada para los valores que faltan en una fila que contiene menos campos de los esperados. Los siguientes valores son válidos:
    -   `MissingField.Error`: (Valor predeterminado) indica que los campos que faltan deben producir un error. Si no se especifica ningún valor para el parámetro `missingField`, se usa este valor.
    -   `MissingField.Ignore`: indica que se deben omitir los campos que faltan.
    -   `MissingField.UseNull`: indica que los campos que faltan deben incluirse como valores `null`.


## Examples

### Example #1
Cambiar algunos de los campos del registro.
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
Reordene algunos de los campos del registro e incluya `null` para los campos que falten.
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
