---
title: Table.TransformColumns
---

# Table.TransformColumns


แปลงค่าของคอลัมน์อย่างน้อยหนึ่งคอลัมน์


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

แปลงตารางที่ระบุโดยนำแต่ละการดำเนินการของคอลัมน์ไปใช้ในรายการ

-   `table`: ตารางที่จะแปลง
-   `transformOperations`: การแปลงที่จะทำกับตาราง รูปแบบของพารามิเตอร์นี้ \{ column name, transformation \} หรือ \{ column name, transformation, new column type \}
-   `defaultTransformation`: (ระบุหรือไม่ก็ได้) การแปลงเริ่มต้นที่ใช้กับคอลัมน์ทั้งหมดไม่ได้แสดงอยู่ใน `transformOperations`
-   `missingField`: (ระบุหรือไม่ก็ได้) ระบุการดำเนินการที่คาดไว้สำหรับค่าที่หายไป ถ้าไม่มีคอลัมน์ที่แสดงอยู่ใน `transformOperations` จะเกิดข้อผิดพลาด (`MissingField.Error`) เว้นแต่พารามิเตอร์นี้จะระบุทางเลือก ใช้ค่าใดค่าหนึ่งต่อไปนี้:
    -   `MissingField.UseNull`: เขตข้อมูลที่หายไปรวมเป็นค่า `null`
    -   `MissingField.Ignore`: เขตข้อมูลใดที่หายไปจะถูกละเว้น


## Examples

### Example #1
แปลงค่าข้อความในคอลัมน์ \[A\] เป็นค่าตัวเลข และค่าตัวเลขในคอลัมน์ \[B\] เป็นค่าข้อความ
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
แปลงค่าตัวเลขในคอลัมน์ \[X\] ที่หายไปเป็นค่าข้อความ โดยค่าเริ่มต้นจะเป็น `null` สำหรับคอลัมน์ที่ไม่มีอยู่
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
เพิ่มค่าตัวเลขในคอลัมน์ \[B\] และแปลงเป็นค่าข้อความ และแปลงคอลัมน์อื่นๆ ทั้งหมดเป็นตัวเลข
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
ย้ายงานบำรุงรักษาตามกำหนดการที่เกิดขึ้นในวันหยุดของสหรัฐอเมริกาไปยังวันถัดไป หรือถ้าวันหยุดเกิดขึ้นในวันศุกร์ ให้ย้ายไปยังวันจันทร์ถัดไป
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
