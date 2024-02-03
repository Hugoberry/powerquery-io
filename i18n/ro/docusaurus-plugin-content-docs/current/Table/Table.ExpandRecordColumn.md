---
title: Table.ExpandRecordColumn
---

# Table.ExpandRecordColumn


## Description

Extinde o coloană de înregistrări în coloane cu fiecare dintre valori.


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

Ţinând cont de <code>column</code> de înregistrări în datele introduse <code>table</code>, creează un tabel cu o coloană pentru fiecare câmp din înregistrare. Opţional, <code>newColumnNames</code> poate fi specificat pentru a asigura nume unice pentru coloanele din noul tabel.    <ul>        <li><code>table</code>: Tabelul original cu coloana de înregistrare de extins. </li>        <li><code>column</code>: Coloana de extins.</li>        <li><code>fieldNames</code>: Lista de câmpuri de extins în coloanele din tabel.</li>        <li><code>newColumnNames</code>: Lista de nume de coloane de dat noilor coloane. Numele noilor coloane nu pot dubla nicio coloană din noul tabel.</li>    </ul>


## Examples

### Example #1 
Extindeţi coloana [a] din tabelul &lt;code&gt;(\{[a = [aa = 1, bb = 2, cc = 3], b = 2]})&lt;/code&gt; în 3 coloane „aa”, „bb” şi „cc”.
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
