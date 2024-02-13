---
title: Type.ReplaceTableKeys
---

# Type.ReplaceTableKeys


ส่งกลับชนิดตารางใหม่ซึ่งแทนที่คีย์ทั้งหมดโดยรายการคีย์ที่ระบุ


## Syntax

```powerquery
Type.ReplaceTableKeys(
    tableType as type,
    keys as list
) as type
```


## Remarks

ส่งกลับชนิดตารางใหม่ด้วยคีย์ทั้งหมดที่ถูกแทนที่ด้วยรายการคีย์ที่ระบุ<br />    <br />    แต่ละคีย์จะถูกกําหนดโดยใช้ระเบียนในฟอร์มต่อไปนี้:    <ul>      <li>        <code>คอลัมน์</code>: รายการของชื่อคอลัมน์ที่กําหนดคีย์      </li>      <li>        <code>Primary</code>: <code>true</code> ถ้าคีย์เป็นคีย์หลักของตาราง มิฉะนั้น <code>false</code>      </li>    </ul>    รายการของคีย์ที่ระบุจะถูกตรวจสอบความถูกต้องเพื่อให้แน่ใจว่าไม่มีการกําหนดคีย์หลักมากกว่าหนึ่งคีย์ และมีชื่อคอลัมน์คีย์ทั้งหมดอยู่ในชนิดตาราง    


## Examples

### Example #1 
แทนที่ข้อมูลคีย์ในชนิดตาราง
```powerquery
let
    BaseType = type table [ID = number, FirstName = text, LastName = text],
    KeysAdded = Type.ReplaceTableKeys(
        BaseType, 
        {
            [Columns = {"ID"}, Primary = true],
            [Columns = {"FirstName", "LastName"}, Primary = false]
        }
    ),
    DetailsOfKeys = Type.TableKeys(KeysAdded)
in
    DetailsOfKeys
```

Result: 
```powerquery
{
    [Columns = {"ID"}, Primary = true],
    [Columns = {"FirstName", "LastName"}, Primary = false]
}
```


### Example #2 
ล้างข้อมูลคีย์ที่กําหนดไว้ก่อนหน้านี้ในชนิดตาราง
```powerquery
let
    TypeWithKey = Type.AddTableKey(type table [ID = number, Name = text], {"ID"}, true),
    KeyRemoved = Type.ReplaceTableKeys(TypeWithKey, {}),
    DetailsOfKeys = Type.TableKeys(KeyRemoved)
in
    DetailsOfKeys
```

Result: 
```powerquery
{}
```




## Category
Type
