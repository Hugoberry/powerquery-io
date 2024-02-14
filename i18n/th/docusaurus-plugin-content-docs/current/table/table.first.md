---
title: Table.First
---

# Table.First


ส่งกลับแถวแรกหรือค่าเริ่มต้นที่ระบุ


## Syntax

```powerquery
Table.First(
    table as table,
    optional default as any
) as any
```


## Remarks

ส่งกลับแถวแรกของ <code>table</code> หรือค่าเริ่มต้นที่เลือกได้ <code>default</code> ถ้าตารางว่างเปล่า


## Examples

### Example #1 
ค้นหาแถวแรกของตาราง
```powerquery
Table.First(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
    })
)
```

Result: 
```powerquery
[CustomerID = 1, Name = "Bob", Phone = "123-4567"]
```


### Example #2 
ค้นหาแถวแรกของตาราง &lt;code&gt;(\{})&lt;/code&gt; หรือส่งกลับ [a = 0, b = 0] ถ้าว่างเปล่า
```powerquery
Table.First(Table.FromRecords({}), [a = 0, b = 0])
```

Result: 
```powerquery
[a = 0, b = 0]
```




## Category
Table.Row operations
