---
title: Table.ExpandRecordColumn
---

# Table.ExpandRecordColumn


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


## Remarks

Ievades `table` norādot ierakstu `column`, tiek izveidota tabula ar kolonnu katram ieraksta laukam. Pēc izvēles var norādīt `newColumnNames`, lai nodrošinātu unikālus kolonnu nosaukumus jaunajā tabulā.

-   `table`: sākotnējā tabula ar izvēršamo ierakstu kolonnu.
-   `column`: izvēršamā kolonna.
-   `fieldNames`: lauku saraksts, ko tabulā izvērst kolonnās.
-   `newColumnNames`: jaunajām kolonnām piešķiramo kolonnu nosaukumu saraksts. Jaunie kolonnu nosaukumi nevar dublēt nevienu kolonnu jaunajā tabulā.


## Examples

### Example #1
Kolonnu \[a\] tabulā `({[a = [aa = 1, bb = 2, cc = 3], b = 2]})` izvērsiet 3 kolonnās: aa, bb un cc.
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
