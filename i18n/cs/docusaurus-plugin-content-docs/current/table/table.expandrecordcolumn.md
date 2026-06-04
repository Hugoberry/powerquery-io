---
title: Table.ExpandRecordColumn
---

# Table.ExpandRecordColumn


Rozšíří sloupec záznamů na sloupce pomocí jednotlivých hodnot.


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

Na základě sloupce `column` záznamů vstupní tabulky `table` vytvoří tabulku pro každé pole záznamu. Volitelně může být určen seznam `newColumnNames`, který zajistí jedinečnost názvů sloupců v nové tabulce.

-   `table`: Původní tabulka se sloupcem záznamu, který se má rozšířit
-   `column`: Sloupec, který se má rozšířit
-   `fieldNames`: Seznam polí, která se mají rozšířit na sloupce tabulky
-   `newColumnNames`: Seznam názvů sloupců, které mají být dány novým sloupcům Názvy nových sloupců nemohou duplikovat žádné sloupce v nové tabulce.


## Examples

### Example #1
Rozšíří sloupec \[a\] tabulky `({[a = [aa = 1, bb = 2, cc = 3], b = 2]})` na tři sloupce aa, bb a cc.
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
