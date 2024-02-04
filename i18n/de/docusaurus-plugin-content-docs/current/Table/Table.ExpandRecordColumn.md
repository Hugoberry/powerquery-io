---
title: Table.ExpandRecordColumn
---

# Table.ExpandRecordColumn


## Description

Erweitert eine Spalte mit Datensätzen in Spalten mit den einzelnen Werten.


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

Erstellt auf der Grundlage des Elements vom Typ "<code>column</code>" mit Datensätzen aus der Eingabe "<code>table</code>" eine Tabelle mit Spalten für die einzelnen Felder des Datensatzes. Optional kann durch Angabe von "<code>newColumnNames</code>" die Verwendung eindeutiger Spaltennamen in der neuen Tabelle sichergestellt werden.    <ul>        <li><code>table</code>: Die ursprüngliche Tabelle mit der zu erweiternden Datensatzspalte. </li>        <li><code>column</code>: Die zu erweiternde Spalte.</li>        <li><code>fieldNames</code>: Die Liste mit Feldern, die zu Spalten in der Tabelle erweitert werden sollen.</li>        <li><code>newColumnNames</code>: Die Liste mit den Spaltennamen für die neuen Spalten. Die neuen Spaltennamen dürfen nicht zu Duplikaten der Spalten in der neuen Tabelle führen.</li>    </ul>


## Examples

### Example #1 
Erweitert die Spalte &#34;[a]&#34; in der Tabelle &lt;code&gt;(\{[a = [aa = 1, bb = 2, cc = 3], b = 2]})&lt;/code&gt; zu drei Spalten: &#34;aa&#34;, &#34;bb&#34; und &#34;cc&#34;.
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
