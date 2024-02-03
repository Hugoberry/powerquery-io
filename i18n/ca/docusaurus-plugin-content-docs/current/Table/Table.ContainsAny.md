---
title: Table.ContainsAny
---

# Table.ContainsAny


## Description

Indica si algun dels registres especificats apareix com a files a la taula.


## Syntax

```powerquery
Table.ContainsAny(
    table as table,
    rows as list,
    optional equationCriteria as any
) as logical
```


## Details

Indica si algun dels registres especificats a la llista de registres <code>rows</code> apareix com a files a la <code>table</code>.    Es pot especificar un paràmetre opcional <code>equationCriteria</code> per controlar la comparació entre les files de la taula.


## Examples

### Example #1 
Determina si la taula &lt;code&gt;(\{[a = 1, b = 2], [a = 3, b = 4]})&lt;/code&gt; conté les files &lt;code&gt;[a = 1, b = 2]&lt;/code&gt; i &lt;code&gt;[a = 3, b = 5]&lt;/code&gt;.
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
Determina si la taula &lt;code&gt;(\{[a = 1, b = 2], [a = 3, b = 4]})&lt;/code&gt; conté les files &lt;code&gt;[a = 1, b = 3]&lt;/code&gt; i &lt;code&gt;[a = 3, b = 5]&lt;/code&gt;.
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
Determina si la taula &lt;code&gt;(Table.FromRecords(\{[a = 1, b = 2], [a = 3, b = 4]}))&lt;/code&gt; conté les files &lt;code&gt;[a = 1, b = 3]&lt;/code&gt; o &lt;code&gt;[a = 3, b = 5]&lt;/code&gt; en comparar només la columna [a].
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
