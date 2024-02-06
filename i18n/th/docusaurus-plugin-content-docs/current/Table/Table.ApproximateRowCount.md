---
title: Table.ApproximateRowCount
---

# Table.ApproximateRowCount


ส่งกลับจำนวนของแถวโดยประมาณในตาราง


## Syntax

```powerquery
Table.ApproximateRowCount(
    table as table
) as number
```


## Remarks

ส่งกลับจํานวนแถวโดยประมาณใน <code>table</code> หรือข้อผิดพลาดถ้าแหล่งข้อมูลไม่สนับสนุนการประมาณ


## Examples

### Example #1 
ประมาณจํานวนการรวมกันที่แตกต่างกันของเมืองและรัฐในตารางขนาดใหญ่ซึ่งสามารถใช้เป็นค่าประมาณคาร์ดินาลลิตี้สําหรับคอลัมน์ การประมาณการคาร์ดินาลลิตี้มีความสําคัญเพียงพอที่แหล่งข้อมูลต่างๆ (เช่น SQL Server) สนับสนุนการประมาณเฉพาะนี้ซึ่งมักใช้อัลกอริทึมที่เรียกว่า HyperLogLog
```powerquery
Table.ApproximateRowCount(Table.Distinct(Table.SelectColumns(sqlTable, {"city", "state"})))
```

Result: 
```powerquery
number
```




## Category
Table.Information
