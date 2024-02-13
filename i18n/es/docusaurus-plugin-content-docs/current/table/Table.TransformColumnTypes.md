---
title: Table.TransformColumnTypes
---

# Table.TransformColumnTypes


Aplica la transformación de tipo del formato \{ column, type } con una referencia cultural específica.


## Syntax

```powerquery
Table.TransformColumnTypes(
    table as table,
    typeTransformations as list,
    optional culture as text
) as table
```


## Remarks

Devuelve una tabla de la entrada <code>table</code> mediante la aplicación de la operación de transformación a las columnas especificadas en el parámetro <code>typeTransformations</code> (donde el formato es \{ column name, type name}), con la referencia cultural especificada en el parámetro <code>culture</code> (por ejemplo, "es-ES").    Si no existe la columna, se inicia una excepción.


## Examples

### Example #1 
Transformar los valores de número de la columna [a] en valores de texto de la tabla &lt;code&gt;(\{[a = 1, b = 2], [a = 3, b = 4]})&lt;/code&gt;.
```powerquery
Table.TransformColumnTypes(
    Table.FromRecords({
        [a = 1, b = 2],
        [a = 3, b = 4]
    }),
    {"a", type text},
    "en-US"
)
```

Result: 
```powerquery
Table.FromRecords({
    [a = "1", b = 2],
    [a = "3", b = 4]
})
```




## Category
Table.Transformation
