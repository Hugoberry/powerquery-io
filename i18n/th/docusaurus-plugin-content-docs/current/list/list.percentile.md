---
title: List.Percentile
---

# List.Percentile


ส่งกลับเปอร์เซ็นต์ไทล์ตัวอย่างอย่างน้อยหนึ่งรายการที่สอดคล้องกับความน่าจะเป็นที่กำหนดไว้


## Syntax

```powerquery
List.Percentile(
    list as list,
    percentiles as any,
    optional options as record
) as any
```


## Remarks

ส่งกลับเปอร์เซ็นต์ไทล์ตัวอย่างของรายการอย่างน้อยหนึ่งรายการ `list` ถ้าค่า `percentiles` เป็นตัวเลขระหว่าง 0.0 และ 1.0 จะถือว่าเป็นเปอร์เซ็นต์ไทล์และผลลัพธ์จะเป็น ค่าเดียวที่สอดคล้องกับความน่าจะเป็นดังกล่าว ถ้าค่า `percentiles` เป็นรายการตัวเลขที่มีค่าระหว่าง 0.0 และ 1.0 ผลลัพธ์จะเป็นรายการเปอร์เซ็นต์ไทล์ ที่สอดคล้องกับความน่าของข้อมูลป้อนเข้า  
  
ผู้ใช้ขั้นสูงสามารถใช้ตัวเลือก PercentileMode ใน `options` เพื่อเลือกวิธีการประมาณค่าในช่วงที่เจาะจงยิ่งขึ้น แต่ไม่แนะนำสำหรับการใช้งานส่วนใหญ่ สัญลักษณ์ที่กำหนดไว้ล่วงหน้า `PercentileMode ExcelInc` และ `PercentileMode ExcelExc` ตรงกับวิธีการประมาณค่าในช่วงที่ฟังก์ชัน Excel ใช้ `PERCENTILE.INC` และ `PERCENTILE.EXC` ลักษณะการทำงานเริ่มต้นตรงกับ `PercentileMode.ExcelInc` สัญลักษณ์ `PercentileMode. SqlCont` และ `PercentileMode.SqlDisc` ตรงกับลักษณะการทำงานของ SQL Server สำหรับ `PERCENTILE_CONT` และ `PERCENTILE_DISC` ตามลำดับ


## Examples

### Example #1
ค้นหาควอไทล์แรกของรายการ `{5, 3, 1, 7, 9}`
```powerquery
List.Percentile({5, 3, 1, 7, 9}, 0.25)
```

Result: 
```powerquery
3
```


### Example #2
ค้นหาควอไทล์ของรายการ `{5, 3, 1, 7, 9}` โดยใช้วิธีการการประมาณค่าในช่วงที่ตรงกับ `PERCENTILE.EXC` ของ Excel
```powerquery
List.Percentile({5, 3, 1, 7, 9}, {0.25, 0.5, 0.75}, [PercentileMode=PercentileMode.ExcelExc])
```

Result: 
```powerquery
{2, 5, 8}
```




## Category
List.Ordering
