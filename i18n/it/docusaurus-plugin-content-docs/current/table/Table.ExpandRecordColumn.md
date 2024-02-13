---
title: Table.ExpandRecordColumn
---

# Table.ExpandRecordColumn


Espande una colonna di record in colonne con ciascuno dei valori.


## Syntax

```powerquery
Table.ExpandRecordColumn(
    table as table,
    column as text,
    fieldNames as list,
    optional newColumnNames as list
) as table
```


## Remarks

Dato <code>column</code> di record nell'input <code>table</code>, crea una tabella con una colonna per ogni campo del record. Facoltativamente, è possibile specificare <code>newColumnNames</code> per garantire nomi univoci per le colonne nella nuova tabella.    <ul>        <li><code>table</code>: tabella originale con la colonna di record da espandere. </li>        <li><code>column</code>: colonna da espandere.</li>        <li><code>fieldNames</code>: elenco di campi da espandere in colonne nella tabella.</li>        <li><code>newColumnNames</code>: elenco di nomi di colonna per specificare le nuove colonne. I nuovi nomi di colonna non possono duplicare alcuna colonna nella nuova tabella.</li>    </ul>


## Examples

### Example #1 
Espandere la colonna [a] nella tabella &lt;code&gt;(\{[a = [aa = 1, bb = 2, cc = 3], b = 2]})&lt;/code&gt; in 3 colonne &#34;aa&#34;, &#34;bb&#34; e &#34;cc&#34;.
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
