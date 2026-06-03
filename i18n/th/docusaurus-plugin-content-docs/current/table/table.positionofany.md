---
title: Table.PositionOfAny
---

# Table.PositionOfAny


ส่งกลับตำแหน่งหรือหลายตำแหน่งของแถวที่ระบุแถวใดแถวหนึ่งภายในตาราง


## Syntax

```powerquery
Table.PositionOfAny(
    table as table,
    rows as list,
    optional occurrence as number,
    optional equationCriteria as any
) as any
```


## Remarks

ส่งคืนตำแหน่งแถวจาก `table` ของการปรากฏครั้งแรกของรายการ `rows`. ส่งกลับ -1 ถ้าไม่พบเหตุการณ์

-   `table`: ตารางค่าที่ป้อน
-   `rows`: รายการของแถวในตารางที่จะค้นหาตำแหน่ง
-   `occurrence`: *(ระบุหรือไม่ก็ได้)* ระบุการปรากฏของแถวที่จะส่งกลับ
-   `equationCriteria`: *(ระบุหรือไม่ก็ได้)* ควบคุมการเปรียบเทียบระหว่างแถวของตาราง


## Examples

### Example #1
ค้นหาตำแหน่งการปรากฏครั้งแรกของ \[a = 2, b = 4\] หรือ \[a = 6, b = 8\] ในตาราง `({[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})`
```powerquery
Table.PositionOfAny(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 1, b = 4],
        [a = 2, b = 4],
        [a = 1, b = 4]
    }),
    {
        [a = 2, b = 4],
        [a = 6, b = 8]
    }
)
```

Result: 
```powerquery
0
```


### Example #2
ค้นหาตำแหน่งการปรากฏทั้งหมดของ \[a = 2, b = 4\] หรือ \[a = 6, b = 8\] ในตาราง `({[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]}`
```powerquery
Table.PositionOfAny(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 6, b = 8],
        [a = 2, b = 4],
        [a = 1, b = 4]
    }),
    {
        [a = 2, b = 4],
        [a = 6, b = 8]
    },
    Occurrence.All
)
```

Result: 
```powerquery
{0, 1, 2}
```




## Category
Table.Membership
