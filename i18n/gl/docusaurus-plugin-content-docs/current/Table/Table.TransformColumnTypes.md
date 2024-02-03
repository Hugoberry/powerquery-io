---
title: Table.TransformColumnTypes
---

# Table.TransformColumnTypes


## Description

Aplica transformación(s) de tipo da forma \{ column, type } usando unha referencia cultural específica.


## Syntax

```powerquery
Table.TransformColumnTypes(
    table as table,
    typeTransformations as list,
    optional culture as text
) as table
```


## Details

Devolve unha táboa da entrada <code>table</code> mediante a aplicación da operación de transformación ás columnas especificadas no parámetro <code>typeTransformations</code> (onde o formato é \{ column name, type name}) coa referencia cultural especificada no parámetro <code>culture</code> opcional (por exemplo, "gl-ES").    Se a columna non existe, xérase unha excepción.


## Examples

### Example #1 
Transformar os valores de número na columna [a] a valores de texto da táboa &lt;code&gt;(\{[a = 1, b = 2], [a = 3, b = 4]})&lt;/code&gt;.
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
