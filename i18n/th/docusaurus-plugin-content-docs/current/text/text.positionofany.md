---
title: Text.PositionOfAny
---

# Text.PositionOfAny


ส่งกลับตำแหน่งแรกในค่าข้อความของอักขระใดๆ ในรายการ (ส่งกลับ -1 ถ้าไม่พบ)


## Syntax

```powerquery
Text.PositionOfAny(
    text as text,
    characters as list,
    optional occurrence as Occurrence.Type
) as any
```


## Remarks

ส่งกลับตำแหน่งแรกของอักขระใดๆ ในรายการ `characters` ที่พบใน`text`. พารามิเตอร์ที่เลือกได้ `occurrence` อาจถูกใช้เพื่อระบุตำแหน่งเหตุการณ์ที่จะส่งกลับ


## Examples

### Example #1
ค้นหาตำแหน่งแรกของ "W" หรือ "H" ในข้อความ "Hello, World!"
```powerquery
Text.PositionOfAny("Hello, World!", {"H", "W"})
```

Result: 
```powerquery
0
```


### Example #2
ค้นหาตําแหน่งทั้งหมดของ "W" หรือ "H" ในข้อความ "Hello, World!"
```powerquery
Text.PositionOfAny("Hello, World!", {"H", "W"}, Occurrence.All)
```

Result: 
```powerquery
{0, 7}
```




## Category
Text.Membership
