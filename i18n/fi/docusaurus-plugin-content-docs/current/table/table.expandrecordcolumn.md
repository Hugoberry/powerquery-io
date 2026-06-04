---
title: Table.ExpandRecordColumn
---

# Table.ExpandRecordColumn


Laajentaa tietuesarakkeen sarakkeisiin kullekin arvolle.


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

Kun annetaan tietueiden `column` syötteessä `table`, luo taulukon, jossa on sarake tietueen kullekin kentälle. Valinnaisesti `newColumnNames` voidaan määrittää, jotta varmistetaan, että uuden taulukon sarakkeilla on yksilöivät nimet.

-   `table`: alkuperäinen taulukko, jossa on laajennettava tietuesarake.
-   `column`: laajennettava sarake.
-   `fieldNames`: luettelo kentistä, jotka laajennetaan taulukon uusiin sarakkeisiin.
-   `newColumnNames`: luettelo sarakkeiden nimistä, jotka annetaan uusille sarakkeille. Uudet sarakkeiden nimiä eivät voi olla uuden taulukon minkään sarakkeen kaksoiskappaleita.


## Examples

### Example #1
Laajenna sarake \[a\] taulukossa `({[a = [aa = 1, bb = 2, cc = 3], b = 2]})` kolmeksi sarakkeeksi, jotka ovat "aa", "bb" ja "cc".
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
