---
title: Table.ContainsAny
---

# Table.ContainsAny


## Description

Indica se algún dos rexistros especificados aparece como filas na táboa.


## Syntax

```powerquery
Table.ContainsAny(
    table as table,
    rows as list,
    optional equationCriteria as any
) as logical
```


## Details

Indica se algún dos rexistros especificados na lista de rexistros <code>rows</code> aparece como filas en <code>table</code>.    Pódese especificar un parámetro opcional <code>equationCriteria</code> para controlar a comparación entre as filas da táboa.


## Examples

### Example #1 
Determinar se a táboa &lt;code&gt;(\{[a = 1, b = 2], [a = 3, b = 4]})&lt;/code&gt; contén as filas &lt;code&gt;[a = 1, b = 2]&lt;/code&gt; ou &lt;code&gt;[a = 3, b = 5]&lt;/code&gt;.
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
Determinar se a táboa &lt;code&gt;(\{[a = 1, b = 2], [a = 3, b = 4]})&lt;/code&gt; contén as filas &lt;code&gt;[a = 1, b = 3]&lt;/code&gt; ou &lt;code&gt;[a = 3, b = 5]&lt;/code&gt;.
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
Determinar se a táboa &lt;code&gt;(Table.FromRecords(\{[a = 1, b = 2], [a = 3, b = 4]}))&lt;/code&gt; contén as filas &lt;code&gt;[a = 1, b = 3]&lt;/code&gt; e &lt;code&gt;[a = 3, b = 5]&lt;/code&gt; comparando só a columna [a].
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
