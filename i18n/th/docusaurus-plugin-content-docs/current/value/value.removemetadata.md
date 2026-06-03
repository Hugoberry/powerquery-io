---
title: Value.RemoveMetadata
---

# Value.RemoveMetadata


ตัดส่วนค่าที่ป้อนของ Metadata


## Syntax

```powerquery
Value.RemoveMetadata(
    value as any,
    optional metaValue as any
) as any
```


## Remarks

ตัดส่วนค่าที่ป้อนของ Metadata


## Examples

### Example #1
นำเมตาดาต้าทั้งหมดออกจากค่าข้อความ
```powerquery
Value.Metadata(
    Value.RemoveMetadata("abc" meta [a = 1, b = 2])
)
```

Result: 
```powerquery
[]
```


### Example #2
นำเขตข้อมูลของเมตาดาต้าออกจากค่าข้อความเพียงเขตข้อมูลเดียว
```powerquery
Value.Metadata(
    Value.RemoveMetadata("abc" meta [a = 1, b = 2], {"a"})
)
```

Result: 
```powerquery
[b = 2]
```




## Category
Metadata
