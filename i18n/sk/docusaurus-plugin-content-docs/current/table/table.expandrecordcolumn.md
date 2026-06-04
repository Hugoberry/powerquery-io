---
title: Table.ExpandRecordColumn
---

# Table.ExpandRecordColumn


Rozbalí stĺpec záznamov na stĺpce s každou z hodnôt.


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

S daným stĺpcom `column` záznamov vo vstupe `table` vytvorí tabuľku so stĺpcom pre každé pole v zázname. Voliteľne možno zadať hodnotu `newColumnNames` s cieľom zabezpečiť jedinečné názvy stĺpcov v novej tabuľke.

-   `table`: Pôvodná tabuľka so stĺpcom záznamu, ktorá sa má rozbaliť.
-   `column`: Stĺpec, ktorý sa má rozbaliť.
-   `fieldNames`: Zoznam polí, ktoré sa majú rozbaliť do stĺpcov v tabuľke.
-   `newColumnNames`: Zoznam názvov stĺpcov, ktoré majú poskytnúť nové stĺpce. Nové názvy stĺpcov nemôžu duplikovať žiadny stĺpec v novej tabuľke.


## Examples

### Example #1
Rozbaľte stĺpec \[a\] v tabuľke `({[a = [aa = 1, bb = 2, cc = 3], b = 2]})` do 3 stĺpcov "aa", "bb" a "cc".
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
