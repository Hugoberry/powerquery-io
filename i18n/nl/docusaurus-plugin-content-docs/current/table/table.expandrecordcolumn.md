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

Maakt aan de hand van de `column` met records in de invoer `table` een tabel met een kolom voor elk veld in de record. Optioneel kan `newColumnNames` worden opgegeven om ervoor te zorgen dat de namen voor de kolommen in de nieuwe tabel unieke namen zijn.

-   `table`: De oorspronkelijke tabel met de recordkolom die moet worden uitgebreid.
-   `column`: De kolom die moet worden uitgebreid.
-   `fieldNames`: De lijst met velden die moet worden uitgebreid in kolommen in de tabel.
-   `newColumnNames`: De lijst met kolomnamen voor de nieuwe kolommen. De nieuwe kolomnamen mogen niet voor andere kolommen in de nieuwe tabel worden gebruikt.


## Examples

### Example #1
Kolom \[a\] in de tabel `({[a = [aa = 1, bb = 2, cc = 3], b = 2]})` uitbreiden naar drie kolommen "aa", "bb" en "cc".
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
