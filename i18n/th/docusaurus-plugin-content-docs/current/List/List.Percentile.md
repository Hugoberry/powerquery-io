---
title: List.Percentile
---

# List.Percentile


## Description

ส่งกลับเปอร์เซ็นต์ไทล์ตัวอย่างอย่างน้อยหนึ่งรายการที่สอดคล้องกับความน่าจะเป็นที่กำหนดไว้


## Syntax

```powerquery
List.Percentile(
    list as list,
    percentiles as any,
    optional options as record
) as any
```


## Details

ส่งกลับเปอร์เซ็นต์ไทล์ตัวอย่างของรายการ <code>list</code> อย่างน้อยหนึ่งรายการ ถ้าค่า <code>percentiles</code> เป็นตัวเลขระหว่าง 0.0 และ 1.0 จะถือว่าเป็นเปอร์เซ็นต์ไทล์ และผลลัพธ์จะเป็น    ค่าเดียวที่สอดคล้องกับความน่าจะเป็นดังกล่าว ถ้าค่า <code>percentiles</code> เป็นรายการตัวเลขที่มีค่าระหว่าง 0.0 และ 1.0 ผลลัพธ์จะเป็นรายการเปอร์เซ็นต์ไทล์    ที่สอดคล้องกับความน่าของข้อมูลป้อนเข้า ผู้ใช้ขั้นสูงสามารถใช้ตัวเลือก PercentileMode ใน <code>options</code> เพื่อเลือกวิธีการประมาณค่าในช่วงที่เจาะจงยิ่งขึ้น แต่ไม่แนะนำสำหรับการใช้งานส่วนใหญ่    สัญลักษณ์ที่กำหนดไว้ล่วงหน้า <code>PercentileMode ExcelInc</code> และ <code>PercentileMode ExcelExc</code> ตรงกับวิธีการประมาณค่าในช่วงที่ฟังก์ชัน Excel ใช้    <code>PERCENTILE.INC</code> และ <code>PERCENTILE.EXC</code> ลักษณะการทำงานเริ่มต้นตรงกับ <code>PercentileMode.ExcelInc</code> สัญลักษณ์    <code>PercentileMode. SqlCont</code> และ <code>PercentileMode.SqlDisc</code> ตรงกับลักษณะการทำงานของ SQL Server สำหรับ <code>PERCENTILE_CONT</code> และ    <code>PERCENTILE_DISC</code> ตามลำดับ  


## Examples

### Example #1 
ค้นหาควอไทล์แรกของรายการ &lt;code&gt;\{5, 3, 1, 7, 9}&lt;/code&gt;
```powerquery
List.Percentile({5, 3, 1, 7, 9}, 0.25)
```

Result: 
```powerquery
3
```


### Example #2 
ค้นหาควอไทล์ของรายการ &lt;code&gt; \{5, 3, 1, 7, 9} &lt;/code&gt; โดยใช้วิธีการการประมาณค่าในช่วงที่ตรงกับ &lt;code&gt;PERCENTILE.EXC&lt;/code&gt; ของ Excel
```powerquery
List.Percentile({5, 3, 1, 7, 9}, {0.25, 0.5, 0.75}, [PercentileMode=PercentileMode.ExcelExc])
```

Result: 
```powerquery
{2, 5, 8}
```




## Category
List.Ordering
