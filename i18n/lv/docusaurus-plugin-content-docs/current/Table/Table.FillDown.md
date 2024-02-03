---
title: Table.FillDown
---

# Table.FillDown


## Description

Iepriekšējās šūnas vērtība tiek izplatīta uz zemāk esošajām kolonnas šūnām ar vērtību Null.


## Syntax

```powerquery
Table.FillDown(
    table as table,
    columns as list
) as table
```


## Details

Tiek atgriezta tabula no norādītās <code>table</code>, kur iepriekšējās šūnas vērtība tiek izplatīta uz tālāk norādītajām šūnām ar vērtību Null norādītajā <code>columns</code>.


## Examples

### Example #1 
Tiek atgriezta tabula ar Null vērtībām kolonnā [Place], kas aizpildīta ar vērtību, kas norādīta iepriekš par vērtību no tabulas.
```powerquery
Table.FillDown(
    Table.FromRecords({
        [Place = 1, Name = "Bob"],
        [Place = null, Name = "John"],
        [Place = 2, Name = "Brad"],
        [Place = 3, Name = "Mark"],
        [Place = null, Name = "Tom"],
        [Place = null, Name = "Adam"]
    }),
    {"Place"}
)
```

Result: 
```powerquery
Table.FromRecords({
    [Place = 1, Name = "Bob"],
    [Place = 1, Name = "John"],
    [Place = 2, Name = "Brad"],
    [Place = 3, Name = "Mark"],
    [Place = 3, Name = "Tom"],
    [Place = 3, Name = "Adam"]
})
```




## Category
Table.Transformation
