---
title: Table.ExpandRecordColumn
---

# Table.ExpandRecordColumn


Breidt een kolom met records met elk van de waarden uit naar kolommen.


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

Maakt aan de hand van de <code>column</code> met records in de invoer <code>table</code> een tabel met een kolom voor elk veld in de record. Optioneel kan <code>newColumnNames</code> worden opgegeven om ervoor te zorgen dat de namen voor de kolommen in de nieuwe tabel unieke namen zijn.    <ul>        <li><code>table</code>: De oorspronkelijke tabel met de recordkolom die moet worden uitgebreid. </li>        <li><code>column</code>: De kolom die moet worden uitgebreid.</li>        <li><code>fieldNames</code>: De lijst met velden die moet worden uitgebreid in kolommen in de tabel.</li>        <li><code>newColumnNames</code>: De lijst met kolomnamen voor de nieuwe kolommen. De nieuwe kolomnamen mogen niet voor andere kolommen in de nieuwe tabel worden gebruikt.</li>    </ul>


## Examples

### Example #1 
Kolom [a] in de tabel &lt;code&gt;(\{[a = [aa = 1, bb = 2, cc = 3], b = 2]})&lt;/code&gt; uitbreiden naar drie kolommen &#34;aa&#34;, &#34;bb&#34; en &#34;cc&#34;.
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
