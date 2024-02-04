---
title: Table.ExpandTableColumn
---

# Table.ExpandTableColumn


## Description

Expande uma coluna de registos ou uma coluna de tabelas para várias colunas na tabela contentora.


## Syntax

```powerquery
Table.ExpandTableColumn(
    table as table,
    column as text,
    columnNames as list,
    optional newColumnNames as list
) as table
```


## Details

Expande as tabelas existentes em <code>table</code>[<code>column</code>] em várias linhas e colunas. <code>columnNames</code> é utilizado para selecionar as colunas a expandir a partir da tabela interna. Especifique <code>newColumnNames</code> para evitar conflitos entre as colunas existentes e as novas colunas.


## Examples

### Example #1 
Expande as colunas de tabela em &lt;code&gt;[a]&lt;/code&gt; na tabela &lt;code&gt;(\{[t = \{[a=1, b=2, c=3], [a=2,b=4,c=6]}, b = 2]})&lt;/code&gt; em 3 colunas &lt;code&gt;[t.a]&lt;/code&gt;, &lt;code&gt;[t.b]&lt;/code&gt; e &lt;code&gt;[t.c]&lt;/code&gt;.
```powerquery
Table.ExpandTableColumn(
    Table.FromRecords({
        [
            t = Table.FromRecords({
                [a = 1, b = 2, c = 3],
                [a = 2, b = 4, c = 6]
            }),
            b = 2
        ]
    }),
    "t",
    {"a", "b", "c"},
    {"t.a", "t.b", "t.c"}
)
```

Result: 
```powerquery
Table.FromRecords({
    [t.a = 1, t.b = 2, t.c = 3, b = 2],
    [t.a = 2, t.b = 4, t.c = 6, b = 2]
})
```




## Category
Table.Transformation
