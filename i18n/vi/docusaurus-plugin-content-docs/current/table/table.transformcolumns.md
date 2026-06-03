---
title: Table.TransformColumns
---

# Table.TransformColumns


Chuyển đổi các giá trị của một hoặc nhiều cột.


## Syntax

```powerquery
Table.TransformColumns(
    table as table,
    transformOperations as list,
    optional defaultTransformation as function,
    optional missingField as MissingField.Type
) as table
```


## Remarks

Chuyển đổi bảng được chỉ định bằng cách áp dụng từng thao tác trên cột trong danh sách.

-   `table`: Bảng cần chuyển đổi.
-   `transformOperations`: Các phép chuyển đổi cần thực hiện trên bảng. Định dạng của tham số này là \{ column name, transformation \} hoặc \{ column name, transformation, new column type \}.
-   `defaultTransformation`: (Tùy chọn) Phép chuyển đổi mặc định áp dụng cho tất cả các cột không được liệt kê trong `transformOperations`.
-   `missingField`: (Tùy chọn) Chỉ định hành động dự kiến đối với các giá trị bị thiếu. Nếu một cột được liệt kê trong `transformOperations` không tồn tại, lỗi sẽ xuất hiện (`MissingField.Error`), trừ phi tham số này chỉ định một giá trị thay thế. Sử dụng một trong các giá trị sau:
    -   `MissingField.UseNull`: Bất kỳ trường nào bị thiếu sẽ được đưa vào dưới dạng giá trị `null`.
    -   `MissingField.Ignore`: Mọi trường bị thiếu được bỏ qua.


## Examples

### Example #1
Chuyển đổi các giá trị văn bản trong cột \[A\] thành giá trị số và các giá trị số trong cột \[B\] thành giá trị văn bản.
```powerquery
Table.TransformColumns(
    Table.FromRecords({
        [A = "1", B = 2],
        [A = "5", B = 10]
    }),
    {
        {"A", Number.FromText},
        {"B", Text.From}
    }
)
```

Result: 
```powerquery
Table.FromRecords({
    [A = 1, B = "2"],
    [A = 5, B = "10"]
})
```


### Example #2
Chuyển đổi các giá trị số trong cột \[X\] bị thiếu thành giá trị văn bản, đặt mặc định thành `null` cho các cột không tồn tại.
```powerquery
Table.TransformColumns(
    Table.FromRecords({
        [A = "1", B = 2],
        [A = "5", B = 10]
    }),
    {"X", Number.FromText},
    null,
    MissingField.UseNull
)
```

Result: 
```powerquery
Table.FromRecords({
    [A = "1", B = 2, X = null],
    [A = "5", B = 10, X = null]
})
```


### Example #3
Tăng các giá trị số trong cột \[B\] và chuyển đổi chúng thành giá trị văn bản và chuyển đổi tất cả các cột khác thành số.
```powerquery
Table.TransformColumns(
    Table.FromRecords({
        [A = "1", B = 2],
        [A = "5", B = 10]
    }),
    {"B", each Text.From(_ + 1), type text},
    Number.FromText
)
```

Result: 
```powerquery
Table.FromRecords({
    [A = 1, B = "3"],
    [A = 5, B = "11"]
})
```


### Example #4
Chuyển các tác vụ bảo trì theo lịch diễn ra vào ngày nghỉ lễ ở Hoa Kỳ sang ngày tiếp theo, hoặc nếu ngày lễ rơi vào thứ Sáu thì chuyển sang thứ Hai kế tiếp.
```powerquery
let
    MaintenanceSchedule = #table(type table [Task = text, Date = date],
    {
        {"HVAC Check", #date(2025, 7, 10)},         // Not a holiday
        {"Window Washing", #date(2025, 9, 1)},      // Labor Day
        {"Fire Drill", #date(2025, 9, 17)},         // Not a holiday
        {"Light Replacement", #date(2025, 11, 27)}  // Thanksgiving
    }),
    USHolidays = {
        #date(2025, 1, 1),   // New Year's Day
        #date(2025, 7, 4),   // Independence Day
        #date(2025, 9, 1),   // Labor Day
        #date(2025, 11, 27), // Thanksgiving
        #date(2025, 12, 25)  // Christmas
    },
    AdjustedSchedule = Table.TransformColumns(
        MaintenanceSchedule,
        {{"Date", each if List.Contains(USHolidays, _) then
            if Date.DayOfWeek(_, Day.Sunday) = 5 then
                Date.AddDays(_, 3)     // Friday to Monday
            else
                Date.AddDays(_, 1)     // Other to next day
        else _, type date}}
    )
in
    AdjustedSchedule
```

Result: 
```powerquery
#table(type table[Task = text, Date = date],
{
    {"HVAC Check", #date(2025, 7, 10)},
    {"Window Washing", #date(2025, 9, 2)},
    {"Fire Drill", #date(2025, 9, 17)},
    {"Light Replacement", #date(2025, 11, 28)}
})
```




## Category
Table.Transformation
