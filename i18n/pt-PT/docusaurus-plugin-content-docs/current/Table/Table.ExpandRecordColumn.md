---
title: Table.ExpandRecordColumn
---

# Table.ExpandRecordColumn


## Description

Expande uma coluna de registos em colunas com cada um dos valores.


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

Com base no <code>column</code> de registos existentes na entrada <code>table</code>, cria uma tabela com uma coluna para cada campo existente no registo. Opcionalmente, <code>newColumnNames</code> pode ser especificado para garantir nomes exclusivos para as colunas na tabela nova.    <ul>        <li><code>table</code>: a tabela original com a coluna de registos a expandir. </li>        <li><code>column</code>: a coluna a expandir.</li>        <li><code>fieldNames</code>: a lista de campos a expandir nas colunas da tabela.</li>        <li><code>newColumnNames</code>: a lista de nomes a atribuir às colunas novas. Os nomes das colunas novas não podem duplicar qualquer coluna na tabela nova.</li>    </ul>


## Examples

### Example #1 
Expandir a coluna [a] existente na tabela &lt;code&gt;(\{[a = [aa = 1, bb = 2, cc = 3], b = 2]})&lt;/code&gt; para 3 colunas &#34;aa&#34;, &#34;bb&#34; e &#34;cc&#34;.
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
