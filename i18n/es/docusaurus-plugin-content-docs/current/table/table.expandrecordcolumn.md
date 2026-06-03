---
title: Table.ExpandRecordColumn
---

# Table.ExpandRecordColumn


Expande una columna de registros en columnas con cada uno de los valores.


## Syntax

```powerquery
Table.ExpandRecordColumn(
    table as table,
    column as text,
    fieldNames as list,
    optional newColumnNames as list
) as table
```


## Remarks

Dado el `column` de registros de la entrada `table`, crea una tabla con una columna para cada campo del registro. Opcionalmente, puede especificarse `newColumnNames` para proteger los nombres únicos de las columnas de la nueva tabla.

-   `table`: la tabla original con la columna de registros que se va a expandir.
-   `column`: la columna que se va a expandir.
-   `fieldNames`: la lista de campos que se van a expandir en columnas de la tabla.
-   `newColumnNames`: la lista de nombres de columna que asignar a las nuevas columnas. Los nombres de nuevas columnas no pueden duplicar ninguna columna en la nueva tabla.


## Examples

### Example #1
Expandir la columna \[a\] en la tabla `({[a = [aa = 1, bb = 2, cc = 3], b = 2]})` en 3 columnas "aa", "bb" y "cc".
```powerquery
Table.ExpandRecordColumn(
    Table.FromRecords({
        [
            a = [aa = 1, bb = 2, cc = 3],
            b = 2
        ]
    }),
    "a",
    {"aa", "bb", "cc"}
)
```

Result: 
```powerquery
Table.FromRecords({[aa = 1, bb = 2, cc = 3, b = 2]})
```




## Category
Table.Transformation
