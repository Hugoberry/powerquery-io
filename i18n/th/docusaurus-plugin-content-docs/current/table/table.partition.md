---
title: Table.Partition
---

# Table.Partition


แบ่งตารางเป็นรายการตารางต่างๆ ตามจำนวนกลุ่มและคอลัมน์ที่ระบุ


## Syntax

```powerquery
Table.Partition(
    table as table,
    column as text,
    groups as number,
    hash as function
) as list
```


## Remarks

แบ่ง `table` เป็นรายการจำนวนตาราง `groups` ตามค่าของ `column` และฟังก์ชัน `hash` ฟังก์ชัน `hash` จะถูกนำไปใช้กับค่าของแถว `column` เพื่อรับค่าแฮชสำหรับแถว มอดูโลค่าแฮช `groups` กำหนดตารางที่ส่งกลับซึ่งจะมีการวางแถวลงไป

-   `table`: ตารางที่จะแบ่งพาร์ติชัน
-   `column`: คอลัมน์สำหรับแฮชที่กำหนดว่าจะให้แถวอยู่ในตารางที่ส่งกลับตารางใด
-   `groups`: จำนวนตารางจะมีการแบ่งพาร์ติชันตารางค่าที่ป้อนลงไป
-   `hash`: ฟังก์ชันที่นำไปใช้เพื่อรับค่าแฮช


## Examples

### Example #1
แบ่งพาร์ติชันตาราง `({[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})` ให้เป็น 2 ตารางในคอลัมน์ \[a\] โดยใช้ค่าของคอลัมน์เป็นฟังก์ชันแฮช
```powerquery
Table.Partition(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 1, b = 4],
        [a = 2, b = 4],
        [a = 1, b = 4]
    }),
    "a",
    2,
    each _
)
```

Result: 
```powerquery
{
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 2, b = 4]
    }),
    Table.FromRecords({
        [a = 1, b = 4],
        [a = 1, b = 4]
    })
}
```




## Category
Table.Row operations
