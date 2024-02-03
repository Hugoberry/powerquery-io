---
title: Table.ContainsAny
---

# Table.ContainsAny


## Description

Indica si alguno de los registros especificados aparece como filas en la tabla.


## Syntax

```powerquery
Table.ContainsAny(
    table as table,
    rows as list,
    optional equationCriteria as any
) as logical
```


## Details

Indica si alguno de los registros especificados en la lista de registros <code>rows</code> aparece como filas en <code>table</code>.    Se puede especificar un parámetro <code>equationCriteria</code> opcional para controlar la comparación entre las filas de la tabla.


## Examples

### Example #1 
Determinar si la tabla &lt;code&gt;(\{[a = 1, b = 2], [a = 3, b = 4]})&lt;/code&gt; contiene las filas &lt;code&gt;[a = 1, b = 2]&lt;/code&gt; o &lt;code&gt;[a = 3, b = 5]&lt;/code&gt;.
```powerquery
Table.ContainsAny(
    Table.FromRecords({
        [a = 1, b = 2],
        [a = 3, b = 4]
    }),
    {
        [a = 1, b = 2],
        [a = 3, b = 5]
    }
)
```

Result: 
```powerquery
true
```


### Example #2 
Determinar si la tabla &lt;code&gt;(\{[a = 1, b = 2], [a = 3, b = 4]})&lt;/code&gt; contiene las filas &lt;code&gt;[a = 1, b = 3]&lt;/code&gt; o &lt;code&gt;[a = 3, b = 5]&lt;/code&gt;.
```powerquery
Table.ContainsAny(
    Table.FromRecords({
        [a = 1, b = 2],
        [a = 3, b = 4]
    }),
    {
        [a = 1, b = 3],
        [a = 3, b = 5]
    }
)
```

Result: 
```powerquery
false
```


### Example #3 
Determinar si la tabla &lt;code&gt;(Table.FromRecords(\{[a = 1, b = 2], [a = 3, b = 4]}))&lt;/code&gt; contiene las filas &lt;code&gt;[a = 1, b = 3]&lt;/code&gt; o &lt;code&gt;[a = 3, b = 5]&lt;/code&gt; comparando solo la columna [a].
```powerquery
Table.ContainsAny(
    Table.FromRecords({
        [a = 1, b = 2],
        [a = 3, b = 4]
    }),
    {
        [a = 1, b = 3],
        [a = 3, b = 5]
    },
    "a"
)
```

Result: 
```powerquery
true
```




## Category
Table.Membership
