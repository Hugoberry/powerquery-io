---
title: List.MinN
---

# List.MinN


## Description

ส่งกลับค่าต่ำสุดในรายการ สามารถระบุจำนวนค่าที่จะส่งกลับหรือเงื่อนไขการกรองได้


## Syntax

```powerquery
List.MinN(
    list as list,
    countOrCondition as any,
    optional comparisonCriteria as any,
    optional includeNulls as logical
) as list
```


## Details

ส่งกลับค่าต่ำสุดในรายการ <code>list</code>    พารามิเตอร์ <code>countOrCondition</code> จะระบุจำนวนค่าเพื่อส่งกลับหรือเงื่อนไขการกรอง พารามิเตอร์ที่เลือกได้ <code>comparisonCriteria</code> จะระบุวิธีเปรียบเทียบค่าในรายการ <ul>        <li> <code>list</code>: รายการค่า</li>        <li> <code>countOrCondition</code>: ถ้าระบุตัวเลข จะมีการส่งกลับรายการที่มีข้อมูลสูงสุด <code>countOrCondition</code> ข้อมูลตามลำดับจากน้อยไปหามาก ถ้าระบุเงื่อนไข จะมีการส่งกลับรายการข้อมูลที่ตรงกับเงื่อนไขตั้งแต่แรก เมื่อรายการใดรายการหนึ่งไม่เป็นไปตามเงื่อนไข จะไม่มีการพิจารณารายการถัดไป ถ้าพารามิเตอร์นี้เป็น null ค่าที่น้อยที่สุดค่าเดียวในรายการจะถูกส่งกลับ</li><li><code>comparisonCriteria</code>: <i>[ระบุหรือไม่ก็ได้]</i> อาจระบุค่า <code>comparisonCriteria</code> ที่เลือกได้เพื่อกำหนดวิธีเปรียบเทียบข้อมูลในรายการ ถ้าพารามิเตอร์เป็น null จะมีการใช้ตัวเปรียบเทียบเริ่มต้น  </li></ul>


## Examples

### Example #1 
หา 5 ค่าเล็กสุดในรายการ &lt;code&gt;\{3, 4, 5, -1, 7, 8, 2}&lt;/code&gt;
```powerquery
List.MinN({3, 4, 5, -1, 7, 8, 2}, 5)
```

Result: 
```powerquery
{-1, 2, 3, 4, 5}
```




## Category
List.Ordering
