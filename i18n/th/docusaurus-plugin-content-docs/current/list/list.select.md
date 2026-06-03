---
title: List.Select
---

# List.Select


ส่งกลับรายการของค่าที่ตรงกับเงื่อนไข


## Syntax

```powerquery
List.Select(
    list as list,
    selection as function
) as list
```


## Remarks

ส่งกลับค่าจากรายการที่ระบุที่ตรงกับเงื่อนไขการเลือก

-   `list`: รายการที่จะตรวจสอบ
-   `selection`: ฟังก์ชันที่กำหนดค่าที่จะเลือก


## Examples

### Example #1
ค้นหาค่าในรายการ \{1, -3, 4, 9, -2\} ที่มากกว่า 0
```powerquery
List.Select({1, -3, 4, 9, -2}, each _ > 0)
```

Result: 
```powerquery
{1, 4, 9}
```


### Example #2
เลือกวันที่จากรายการที่ตรงกับวันเสาร์หรือวันอาทิตย์
```powerquery
let
    dates = {
        #date(2025, 10, 20),  // Monday
        #date(2025, 10, 21),  // Tuesday
        #date(2025, 10, 25),  // Saturday
        #date(2025, 10, 26),  // Sunday
        #date(2025, 10, 27)   // Monday
    },
    weekendDates = List.Select(
        dates,
        each Date.DayOfWeek(_, Day.Monday) >= 5
    )
in
    weekendDates
```

Result: 
```powerquery
{
    #date(2025, 10, 25),
    #date(2025, 10, 26)
}
```


### Example #3
แสดงตารางของลูกค้าที่ใช้งานอยู่ซึ่งมียอดซื้อเกิน $100
```powerquery
let
    customers = {
        [Name = "Alice", Status = "Active", Purchases = 150],
        [Name = "Bob", Status = "Inactive", Purchases = 200],
        [Name = "Carol", Status = "Active", Purchases = 90],
        [Name = "Dave", Status = "Active", Purchases = 120]
    },
    highValueActiveCustomers = List.Select(
        customers,
        each [Status] = "Active" and [Purchases] > 100
    ),
    resultTable = Table.FromRecords(
        highValueActiveCustomers,
        type table [Name = text, Status = text, Purchases = number]
    )
in
    resultTable
```

Result: 
```powerquery
#table(type table[Name = text, Status = text, Purchases = number],
{
    {"Alice", "Active", 150},
    {"Dave", "Active", 120}
})
```




## Category
List.Selection
