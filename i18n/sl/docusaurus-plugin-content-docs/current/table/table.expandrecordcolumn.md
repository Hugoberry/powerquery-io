---
title: Table.ExpandRecordColumn
---

# Table.ExpandRecordColumn


Razširi stolpec zapisov v stolpce z vsako vrednostjo.


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

Za navedeni `column` zapisov v vhodni tabeli `table` ustvari tabelo s stolpcem za vsako polje v zapisu. Če želite, lahko navedete `newColumnNames`, da zagotovite enolična imena za stolpce v novi tabeli.

-   `table`: izvirna tabela s stolpcem zapisa, ki bo razširjen.
-   `column`: stolpec, ki bo razširjen.
-   `fieldNames`: seznam polj, ki bodo razširjena v stolpce v tabeli.
-   `newColumnNames`: seznam imen stolpcev za nove stolpce. Nova imena stolpcev ne smejo biti podvojena za noben stolpec v novi tabeli.


## Examples

### Example #1
Razširite stolpec \[a\] v tabeli `({[a = [aa = 1, bb = 2, cc = 3], b = 2]})` v 3 stolpce"aa","bb"in"cc".
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
