---
title: Table.ExpandRecordColumn
---

# Table.ExpandRecordColumn


Udvider en kolonne over poster i kolonner med de enkelte værdier.


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

Med `column` over poster i inputtet `table` oprettes en tabel med en kolonne for de enkelte felter i posten. Du kan vælge at angive `newColumnNames` for at sikre entydige navne for kolonnerne i den nye tabel.

-   `table`: Den oprindelige tabel med den postkolonne, der skal udvides.
-   `column`: Den kolonne, der skal udvides.
-   `fieldNames`: Den feltliste, der skal udvides i kolonner i tabellen.
-   `newColumnNames`: Den liste over kolonnenavne, der skal overføres til de nye kolonner. De nye kolonnenavne kan ikke kopiere nogen kolonner i den nye tabel.


## Examples

### Example #1
Udvid kolonnen \[a\] i tabellen `({[a = [aa = 1, bb = 2, cc = 3], b = 2]})` i tre kolonner "aa", "bb" og "cc".
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
