---
title: Table.ExpandRecordColumn
---

# Table.ExpandRecordColumn


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


## Remarks

Adott a rekordok `column` oszlopa `table` bemeneteként, létrehoz egy táblát a rekord minden egyes mezőjéhez egy oszloppal. Ha szükséges, megadhatja a(z) `newColumnNames` paramétert, hogy egyedi neveket biztosítson az új tábla oszlopainak.

-   `table`: Az eredeti tábla a rekordok kibontandó oszlopával.
-   `column`: A kibontandó oszlop.
-   `fieldNames`: Az oszlopokba kibontandó mezők listája a táblában.
-   `newColumnNames`: Az új oszlopoknak adandó oszlopnevek listája. Az új oszlopnevek nem egyezhetnek meg az új tábla egyik oszlopnevével sem.


## Examples

### Example #1
A(z) \[a\] oszlop kibontása a `({[a = [aa = 1, bb = 2, cc = 3], b = 2]})` tábla „aa”, „bb” és „cc” nevű 3 oszlopába.
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
