---
title: List.Split
---

# List.Split


แยกรายการที่ระบุลงในรายการของรายการโดยใช้ขนาดหน้าที่ระบุ


## Syntax

```powerquery
List.Split(
    list as list,
    pageSize as number
) as list
```


## Remarks

แยก `list` ลงในรายการของรายการที่องค์ประกอบแรกของรายการผลลัพธ์คือรายการที่มีองค์ประกอบ `pageSize` แรกจาก จากรายการแหล่งข้อมูล องค์ประกอบถัดไปของรายการผลลัพธ์คือรายการที่มีองค์ประกอบ `pageSize` ถัดไปจากรายการแหล่งข้อมูล และอื่นๆ



## Category
List.Transformation functions
