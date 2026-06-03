---
title: DateTime.LocalNow
---

# DateTime.LocalNow


ส่งกลับวันที่และเวลาในโซนเวลาท้องถิ่น


## Syntax

```powerquery
DateTime.LocalNow(

) as datetime
```


## Remarks

ส่งกลับค่า `วันที่เวลา` ที่ตั้งค่าเป็นวันที่และเวลาปัจจุบันในระบบ  
  
ค่าที่ส่งกลับโดยฟังก์ชันนี้ขึ้นอยู่กับว่าคุณกำลังเรียกใช้คิวรีของคุณในคอมพิวเตอร์เฉพาะที่หรือออนไลน์ ตัวอย่างเช่น ถ้าคุณเรียกใช้คิวรีของคุณบนระบบที่อยู่ในโซนเวลาแปซิฟิกของสหรัฐอเมริกา Power Query Desktop จะส่งกลับวันที่และเวลาที่ตั้งไว้ในเครื่องของคุณ แต่ถ้าคุณเรียกใช้คิวรีของคุณในระบบคลาวด์ Power Query Online จะส่งกลับเวลา UTC เนื่องจากกำลังอ่านเวลาที่ตั้งไว้ในเครื่องเสมือนบนระบบคลาวด์ ซึ่งทั้งหมดถูกตั้งค่าเป็น UTC


## Examples

### Example #1
เรียกฟังก์ชันนี้บนคอมพิวเตอร์เฉพาะที่ที่ใช้ Power Query Desktop
```powerquery
DateTime.LocalNow()
```

Result: 
```powerquery
The current local date and time.
```


### Example #2
เรียกฟังก์ชันนี้บนระบบคลาวด์ที่ทํางานบน Power Query Online
```powerquery
DateTime.LocalNow()
```

Result: 
```powerquery
The current online (UTC) date and time.
```




## Category
DateTime
