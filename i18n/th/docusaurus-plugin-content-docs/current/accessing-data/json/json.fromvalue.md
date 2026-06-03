---
title: Json.FromValue
---

# Json.FromValue


สร้างข้อมูลแสดง JSON ด้วยค่าที่กำหนดไว้


## Syntax

```powerquery
Json.FromValue(
    value as any,
    optional encoding as TextEncoding.Type
) as binary
```


## Remarks

สร้างการแสดง JSON จากค่าที่กำหนดไว้ `value` ด้วยการเข้ารหัสข้อความที่ระบุไว้โดย `encoding` หากมีการละเว้น `encoding` จะมีการใช้ UTF8 จะมีการแสดงค่าดังต่อไปนี้:

-   จะมีการแสดงค่า null ข้อความตัวอักษร และค่าที่เป็นตรรกะเป็นชนิด JSON ที่เกี่ยวข้อง
-   จะมีการแสดงตัวเลขเป็นตัวเลขใน JSON ยกเว้น `#infinity`, `-#infinity` และ `#nan` ซึ่งจะถูกแปลงเป็น null
-   Lists จะแสดงเป็นอาร์เรย์ JSON
-   ระเบียนจะแสดงเป็นวัตถุ JSON
-   ตารางจะแสดงเป็นอาร์เรย์ของวัตถุ
-   วันที่ เวลา วันที่เวลา โซนวันที่เวลา และระยะเวลาจะแสดงเป็นข้อความ ISO-8601
-   ค่าไบนารีจะแสดงเป็นข้อความตัวอักษรที่ได้รับการเข้ารหัสเป็นฐาน 64
-   ชนิดและฟังก์ชันจะแสดงข้อผิดพลาด


## Examples

### Example #1
แปลงค่าที่ซับซ้อนให้เป็น JSON
```powerquery
Text.FromBinary(Json.FromValue([A = {1, true, "3"}, B = #date(2012, 3, 25)]))
```

Result: 
```powerquery
"{""A"":[1,true,""3""],""B"":""2012-03-25""}"
```




## Category
Text.Conversions from and to text
