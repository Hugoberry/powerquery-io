---
title: Table.RemoveMatchingRows
---

# Table.RemoveMatchingRows


Loại bỏ tất cả những lần xuất hiện của các hàng được chỉ định khỏi bảng.


## Syntax

```powerquery
Table.RemoveMatchingRows(
    table as table,
    rows as list,
    optional equationCriteria as any
) as table
```


## Remarks

Loại bỏ tất cả lần xuất hiện của các hàng được chỉ định khỏi bảng.

-   `table`: Bảng muốn tìm kiếm.
-   `rows`: Danh sách chứa thông tin về các hàng cần loại bỏ.
-   `equationCriteria`: (Không bắt buộc) Chỉ định cách xác định trường hợp bằng nhau khi so sánh các giá trị. Tham số này có thể là hàm chọn khóa, hàm so sánh hoặc danh sách các cột trong bảng dùng để so sánh các hàng.


## Examples

### Example #1
Loại bỏ mọi hàng có \[a = 1\] khỏi bảng được chỉ định.
```powerquery
Table.RemoveMatchingRows(
    Table.FromRecords({
        [a = 1, b = 2],
        [a = 3, b = 4],
        [a = 1, b = 6]
    }),
    {[a = 1]},
    "a"
)
```

Result: 
```powerquery
Table.FromRecords({[a = 3, b = 4]})
```


### Example #2
Loại bỏ các đơn hàng đã hủy, không phân biệt chữ hoa chữ thường.
```powerquery
let
    CurrentOrders = #table(type table[OrderID = number, Product = text, Quantity = number],
    {
        {101, "Widget", 5},
        {102, "Gadget", 3},
        {103, "Widget", 5}
    }),
    CanceledOrders = {
        [OrderID = 103, Product = "widget", Quantity = 5]
    },
    FilteredOrders = Table.RemoveMatchingRows(CurrentOrders, CanceledOrders, Comparer.OrdinalIgnoreCase)
in
    FilteredOrders
```

Result: 
```powerquery
#table(type table[OrderID = number, Product = text, Quantity = number],
{
    {101, "Widget", 5},
    {102, "Gadget", 3}
})
```


### Example #3
Loại bỏ mọi tác vụ bảo trì rơi vào ngày nghỉ lễ tại Hoa Kỳ.
```powerquery
let
    MaintenanceSchedule = #table(type table [Task = text, Date = date],
    {
        {"HVAC Check", #date(2025, 7, 10)},              // Not a holiday
        {"Window Washing", #date(2025, 9, 1)},           // Labor Day
        {"Fire Drill", #date(2025, 9, 17)},              // Not a holiday
        {"Light Bulb Replacement", #date(2025, 11, 27)}  // Thanksgiving
    }),

    USHolidays = {
        [Date = #date(2025, 1, 1)],   // New Year's Day
        [Date = #date(2025, 7, 4)],   // Independence Day
        [Date = #date(2025, 9, 1)],   // Labor Day
        [Date = #date(2025, 11, 27)], // Thanksgiving
        [Date = #date(2025, 12, 25)]  // Christmas
    },

    FilteredSchedule = Table.RemoveMatchingRows(
        MaintenanceSchedule,
        USHolidays,
        {"Date"}
    )
in
    FilteredSchedule
```

Result: 
```powerquery
#table(type table[Task = text, Date = date],
{
    {"HVAC Check", #date(2025, 7, 10)},
    {"Fire Drill", #date(2025, 9, 17)}
})
```




## Category
Table.Membership
