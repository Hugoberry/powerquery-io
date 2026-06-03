---
title: List.Positions
---

# List.Positions


ส่งกลับรายการออฟเซตสำหรับค่าที่ป้อน


## Syntax

```powerquery
List.Positions(
    list as list
) as list
```


## Remarks

ส่งกลับรายการออฟเซตสำหรับรายการอินพุตที่ระบุ

-   `list`: รายการอินพุต

เมื่อใช้ `List.Transform` เพื่อเปลี่ยนแปลงรายการ สามารถใช้รายการของตำแหน่งเพื่อให้การเข้าถึงการแปลงตำแหน่งได้


## Examples

### Example #1
หาออฟเซตของค่าในรายการ \{1, 2, 3, 4, null, 5\}
```powerquery
List.Positions({1, 2, 3, 4, null, 5})
```

Result: 
```powerquery
{0, 1, 2, 3, 4, 5}
```


### Example #2
สร้างตารางที่กำหนด ID ให้กับลูกค้าแต่ละรายตามตำแหน่งของลูกค้าในรายการ
```powerquery
let
    customers = {"Alice", "Bob", "Charlie", "Diana"},
    resultTable =
        Table.FromRecords(
            List.Transform(
                List.Positions(customers),
                each [
                    IDNumber = _ + 1,   // Make it 1-based
                    CustomerName = customers{_}
                ]
            ),
            type table [IDNumber = Int64.Type, CustomerName = text]
        )
in
    resultTable
```

Result: 
```powerquery
#table (type table[IDNumber = Int64.Type, CustomerName = text],
{
    {1, "Alice"},
    {2, "Bob"},
    {3, "Charlie"},
    {4, "Diana"}
})
```




## Category
List.Selection
