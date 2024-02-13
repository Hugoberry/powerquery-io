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

ส่งคืนตำแหน่งแถวของเหตุการณ์ครั้งแรกของ <code>row</code> ใน <code>table</code> ที่ระบุ ส่งคืน -1 ถ้าไม่พบเหตุการณ์    <ul>       <li><code>table</code>: ตารางค่าที่ป้อน</li>       <li><code>row</code>: แถวในตารางที่จะค้นหาตำแหน่ง</li>       <li><code>occurrence</code>: <i>[ระบุหรือไม่ก็ได้]</i> ระบุการปรากฏของแถวที่จะส่งกลับ</li>       <li><code>equationCriteria</code>: <i>[ระบุหรือไม่ก็ได้]</i> ควบคุมการเปรียบเทียบระหว่างแถวของตาราง</li>    </ul>    


## Examples

### Example #1 
ค้นหาตำแหน่งการปรากฏครั้งแรกของ [a = 2, b = 4] ในตาราง &lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})&lt;/code&gt;
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
ค้นหาตำแหน่งการปรากฏครั้งที่สองของ [a = 2, b = 4] ในตาราง &lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})&lt;/code&gt;
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
ค้นหาตำแหน่งการปรากฏทั้งหมดของ [a = 2, b = 4] ในตาราง &lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})&lt;/code&gt;
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
