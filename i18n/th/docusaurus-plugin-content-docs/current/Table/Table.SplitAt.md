---
title: Table.SplitAt
---

# Table.SplitAt


## Description

ส่งกลับรายการที่มีแถวจำนวนแรกที่ระบุและแถวที่เหลือ


## Syntax

```powerquery
Table.SplitAt(
    table as table,
    count as number
) as list
```


## Details

ส่งกลับรายการที่มีสองตาราง: ตารางที่มีแถว N แรกของ <code>table</code> (ตามที่ระบุโดย <code>count</code>) และตารางที่มีแถวที่เหลือของ <code>table</code>ถ้าตารางของรายการผลลัพธ์มีการแจกแจงครั้งเดียวและตามลำดับ ฟังก์ชันจะแจกแจง <code>table</code> เพียงครั้งเดียว


## Examples

### Example #1 
ส่งคืนสองแถวแรกของตารางและแถวที่เหลือของตาราง
```powerquery
Table.SplitAt(#table({"a", "b", "c"}, {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}}), 2)
```

Result: 
```powerquery
{
    #table({"a", "b", "c"}, {{1, 2, 3}, {4, 5, 6}}),
    #table({"a", "b", "c"}, {{7, 8, 9}})
}
```




## Category
Table.Row operations
