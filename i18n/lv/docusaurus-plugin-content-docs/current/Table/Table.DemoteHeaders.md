---
title: Table.DemoteHeaders
---

# Table.DemoteHeaders


## Description

Kolonnu virsraksti tiek pazemināti līdz pirmajai vērtību rindai.


## Syntax

```powerquery
Table.DemoteHeaders(
    table as table
) as table
```


## Details

Kolonnu virsraksti (t.i., kolonnu nosaukumi) tiek pazemināti līdz pirmajai vērtību rindai. Pēc noklusējuma tiek lietoti šādi kolonnu nosaukumi: Column1, Column2 utt.


## Examples

### Example #1 
Pazeminiet tabulas pirmo vērtību rindu.
```powerquery
Table.DemoteHeaders(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"]
    })
)
```

Result: 
```powerquery
Table.FromRecords({
    [Column1 = "CustomerID", Column2 = "Name", Column3 = "Phone"],
    [Column1 = 1, Column2 = "Bob", Column3 = "123-4567"],
    [Column1 = 2, Column2 = "Jim", Column3 = "987-6543"]
})
```




## Category
Table.Column operations
