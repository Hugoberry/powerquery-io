---
title: Table.ExpandRecordColumn
---

# Table.ExpandRecordColumn


## Description

Expande uma coluna de registros em colunas com cada um dos valores.


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

Dada a <code>column</code> de registros na entrada <code>table</code>, crie uma tabela com uma coluna para cada campo no registro. Opcionalmente, <code>newColumnNames</code> pode ser especificado para assegurar nomes exclusivos para as colunas da nova tabela.    <ul>        <li><code>table</code>: A tabela original com a coluna de registro a ser expandida. </li>        <li><code>column</code>: A coluna a ser expandida.</li>        <li><code>fieldNames</code>: A lista de campos a ser expandida em colunas na tabela.</li>        <li><code>newColumnNames</code>: A lista de nomes de coluna a serem atribuídos às novas colunas. Os novos nomes de coluna não podem duplicar nenhuma coluna na nova tabela.</li>    </ul>


## Examples

### Example #1 
Expanda a coluna [a] na tabela &lt;code&gt;(\{[a = [aa = 1, bb = 2, cc = 3], b = 2]})&lt;/code&gt; em três colunas: &#34;aa&#34;, &#34;bb&#34; e &#34;cc&#34;.
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
