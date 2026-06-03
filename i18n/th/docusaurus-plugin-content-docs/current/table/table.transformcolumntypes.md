---
title: Table.TransformColumnTypes
---

# Table.TransformColumnTypes


นำการแปลงชนิดฟอร์ม \{ column, type \} ไปใช้โดยใช้ Culture ที่ระบุ


## Syntax

```powerquery
Table.TransformColumnTypes(
    table as table,
    typeTransformations as list,
    optional culture as any
) as table
```


## Remarks

ส่งคืนตารางโดยใช้การแปลงข้อมูลกับคอลัมน์ที่ระบุ โดยสามารถระบุรูปแบบเพิ่มเติมได้

-   `table`: ตารางข้อมูลป้อนเข้าที่จะทำการแปลง
-   `typeTransformations`: การแปลงประเภทที่จะนำไปใช้ รูปแบบสำหรับการแปลงแต่ละรายการคือ \{ column name, type value \} รายการการแปลงสามารถใช้เพื่อเปลี่ยนประเภทของคอลัมน์มากกว่าหนึ่งคอลัมน์ในคราวเดียว หากคอลัมน์นั้นไม่มีอยู่ ระบบจะแสดงข้อผิดพลาด
-   `culture`: (ไม่บังคับ) รูปแบบที่จะใช้เมื่อแปลงประเภทคอลัมน์ (ตัวอย่างเช่น "en-US") หากมีการระบุเรกคอร์ดสำหรับ `culture` เรกคอร์ดนั้นสามารถมีฟิลด์ต่อไปนี้ได้:
    -   `Culture`: รูปแบบที่จะใช้เมื่อแปลงประเภทคอลัมน์ (ตัวอย่างเช่น "en-US")
    -   `MissingField`: หากคอลัมน์นั้นไม่มีอยู่ ระบบจะแจ้งข้อผิดพลาด เว้นแต่ว่าเขตข้อมูลนั้นจะมีพฤติกรรมอื่นให้เลือกใช้ (ตัวอย่างเช่น `MissingField.UseNull` or `MissingField.Ignore`)

ค่าประเภทในพารามิเตอร์ `typeTransformations` สามารถเป็น `any` ประเภท `number` ทั้งหมด, `text`, ประเภท `date` ทั้งหมด, `time`, `datetime`, `datetimezone`, และประเภท `duration`, `logical` หรือ `binary` ประเภท `list`, `record`, `table` หรือ `function` ไม่ถูกต้องสำหรับพารามิเตอร์นี้  
  
สำหรับแต่ละคอลัมน์ที่ระบุไว้ใน `typeTransformations` โดยปกติแล้วจะใช้เมธอด ".From" ที่สอดคล้องกับค่าประเภทที่ระบุเพื่อทำการแปลงข้อมูล ตัวอย่างเช่น หากมีการกำหนดค่าประเภท `Currency.Type` ให้กับคอลัมน์ ฟังก์ชันการแปลง `Currency.From` จะถูกนำไปใช้กับแต่ละค่าในคอลัมน์นั้น


## Examples

### Example #1
แปลงค่าตัวเลขในคอลัมน์แรกเป็นค่าข้อความ
```powerquery
let
    Source = #table(type table [a = number, b = number],
    {
        {1, 2},
        {3, 4}
    }),
    #"Transform Column" = Table.TransformColumnTypes(
        Source,
        {"a", type text}
    )
in
    #"Transform Column"
```

Result: 
```powerquery
#table(type table [a = text, b = number],
{
    {"1", 2},
    {"3", 4}
})
```


### Example #2
แปลงวันที่ในตารางเป็นข้อความภาษาฝรั่งเศสที่เทียบเท่ากัน
```powerquery
let
    Source = #table(type table [Company ID = text, Country = text, Date = date],
    {
        {"JS-464", "USA", #date(2024, 3, 24)},
        {"LT-331", "France", #date(2024, 10, 5)},
        {"XE-100", "USA", #date(2024, 5, 21)},
        {"RT-430", "Germany", #date(2024, 1,18)},
        {"LS-005", "France", #date(2023, 12, 31)},
        {"UW-220", "Germany", #date(2024, 2, 25)}
    }),
    #"Transform Column" = Table.TransformColumnTypes(
        Source,
        {"Date", type text},
        "fr-FR"
    )
in
    #"Transform Column"
```

Result: 
```powerquery
#table(type table [Company ID = text, Country = text, Date = text],
{
    {"JS-464", "USA", "24/03/2024"},
    {"LT-331", "France", "05/10/2024"},
    {"XE-100", "USA", "21/05/2024"},
    {"RT-430", "Germany", "18/01/2024"},
    {"LS-005", "France", "31/12/2023"},
    {"UW-220", "Germany", "25/02/2024"}
})
```


### Example #3
แปลงวันที่ในตารางเป็นข้อความภาษาเยอรมันที่เทียบเท่ากัน และค่าในตารางเป็นเปอร์เซ็นต์
```powerquery
let
    Source = #table(type table [Date = date, Customer ID = text, Value = number],
    {
        {#date(2024, 3, 12), "134282", .24368},
        {#date(2024, 5, 30), "44343", .03556},
        {#date(2023, 12, 14), "22", .3834}
    }),
    #"Transform Columns" = Table.TransformColumnTypes(
        Source,
        {{"Date", type text}, {"Value", Percentage.Type}},
        "de-DE")
in
    #"Transform Columns"
```

Result: 
```powerquery
#table(type table [Date = text, Customer ID = text, Value = Percentage.Type],
{
    {"12.03.2024", "134282", .24368},
    {"30.05.2024", "44343", .03556},
    {"14.12.2023", "22", .3834}
})
```


### Example #4
นำการแปลงไปใช้กับค่าระเบียนสำหรับ `culture`
```powerquery
let
    Source = #table(type table [Company ID = text, Country = text, Date = date],
    {
        {"JS-464", "USA", #date(2024, 3, 24)},
        {"LT-331", "France", #date(2024, 10, 5)},
        {"XE-100", "USA", #date(2024, 5, 21)},
        {"RT-430", "Germany", #date(2024, 1,18)},
        {"LS-005", "France", #date(2023, 12, 31)},
        {"UW-220", "Germany", #date(2024, 2, 25)}
    }),
    #"Transform Column" = Table.TransformColumnTypes(
        Source,
        {{"Date", type text}, {"NewColumn", type number}},
        [Culture="fr-FR", MissingField=MissingField.UseNull]
    )
in
    #"Transform Column"
```

Result: 
```powerquery
#table(type table [Company ID = text, Country = text, Date = text, NewColumn = number],
{
    {"JS-464", "USA", "24/03/2024", null},
    {"LT-331", "France", "05/10/2024", null},
    {"XE-100", "USA", "21/05/2024", null},
    {"RT-430", "Germany", "18/01/2024", null},
    {"LS-005", "France", "31/12/2023", null},
    {"UW-220", "Germany", "25/02/2024", null}
})
```




## Category
Table.Transformation
