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

สร้างการแสดง JSON จากค่าที่กำหนดไว้ <code>value</code> ด้วยการเข้ารหัสข้อความที่ระบุไว้โดย <code>encoding</code> หากมีการละเว้น <code>encoding</code> จะมีการใช้ UTF8 จะมีการแสดงค่าดังต่อไปนี้:<br /> <ul>        <li>จะมีการแสดงค่า Null ข้อความตัวอักษร และค่าที่เป็นตรรกะเป็นชนิด JSON ที่เกี่ยวข้อง</li>        <li>จะมีการแสดงตัวเลขเป็นตัวเลขใน JSON ยกเว้น <code>#infinity</code>, <code>-#infinity</code> และ <code>#nan</code> ซึ่งจะได้รับการแปลงค่า Null</li>        <li>จะมีการแสดงรายการเป็นอาร์เรย์ JSON</li>        <li>จะมีการแสดงระเบียนเป็นวัตถุ JSON</li>        <li>จะมีการแสดงตารางเป็นอาร์เรย์ของวัตถุ</li>        <li>จะมีการแสดงวันที่ เวลา datetimes, datetimezones และระยะเวลาเป็นข้อความตัวอักษร ISO-8601</li>        <li>จะมีการแสดงค่าไบนารีเป็นข้อความตัวอักษรที่ได้รับการเข้ารหัสเป็นฐาน 64</li>        <li>ชนิดและฟังก์ชันจะแสดงข้อผิดพลาด</li> </ul>    


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
