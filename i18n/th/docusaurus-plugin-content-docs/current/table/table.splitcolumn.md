---
title: Table.SplitColumn
---

# Table.SplitColumn


แยกคอลัมน์ที่ระบุเป็นชุดคอลัมน์เพิ่มเติมโดยใช้ฟังก์ชันตัวแยกที่ระบุ


## Syntax

```powerquery
Table.SplitColumn(
    table as table,
    sourceColumn as text,
    splitter as function,
    optional columnNamesOrNumber as any,
    optional default as any,
    optional extraColumns as any
) as table
```


## Remarks

แยกคอลัมน์ที่ระบุออกเป็นชุดของคอลัมน์เพิ่มเติมโดยใช้ฟังก์ชันตัวแบ่งที่ระบุ

-   `table`: ตารางที่มีคอลัมน์ที่จะใช้ในการแยก
-   `sourceColumn`: ชื่อของคอลัมน์ที่จะใช้ในการแยก
-   `splitter`: ฟังก์ชันตัวแยกใช้สำหรับแยกคอลัมน์ (ตัวอย่างเช่น `Splitter.SplitTextByDelimiter` หรือ `Splitter.SplitTextByPosition`)
-   `columnNamesOrNumber`: ระบุรายชื่อคอลัมน์ใหม่ที่จะสร้าง หรือจำนวนคอลัมน์ใหม่ที่จะสร้าง
-   `default`: แทนที่ค่าที่ใช้เมื่อมีค่าที่แยกออกมาไม่เพียงพอที่จะเติมคอลัมน์ใหม่ทั้งหมด ค่าเริ่มต้นสำหรับพารามิเตอร์นี้คือ `null`
-   `extraColumns`: ระบุสิ่งที่ต้องทำหากอาจมีค่าที่แยกออกมามากกว่าจำนวนคอลัมน์ใหม่ คุณสามารถส่งค่า enum `ExtraValues.Type` ไปยังพารามิเตอร์นี้ได้ ค่าเริ่มต้นคือ `ExtraValues.Ignore`


## Examples

### Example #1
แยกคอลัมน์ชื่อเป็นชื่อและนามสกุล
```powerquery
let
    Source = #table(type table[CustomerID = number, Name = text, Phone = text],
    {
        {1, "Bob White", "123-4567"},
        {2, "Jim Smith", "987-6543"},
        {3, "Paul", "543-7890"},
        {4, "Cristina Best", "232-1550"}
    }),
    SplitColumns = Table.SplitColumn(
        Source,
        "Name",
        Splitter.SplitTextByDelimiter(" "))
in
    SplitColumns
```

Result: 
```powerquery
#table(type table[CustomerID = number, Name.1 = text, Name.2 = text, Phone = text],
{
    {1, "Bob", "White", "123-4567"},
    {2, "Jim", "Smith", "987-6543"},
    {3, "Paul", null, "543-7890"},
    {4, "Cristina", "Best", "232-1550"}
})
```


### Example #2
แยกคอลัมน์ชื่อเป็นชื่อและนามสกุล แล้วเปลี่ยนชื่อคอลัมน์ใหม่
```powerquery
let
    Source = #table(type table[CustomerID = number, Name = text, Phone = text],
    {
        {1, "Bob White", "123-4567"},
        {2, "Jim Smith", "987-6543"},
        {3, "Paul", "543-7890"},
        {4, "Cristina Best", "232-1550"}
    }),
    SplitColumns = Table.SplitColumn(
        Source,
        "Name",
        Splitter.SplitTextByDelimiter(" "),
        {"First Name", "Last Name"})
in
    SplitColumns
```

Result: 
```powerquery
#table(type table[CustomerID = number, First Name = text, Last Name = text, Phone = text],
{
    {1, "Bob", "White", "123-4567"},
    {2, "Jim", "Smith", "987-6543"},
    {3, "Paul", null, "543-7890"},
    {4, "Cristina", "Best", "232-1550"}
})
```


### Example #3
แยกคอลัมน์ชื่อเป็นชื่อและนามสกุล เปลี่ยนชื่อคอลัมน์ใหม่ และเติมช่องว่างด้วย "-No Entry-"
```powerquery
let
    Source = #table(type table[CustomerID = number, Name = text, Phone = text],
    {
        {1, "Bob White", "123-4567"},
        {2, "Jim Smith", "987-6543"},
        {3, "Paul", "543-7890"},
        {4, "Cristina Best", "232-1550"}
    }),
    SplitColumns = Table.SplitColumn(
        Source,
        "Name",
        Splitter.SplitTextByDelimiter(" "),
        {"First Name", "Last Name"},
        "-No Entry-")
in
    SplitColumns
```

Result: 
```powerquery
#table(type table[CustomerID = number, First Name = text, Last Name = text, Phone = text],
{
    {1, "Bob", "White", "123-4567"},
    {2, "Jim", "Smith", "987-6543"},
    {3, "Paul", "-No Entry-", "543-7890"},
    {4, "Cristina", "Best", "232-1550"}
})
```


### Example #4
แยกคอลัมน์ชื่อเป็นชื่อและนามสกุล แล้วเปลี่ยนชื่อคอลัมน์ใหม่ เนื่องจากอาจมีค่ามากกว่าจํานวนคอลัมน์ จึงทําให้คอลัมน์นามสกุลเป็นรายการที่รวมค่าทั้งหมดหลังชื่อ
```powerquery
let
    Source = #table(type table[CustomerID = number, Name = text, Phone = text],
    {
        {1, "Bob White", "123-4567"},
        {2, "Jim Smith", "987-6543"},
        {3, "Paul Green", "543-7890"},
        {4, "Cristina J. Best", "232-1550"}
    }),
    SplitColumns = Table.SplitColumn(
        Source,
        "Name",
        Splitter.SplitTextByDelimiter(" "),
        {"First Name", "Last Name"},
        null,
        ExtraValues.List)
in
    SplitColumns
```

Result: 
```powerquery
#table(type table[CustomerID = number, First Name = text, Last Name = text, Phone = text],
{
    {1, "Bob", {"White"}, "123-4567"},
    {2, "Jim", {"Smith"}, "987-6543"},
    {3, "Paul", {"Green"}, "543-7890"},
    {4, "Cristina", {"J.", "Best"}, "232-1550"}
})
```




## Category
Table.Transformation
