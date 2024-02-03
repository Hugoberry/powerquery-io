---
title: Table.ExpandRecordColumn
---

# Table.ExpandRecordColumn


## Description

Expande unha columna de rexistros en columnas con cada un dos valores.


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

Dada a <code>column</code> de rexistros na <code>table</code> de entrada, crea unha táboa cunha columna para cada campo do rexistro. Opcionalmente, pódese especificar <code>newColumnNames</code> para garantir nomes exclusivos para as columnas da nova táboa.    <ul>        <li><code>table</code>: a táboa orixinal coa columna de rexistro que se vai expandir. </li>        <li><code>column</code>: a columna que se vai expandir.</li>        <li><code>fieldNames</code>: a lista de campos que se van expandir en columnas da táboa.</li>        <li><code>newColumnNames</code>: a lista de nomes de columnas que se van dar ás novas columnas. Os novos nomes de columna non poden duplicar ningunha columna na nova táboa.</li>    </ul>


## Examples

### Example #1 
Expandir a columna [a] da táboa &lt;code&gt;(\{[a = [aa = 1, bb = 2, cc = 3], b = 2]})&lt;/code&gt; en 3 columnas &#34;aa&#34;, &#34;bb&#34; e &#34;cc&#34;.
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
