---
title: Table.ExpandRecordColumn
---

# Table.ExpandRecordColumn


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


## Remarks

Ţinând cont de `column` de înregistrări în datele introduse `table`, creează un tabel cu o coloană pentru fiecare câmp din înregistrare. Opţional, `newColumnNames` poate fi specificat pentru a asigura nume unice pentru coloanele din noul tabel.

-   `table`: Tabelul original cu coloana de înregistrare de extins.
-   `column`: Coloana de extins.
-   `fieldNames`: Lista de câmpuri de extins în coloanele din tabel.
-   `newColumnNames`: Lista de nume de coloane de dat noilor coloane. Numele noilor coloane nu pot dubla nicio coloană din noul tabel.


## Examples

### Example #1
Extindeţi coloana \[a\] din tabelul `({[a = [aa = 1, bb = 2, cc = 3], b = 2]})` în 3 coloane „aa”, „bb” şi „cc”.
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
