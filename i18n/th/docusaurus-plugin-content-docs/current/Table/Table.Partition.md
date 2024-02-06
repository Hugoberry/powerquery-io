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

แบ่ง <code>table</code> เป็นรายการจำนวนตาราง <code>groups</code> ตามค่าของ <code>column</code> และฟังก์ชัน <code>hash</code>    ฟังก์ชัน <code>hash</code> จะถูกนำไปใช้กับค่าของแถว <code>column</code> เพื่อรับค่าแฮชสำหรับแถว มอดูโลค่าแฮช <code>groups</code> กำหนดตารางที่ส่งกลับซึ่งจะมีการวางแถวลงไป    <ul>       <li><code>table</code>: ตารางที่จะแบ่งพาร์ติชัน</li>       <li><code>column</code>: คอลัมน์สำหรับแฮชที่กำหนดว่าจะให้แถวอยู่ในตารางที่ส่งกลับตารางใด</li>       <li><code>groups</code>: จำนวนตารางจะมีการแบ่งพาร์ติชันตารางค่าที่ป้อนลงไป</li>       <li><code>hash</code>: ฟังก์ชันที่นำไปใช้เพื่อรับค่าแฮช</li>    </ul>  


## Examples

### Example #1 
แบ่งพาร์ติชันตาราง &lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})&lt;/code&gt; ให้เป็น 2 ตารางในคอลัมน์ [a] โดยใช้ค่าของคอลัมน์เป็นฟังก์ชันแฮช
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
