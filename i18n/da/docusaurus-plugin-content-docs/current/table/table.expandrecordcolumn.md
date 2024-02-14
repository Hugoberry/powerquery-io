---
title: Table.ExpandRecordColumn
---

# Table.ExpandRecordColumn


Udvider en kolonne over poster i kolonner med de enkelte værdier.


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

Med <code>column</code> over poster i inputtet <code>table</code> oprettes en tabel med en kolonne for de enkelte felter i posten. Du kan vælge at angive <code>newColumnNames</code> for at sikre entydige navne for kolonnerne i den nye tabel.    <ul>        <li><code>table</code>: Den oprindelige tabel med den postkolonne, der skal udvides. </li>        <li><code>column</code>: Den kolonne, der skal udvides.</li>        <li><code>fieldNames</code>: Den feltliste, der skal udvides i kolonner i tabellen.</li>        <li><code>newColumnNames</code>: Den liste over kolonnenavne, der skal overføres til de nye kolonner. De nye kolonnenavne kan ikke kopiere nogen kolonner i den nye tabel.</li>    </ul>


## Examples

### Example #1 
Udvid kolonnen [a] i tabellen &lt;code&gt;(\{[a = [aa = 1, bb = 2, cc = 3], b = 2]})&lt;/code&gt; i tre kolonner &#34;aa&#34;, &#34;bb&#34; og &#34;cc&#34;.
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
