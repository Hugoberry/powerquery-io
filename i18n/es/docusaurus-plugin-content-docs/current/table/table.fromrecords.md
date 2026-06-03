---
title: Table.FromRecords
---

# Table.FromRecords


Convierte una lista de registros en una tabla.


## Syntax

```powerquery
Table.FromRecords(
    records as list,
    optional columns as any,
    optional missingField as MissingField.Type
) as table
```


## Remarks

Convierte una lista especificada de registros en una tabla.

-   `records`: lista de registros que se van a convertir en una tabla.
-   `columns`: (Opcional) Una lista de los nombres de columna de la tabla o el tipo de la tabla.
-   `missingField`: (Opcional) Especifica cómo controlar los campos que faltan en una fila. Use uno de los siguientes valores:
    -   `MissingField.Error`: cualquier campo que falte genera un error (valor predeterminado).
    -   `MissingField.UseNull`: los campos que faltantes se incluyen como valores `null`.
      
    El uso de `MissingField.Ignore` en este parámetro genera un error.


## Examples

### Example #1
Crear una tabla a partir de registros, usando los nombres de los campos de registro como nombres de columna.
```powerquery
Table.FromRecords({
    [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
    [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
    [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
})
```

Result: 
```powerquery
#table(type table[CustomerID = any, Name = any, Phone = any],
{
    {1, "Bob", "123-4567"},
    {2, "Jim", "987-6543"},
    {3, "Paul", "543-7890"}
})
```


### Example #2
Crear una tabla a partir de registros que tengan columnas con tipo y seleccionar las columnas de número.
```powerquery
Table.ColumnsOfType(
    Table.FromRecords(
        {[CustomerID = 1, Name = "Bob"]},
        type table[CustomerID = Number.Type, Name = Text.Type]
    ),
    {type number}
)
```

Result: 
```powerquery
{"CustomerID"}
```


### Example #3
Crea una tabla que contenga el nombre, la inicial del segundo nombre y el apellido de los clientes de los registros especificados. Si falta alguno de los valores, reemplázalo por `null`.
```powerquery
Table.FromRecords({
        [CustomerID = 1, FirstName = "Bob", MiddleInitial = "C", LastName = "Smith"],
        [CustomerID = 2, FirstName = "Sarah", LastName = "Jones"],
        [CustomerID = 3, FirstName = "Harry", MiddleInitial = "H"]
    },
    type table [FirstName = nullable text, MiddleInitial = nullable text, LastName = nullable text],
    MissingField.UseNull)
```

Result: 
```powerquery
#table(type table[FirstName = text, MiddleInitial = text, LastName = text],
{
    {"Bob", "C", "Smith"},
    {"Sarah", null, "Jones"},
    {"Harry", "H", null}
})
```




## Category
Table.Table construction
