---
title: Table.ExpandRecordColumn
---

# Table.ExpandRecordColumn


## Description

Ierakstu kolonna tiek izvērsta kolonnās, norādot katru vērtību.


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

Ievades <code>table</code> norādot ierakstu <code>column</code>, tiek izveidota tabula ar kolonnu katram ieraksta laukam. Pēc izvēles var norādīt <code>newColumnNames</code>, lai nodrošinātu unikālus kolonnu nosaukumus jaunajā tabulā.    <ul>        <li><code>table</code>: sākotnējā tabula ar izvēršamo ierakstu kolonnu. </li>        <li><code>column</code>: izvēršamā kolonna.</li>        <li><code>fieldNames</code>: lauku saraksts, ko tabulā izvērst kolonnās.</li>        <li><code>newColumnNames</code>: jaunajām kolonnām piešķiramo kolonnu nosaukumu saraksts. Jaunie kolonnu nosaukumi nevar dublēt nevienu kolonnu jaunajā tabulā.</li>    </ul>


## Examples

### Example #1 
Kolonnu [a] tabulā &lt;code&gt;(\{[a = [aa = 1, bb = 2, cc = 3], b = 2]})&lt;/code&gt; izvērsiet 3 kolonnās: aa, bb un cc.
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
