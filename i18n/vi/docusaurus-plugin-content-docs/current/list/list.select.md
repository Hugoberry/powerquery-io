---
title: List.Select
---

# List.Select


Trả về một danh sách giá trị phù hợp với điều kiện.


## Syntax

```powerquery
List.Select(
    list as list,
    selection as function
) as list
```


## Remarks

Trả về các giá trị từ danh sách được chỉ định khớp với điều kiện lựa chọn.

-   `list`: Danh sách cần kiểm tra.
-   `selection`: Hàm xác định các giá trị cần chọn.


## Examples

### Example #1
Tìm các giá trị trong danh sách \{1, -3, 4, 9, -2\} lớn hơn 0.
```powerquery
List.Select({1, -3, 4, 9, -2}, each _ > 0)
```

Result: 
```powerquery
{1, 4, 9}
```


### Example #2
Chọn các ngày trong danh sách rơi vào Thứ Bảy hoặc Chủ Nhật.
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
Hiển thị một bảng gồm các khách hàng đang hoạt động với tổng giá trị mua hàng ở mức trên 100 đô la.
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
