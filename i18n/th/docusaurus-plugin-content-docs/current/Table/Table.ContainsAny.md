---
title: Table.ContainsAny
---

# Table.ContainsAny


แสดงว่าจะให้ระเบียนใดๆ ที่ระบุปรากฏเป็นแถวในตารางหรือไม่


## Syntax

```powerquery
Table.ContainsAny(
    table as table,
    rows as list,
    optional equationCriteria as any
) as logical
```


## Remarks

แสดงว่าจะให้ระเบียนใดๆ ที่ระบุในรายการระเบียน <code>rows</code> ปรากฏเป็นแถวใน <code>table</code> หรือไม่    พารามิเตอร์ที่เลือกได้ <code>equationCriteria</code> อาจถูกระบุเพื่อควบคุมการเปรียบเทียบระหว่างแถวของตาราง


## Examples

### Example #1 
กำหนดว่าตาราง &lt;code&gt;(\{[a = 1, b = 2], [a = 3, b = 4]})&lt;/code&gt; มีแถว &lt;code&gt;[a = 1, b = 2]&lt;/code&gt; หรือ &lt;code&gt;[a = 3, b = 5]&lt;/code&gt; หรือไม่
```powerquery
Table.ContainsAny(
    Table.FromRecords({
        [a = 1, b = 2],
        [a = 3, b = 4]
    }),
    {
        [a = 1, b = 2],
        [a = 3, b = 5]
    }
)
```

Result: 
```powerquery
true
```


### Example #2 
กำหนดว่าตาราง &lt;code&gt;(\{[a = 1, b = 2], [a = 3, b = 4]})&lt;/code&gt; มีแถว &lt;code&gt;[a = 1, b = 3]&lt;/code&gt; หรือ &lt;code&gt;[a = 3, b = 5]&lt;/code&gt; หรือไม่
```powerquery
Table.ContainsAny(
    Table.FromRecords({
        [a = 1, b = 2],
        [a = 3, b = 4]
    }),
    {
        [a = 1, b = 3],
        [a = 3, b = 5]
    }
)
```

Result: 
```powerquery
false
```


### Example #3 
กำหนดว่าตาราง &lt;code&gt;(Table.FromRecords(\{[a = 1, b = 2], [a = 3, b = 4]}))&lt;/code&gt; มีแถว &lt;code&gt;[a = 1, b = 3]&lt;/code&gt; หรือ &lt;code&gt;[a = 3, b = 5]&lt;/code&gt; หรือไม่โดยเปรียบเทียบเฉพาะคอลัมน์ [a]
```powerquery
Table.ContainsAny(
    Table.FromRecords({
        [a = 1, b = 2],
        [a = 3, b = 4]
    }),
    {
        [a = 1, b = 3],
        [a = 3, b = 5]
    },
    "a"
)
```

Result: 
```powerquery
true
```




## Category
Table.Membership
