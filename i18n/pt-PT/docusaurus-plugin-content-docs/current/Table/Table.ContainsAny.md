---
title: Table.ContainsAny
---

# Table.ContainsAny


## Description

Indica se qualquer um dos registos especificados aparece como uma linha na tabela.


## Syntax

```powerquery
Table.ContainsAny(
    table as table,
    rows as list,
    optional equationCriteria as any
) as logical
```


## Details

Indica se qualquer um dos registos especificados na lista de registos <code>rows</code> aparece como uma linha na <code>table</code>.    É possível especificar um parâmetro opcional <code>equationCriteria</code> para controlar a comparação entre as linhas da tabela.


## Examples

### Example #1 
Determinar se a tabela &lt;code&gt;(\{[a = 1, b = 2], [a = 3, b = 4]})&lt;/code&gt; contém as linhas &lt;code&gt;[a = 1, b = 2]&lt;/code&gt; ou &lt;code&gt;[a = 3, b = 5]&lt;/code&gt;.
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
Determinar se a tabela &lt;code&gt;(\{[a = 1, b = 2], [a = 3, b = 4]})&lt;/code&gt; contém as linhas &lt;code&gt;[a = 1, b = 3]&lt;/code&gt; ou &lt;code&gt;[a = 3, b = 5]&lt;/code&gt;.
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
Determinar se a tabela &lt;code&gt;(Table.FromRecords(\{[a = 1, b = 2], [a = 3, b = 4]}))&lt;/code&gt; contém as linhas &lt;code&gt;[a = 1, b = 3]&lt;/code&gt; ou &lt;code&gt;[a = 3, b = 5]&lt;/code&gt; comparando apenas a coluna [a].
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
