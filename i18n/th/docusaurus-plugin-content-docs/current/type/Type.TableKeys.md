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

ส่งกลับรายการคีย์ที่อาจว่างเปล่าสําหรับชนิดตารางที่ระบุ<br />    <br />    แต่ละคีย์จะถูกกําหนดโดยใช้ระเบียนในฟอร์มต่อไปนี้:    <ul>      <li>        <code>คอลัมน์</code>: รายการของชื่อคอลัมน์ที่กําหนดคีย์      </li>      <li>        <code>Primary</code>: <code>true</code> ถ้าคีย์เป็นคีย์หลักของตาราง มิฉะนั้น <code>false</code>      </li>    </ul>    


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
