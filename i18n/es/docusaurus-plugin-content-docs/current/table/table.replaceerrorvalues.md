---
title: Table.ReplaceErrorValues
---

# Table.ReplaceErrorValues


Reemplaza los valores de error en las columnas especificadas por el valor especificado correspondiente.


## Syntax

```powerquery
Table.ReplaceErrorValues(
    table as table,
    errorReplacement as list
) as table
```


## Remarks

Reemplaza los valores de error en las columnas especificadas de `table` por los nuevos valores de la lista `errorReplacement`. El formato de la lista es \{\{column1, value1\}, ...\}. Puede haber solo un valor de reemplazo por columna, si se especifica la columna más de una vez, se producirá un error.


## Examples

### Example #1
Reemplazar el valor de error por el texto "world" en la tabla.
```powerquery
Table.ReplaceErrorValues(
    Table.FromRows({{1, "hello"}, {3, ...}}, {"A", "B"}),
    {"B", "world"}
)
```

Result: 
```powerquery
Table.FromRecords({
    [A = 1, B = "hello"],
    [A = 3, B = "world"]
})
```


### Example #2
Reemplazar el valor de error en la columna A por el texto "hello" y en la columna B por el texto "world" en la tabla.
```powerquery
Table.ReplaceErrorValues(
    Table.FromRows({{..., ...}, {1, 2}}, {"A", "B"}),
    {{"A", "hello"}, {"B", "world"}}
)
```

Result: 
```powerquery
Table.FromRecords({
    [A = "hello", B = "world"],
    [A = 1, B = 2]
})
```




## Category
Table.Transformation
