---
title: Table.PositionOfAny
---

# Table.PositionOfAny


## Description

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


## Details

ส่งคืนตำแหน่งแถวจาก <code>table</code> ของการปรากฏครั้งแรกของรายการ <code>rows</code> ส่งคืน -1 ถ้าไม่พบเหตุการณ์    <ul>       <li><code>table</code>: ตารางค่าที่ป้อน</li>       <li><code>rows</code>: รายการของแถวในตารางที่จะค้นหาตำแหน่ง</li>       <li><code>occurrence</code>: <i>[ระบุหรือไม่ก็ได้]</i> ระบุการปรากฏของแถวที่จะส่งกลับ</li>       <li><code>equationCriteria</code>: <i>[ระบุหรือไม่ก็ได้]</i> ควบคุมการเปรียบเทียบระหว่างแถวของตาราง</li>    </ul>    


## Examples

### Example #1 
ค้นหาตำแหน่งการปรากฏครั้งแรกของ [a = 2, b = 4] หรือ [a = 6, b = 8] ในตาราง &lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})&lt;/code&gt;
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
ค้นหาตำแหน่งการปรากฏทั้งหมดของ [a = 2, b = 4] หรือ [a = 6, b = 8] ในตาราง &lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]}&lt;/code&gt;
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
