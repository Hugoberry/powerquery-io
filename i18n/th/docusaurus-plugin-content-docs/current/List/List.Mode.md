---
title: List.Mode
---

# List.Mode


## Description

ส่งกลับค่าที่ใช้บ่อยสุดในรายการ


## Syntax

```powerquery
List.Mode(
    list as list,
    optional equationCriteria as any
) as any
```


## Details

ส่งคืนข้อมูลที่ปรากฏบ่อยที่สุดในรายการ <code>list</code> ถ้าค่าว่างเปล่า ระบบจะแสดงข้อยกเว้น ถ้าหลายรายการปรากฏด้วยความถี่สูงสุดเดียวกัน รายการสุดท้ายจะถูกเลือก    สามารถระบุค่า <code>เกณฑ์การเปรียบเทียบ</code> ที่เลือกได้ <code>equationCriteria</code> เพื่อควบคุมการทดสอบความเท่ากัน 


## Examples

### Example #1 
หาข้อมูลที่ปรากฏบ่อยที่สุดในรายการ &lt;code&gt;\{&#34;A&#34;, 1, 2, 3, 3, 4, 5}&lt;/code&gt;
```powerquery
List.Mode({"A", 1, 2, 3, 3, 4, 5})
```

Result: 
```powerquery
3
```


### Example #2 
หาข้อมูลที่ปรากฏบ่อยที่สุดในรายการ &lt;code&gt;\{&#34;A&#34;, 1, 2, 3, 3, 4, 5, 5}&lt;/code&gt;
```powerquery
List.Mode({"A", 1, 2, 3, 3, 4, 5, 5})
```

Result: 
```powerquery
5
```




## Category
List.Averages
