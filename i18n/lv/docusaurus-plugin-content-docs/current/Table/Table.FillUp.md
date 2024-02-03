---
title: Table.FillUp
---

# Table.FillUp


## Description

Šūnas vērtība tiek izplatīta uz iepriekšējām kolonnas šūnām ar vērtību Null.


## Syntax

```powerquery
Table.FillUp(
    table as table,
    columns as list
) as table
```


## Details

Tiek atgriezta tabula no norādītās <code>table</code>, kur nākamās šūnas vērtība tiek izplatīta uz iepriekš norādītajām šūnām ar vērtību Null norādītajā <code>columns</code>.


## Examples

### Example #1 
Tiek atgriezta tabula ar Null vērtībām kolonnā [Column2], kas aizpildīta ar vērtību, kas norādīta zemāk par vērtību no tabulas.
```powerquery
Table.FillUp(
    Table.FromRecords({
        [Column1 = 1, Column2 = 2],
        [Column1 = 3, Column2 = null],
        [Column1 = 5, Column2 = 3]
    }),
    {"Column2"}
)
```

Result: 
```powerquery
Table.FromRecords({
    [Column1 = 1, Column2 = 2],
    [Column1 = 3, Column2 = 3],
    [Column1 = 5, Column2 = 3]
})
```




## Category
Table.Transformation
