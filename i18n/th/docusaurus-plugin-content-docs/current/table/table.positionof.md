---
title: Table.PositionOf
---

# Table.PositionOf


ส่งกลับตำแหน่งหรือหลายตำแหน่งของแถวภายในตาราง


## Syntax

```powerquery
Table.PositionOf(
    table as table,
    row as record,
    optional occurrence as any,
    optional equationCriteria as any
) as any
```


## Remarks

ส่งคืนตำแหน่งแถวของเหตุการณ์ครั้งแรกของ `row` ใน `table` ที่ระบุ ส่งกลับ -1 ถ้าไม่พบเหตุการณ์

-   `table`: ตารางค่าที่ป้อน
-   `row`: แถวในตารางที่จะค้นหาตำแหน่ง
-   `occurrence`: *(ระบุหรือไม่ก็ได้)* ระบุการปรากฏของแถวที่จะส่งกลับ
-   `equationCriteria`: *(ระบุหรือไม่ก็ได้)* ควบคุมการเปรียบเทียบระหว่างแถวของตาราง


## Examples

### Example #1
ค้นหาตำแหน่งการปรากฏครั้งแรกของ \[a = 2, b = 4\] ในตาราง `({[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})`
```powerquery
Table.PositionOf(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 1, b = 4],
        [a = 2, b = 4],
        [a = 1, b = 4]
    }),
    [a = 2, b = 4]
)
```

Result: 
```powerquery
0
```


### Example #2
ค้นหาตำแหน่งการปรากฏครั้งที่สองของ \[a = 2, b = 4\] ในตาราง `({[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})`
```powerquery
Table.PositionOf(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 1, b = 4],
        [a = 2, b = 4],
        [a = 1, b = 4]
    }),
    [a = 2, b = 4],
    1
)
```

Result: 
```powerquery
2
```


### Example #3
ค้นหาตำแหน่งการปรากฏทั้งหมดของ \[a = 2, b = 4\] ในตาราง `({[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})`
```powerquery
Table.PositionOf(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 1, b = 4],
        [a = 2, b = 4],
        [a = 1, b = 4]
    }),
    [a = 2, b = 4],
    Occurrence.All
)
```

Result: 
```powerquery
{0, 2}
```




## Category
Table.Membership
