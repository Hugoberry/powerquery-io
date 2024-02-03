---
title: Table.TransformColumnTypes
---

# Table.TransformColumnTypes


## Description

Aplică transformările de tip de forma \{ column, type } utilizând o anumită cultură.


## Syntax

```powerquery
Table.TransformColumnTypes(
    table as table,
    typeTransformations as list,
    optional culture as text
) as table
```


## Details

Returnează un tabel din datele introduse <code>table</code> aplicând operațiunea de transformare în coloanele specificate în parametrul <code>typeTransformations</code> (în care formatul este \{ column name, type name}), utilizând cultura specificată în parametrul opțional <code>culture</code> (de exemplu „ro-RO”).    În cazul în care coloana nu există, este ridicată o excepție.


## Examples

### Example #1 
Transformaţi valorile numerice din coloana [a] în valori text din tabelul &lt;code&gt;(\{[a = 1, b = 2], [a = 3, b = 4]})&lt;/code&gt;.
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
