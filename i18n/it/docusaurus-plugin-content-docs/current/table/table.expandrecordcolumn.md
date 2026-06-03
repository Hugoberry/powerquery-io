---
title: Table.ExpandRecordColumn
---

# Table.ExpandRecordColumn


Espande una colonna di record in colonne con ciascuno dei valori.


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

Dato `column` di record nell'input `table`, crea una tabella con una colonna per ogni campo del record. Facoltativamente, è possibile specificare `newColumnNames` per garantire nomi univoci per le colonne nella nuova tabella.

-   `table`: tabella originale con la colonna di record da espandere.
-   `column`: colonna da espandere.
-   `fieldNames`: elenco di campi da espandere in colonne nella tabella.
-   `newColumnNames`: elenco di nomi di colonna per specificare le nuove colonne. I nuovi nomi di colonna non possono duplicare alcuna colonna nella nuova tabella.


## Examples

### Example #1
Espandere la colonna \[a\] nella tabella `({[a = [aa = 1, bb = 2, cc = 3], b = 2]})` in 3 colonne "aa", "bb" e "cc".
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
