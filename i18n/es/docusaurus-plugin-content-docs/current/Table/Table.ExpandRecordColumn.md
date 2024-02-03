---
title: Table.ExpandRecordColumn
---

# Table.ExpandRecordColumn


## Description

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


## Details

Dado el <code>column</code> de registros de la entrada <code>table</code>, crea una tabla con una columna para cada campo del registro. Opcionalmente, puede especificarse <code>newColumnNames</code> para proteger los nombres únicos de las columnas de la nueva tabla.    <ul>        <li><code>table</code>: la tabla original con la columna de registros que se va a expandir. </li>        <li><code>column</code>: la columna que se va a expandir.</li>        <li><code>fieldNames</code>: la lista de campos que se van a expandir en columnas de la tabla.</li>        <li><code>newColumnNames</code>: la lista de nombres de columna que asignar a las nuevas columnas. Los nombres de nuevas columnas no pueden duplicar ninguna columna en la nueva tabla.</li>    </ul>


## Examples

### Example #1 
Expandir la columna [a] en la tabla &lt;code&gt;(\{[a = [aa = 1, bb = 2, cc = 3], b = 2]})&lt;/code&gt; en 3 columnas &#34;aa&#34;, &#34;bb&#34; y &#34;cc&#34;.
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
