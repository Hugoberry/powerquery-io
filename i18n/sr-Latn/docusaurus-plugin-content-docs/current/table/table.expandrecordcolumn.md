---
title: Table.ExpandRecordColumn
---

# Table.ExpandRecordColumn


Proširuje kolonu zapisa u kolone sa svakom vrednošću.


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

Ako je dato `column` zapisa u unosu `table`, kreira tabelu sa kolonom za svako polje u zapisu. Opcionalno, `newColumnNames` može da bude navedeno da bi imena kolona u novoj tabeli sigurno bila jedinstvena.

-   `table`: Prvobitna tabela sa kolonom zapisa koja se proširuje.
-   `column`: Kolona koja se proširuje.
-   `fieldNames`: Lista polja koja se proširuju u kolone u tabeli.
-   `newColumnNames`: Lista sa imenima kolona koja treba dati novim kolonama. Imena novih kolona ne mogu da dupliraju nijednu kolonu iz nove tabele.


## Examples

### Example #1
Proširenje kolone \[a\] u tabeli `({[a = [aa = 1, bb = 2, cc = 3], b = 2]})` u 3 kolone: „aa“, „bb“ i „cc“.
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
