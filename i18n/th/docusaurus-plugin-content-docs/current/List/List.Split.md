---
title: List.Split
---

# List.Split


## Description

แยกรายการที่ระบุลงในรายการของรายการโดยใช้ขนาดหน้าที่ระบุ


## Syntax

```powerquery
List.Split(
    list as list,
    pageSize as number
) as list
```


## Details

แยก <code>list</code> ลงในรายการของรายการที่องค์ประกอบแรกของรายการผลลัพธ์คือรายการที่มีองค์ประกอบ <code>pageSize</code> แรกจาก    จากรายการแหล่งข้อมูล องค์ประกอบถัดไปของรายการผลลัพธ์คือรายการที่มีองค์ประกอบ <code>pageSize</code> ถัดไปจากรายการแหล่งข้อมูล และอื่นๆ



## Category
List.Transformation functions
