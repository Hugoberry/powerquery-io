---
title: Lines.ToBinary
---

# Lines.ToBinary


แปลงรายการข้อความเป็นค่าไบนารีโดยใช้การเข้ารหัสและ lineSeparator ที่ระบุ จากนั้น lineSeparator จะถูกผนวกเข้ากับแต่ละบรรทัด  ถ้าไม่มีการระบุ อักขระขึ้นบรรทัดใหม่และอักขระเลื่อนจะถูกใช้งาน


## Syntax

```powerquery
Lines.ToBinary(
    lines as list,
    optional lineSeparator as text,
    optional encoding as TextEncoding.Type,
    optional includeByteOrderMark as logical
) as binary
```


## Remarks

แปลงรายการข้อความเป็นค่าไบนารีโดยใช้การเข้ารหัสและ lineSeparator ที่ระบุ จากนั้น lineSeparator จะถูกผนวกเข้ากับแต่ละบรรทัด  ถ้าไม่มีการระบุ อักขระขึ้นบรรทัดใหม่และอักขระเลื่อนจะถูกใช้งาน



## Category
Lines
