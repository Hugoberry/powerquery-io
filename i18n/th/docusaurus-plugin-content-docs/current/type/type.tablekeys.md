---
title: Type.TableKeys
---

# Type.TableKeys


ส่งกลับรายการคีย์ที่อาจว่างเปล่าสำหรับชนิดตารางที่กำหนด


## Syntax

```powerquery
Type.TableKeys(
    tableType as type
) as list
```


## Remarks

ส่งกลับรายการคีย์ที่อาจว่างเปล่าสําหรับชนิดตารางที่ระบุ  
  
แต่ละคีย์จะถูกกําหนดโดยใช้ระเบียนในฟอร์มต่อไปนี้:

-   `คอลัมน์`: รายการของชื่อคอลัมน์ที่กําหนดคีย์
-   `Primary`: `true` ถ้าคีย์เป็นคีย์หลักของตาราง มิฉะนั้น `false`


## Examples

### Example #1
ส่งกลับข้อมูลคีย์สําหรับชนิดตาราง
```powerquery
let
    BaseType = type table [ID = number, Name = text],
    AddKey = Type.AddTableKey(BaseType, {"ID"}, true),
    DetailsOfKeys = Type.TableKeys(AddKey)
in
    DetailsOfKeys
```

Result: 
```powerquery
{[Columns = {"ID"}, Primary = true]}
```




## Category
Type
