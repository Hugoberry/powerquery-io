---
title: Table.ExpandRecordColumn
---

# Table.ExpandRecordColumn


## Description

Kibontja a rekordok oszlopát értékenként egy oszlopra.


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

Adott a rekordok <code>column</code> oszlopa <code>table</code> bemeneteként, létrehoz egy táblát a rekord minden egyes mezőjéhez egy oszloppal. Ha szükséges, megadhatja a(z) <code>newColumnNames</code> paramétert, hogy egyedi neveket biztosítson az új tábla oszlopainak.    <ul>        <li><code>table</code>: Az eredeti tábla a rekordok kibontandó oszlopával. </li>        <li><code>column</code>: A kibontandó oszlop.</li>        <li><code>fieldNames</code>: Az oszlopokba kibontandó mezők listája a táblában.</li>        <li><code>newColumnNames</code>: Az új oszlopoknak adandó oszlopnevek listája. Az új oszlopnevek nem egyezhetnek meg az új tábla egyik oszlopnevével sem.</li>    </ul>


## Examples

### Example #1 
A(z) [a] oszlop kibontása a &lt;code&gt;(\{[a = [aa = 1, bb = 2, cc = 3], b = 2]})&lt;/code&gt; tábla „aa”, „bb” és „cc” nevű 3 oszlopába.
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
