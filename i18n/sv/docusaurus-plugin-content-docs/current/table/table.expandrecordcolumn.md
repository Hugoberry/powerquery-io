---
title: Table.ExpandRecordColumn
---

# Table.ExpandRecordColumn


Expanderar en kolumn med poster till kolumner med varje värde.


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

Baserat på <code>column</code> med poster i indataposten <code>table</code> skapas en tabell med en kolumn för varje fält i posten. <code>newColumnNames</code> kan anges för att säkerställa att kolumnerna i den nya tabellen är unika.    <ul>        <li><code>table</code>: Den ursprungliga tabellen med den postkolumn som ska expanderas. </li>        <li><code>column</code>: Kolumnen som ska expanderas.</li>        <li><code>fieldNames</code>: Listan med fält som ska expanderas till kolumner i tabellen.</li>        <li><code>newColumnNames</code>: Listan med kolumnnamn som ska få de nya kolumnerna. De nya kolumnnamnen kan inte duplicera en kolumn i den nya tabellen.</li>    </ul>


## Examples

### Example #1 
Expandera kolumnen [a] i tabellen &lt;code&gt;(\{[a = [aa = 1, bb = 2, cc = 3], b = 2]})&lt;/code&gt; till 3 kolumner: &#34;aa&#34;, &#34;bb&#34; och &#34;cc&#34;.
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
