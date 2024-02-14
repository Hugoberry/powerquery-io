---
title: Table.ContainsAny
---

# Table.ContainsAny


Indica se algum registro especificado será exibido como linha na tabela.


## Syntax

```powerquery
Table.ContainsAny(
    table as table,
    rows as list,
    optional equationCriteria as any
) as logical
```


## Remarks

Indica se algum registro especificado da lista de registros <code>rows</code> será exibido como linha na <code>table</code>.    Um parâmetro <code>equationCriteria</code> opcional pode ser especificado para controlar a comparação entre as linhas da tabela.


## Examples

### Example #1 
Determine se a tabela &lt;code&gt;(\{[a = 1, b = 2], [a = 3, b = 4]})&lt;/code&gt; contém as linhas &lt;code&gt;[a = 1, b = 2]&lt;/code&gt; ou &lt;code&gt;[a = 3, b = 5]&lt;/code&gt;.
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
Determine se a tabela &lt;code&gt;(\{[a = 1, b = 2], [a = 3, b = 4]})&lt;/code&gt; contém as linhas &lt;code&gt;[a = 1, b = 3]&lt;/code&gt; ou &lt;code&gt;[a = 3, b = 5]&lt;/code&gt;.
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
Determine se a tabela &lt;code&gt;(Table.FromRecords(\{[a = 1, b = 2], [a = 3, b = 4]}))&lt;/code&gt; contém as linhas &lt;code&gt;[a = 1, b = 3]&lt;/code&gt; ou &lt;code&gt;[a = 3, b = 5]&lt;/code&gt; comparando apenas a coluna [a].
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
