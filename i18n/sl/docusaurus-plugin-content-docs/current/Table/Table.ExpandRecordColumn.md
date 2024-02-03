---
title: Table.ExpandRecordColumn
---

# Table.ExpandRecordColumn


## Description

Razširi stolpec zapisov v stolpce z vsako vrednostjo.


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

Za navedeni <code>column</code> zapisov v vhodni tabeli <code>table</code> ustvari tabelo s stolpcem za vsako polje v zapisu. Če želite, lahko navedete <code>newColumnNames</code>, da zagotovite enolična imena za stolpce v novi tabeli.    <ul>        <li><code>table</code>: izvirna tabela s stolpcem zapisa, ki bo razširjen. </li>        <li><code>column</code>: stolpec, ki bo razširjen.</li>        <li><code>fieldNames</code>: seznam polj, ki bodo razširjena v stolpce v tabeli.</li>        <li><code>newColumnNames</code>: seznam imen stolpcev za nove stolpce. Nova imena stolpcev ne smejo biti podvojena za noben stolpec v novi tabeli.</li>    </ul>


## Examples

### Example #1 
Razširite stolpec [a] v tabeli &lt;code&gt;(\{[a = [aa = 1, bb = 2, cc = 3], b = 2]})&lt;/code&gt; v 3 stolpce &#34;aa&#34;, &#34;bb&#34; in &#34;cc&#34;.
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
