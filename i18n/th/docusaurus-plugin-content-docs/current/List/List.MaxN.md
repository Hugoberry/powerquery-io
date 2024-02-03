---
title: List.MaxN
---

# List.MaxN


## Description

ส่งกลับค่าสูงสุดในรายการ ต้องระบุจำนวนค่าที่จะส่งกลับหรือเงื่อนไขการกรอง


## Syntax

```powerquery
List.MaxN(
    list as list,
    countOrCondition as any,
    optional comparisonCriteria as any,
    optional includeNulls as logical
) as list
```


## Details

ส่งคืนค่าสูงสุดในรายการ <code>list</code>    หลังจากเรียงลำดับแถวแล้ว สามารถระบุพารามิเตอร์ที่เลือกได้เพื่อกรองผลลัพธ์เพิ่มเติม พารามิเตอร์ <code>countOrCondition</code> ที่เลือกได้จะระบุจำนวนค่าเพื่อส่งกลับหรือเงื่อนไขการกรอง พารามิเตอร์ที่เลือกได้ <code>comparisonCriteria</code> จะระบุวิธีเปรียบเทียบค่าในรายการ <ul>        <li> <code>list</code>: รายการค่า</li>        <li> <code>countOrCondition</code>: ถ้าระบุตัวเลข จะมีการส่งคืนรายการที่มีข้อมูลสูงสุด <code>countOrCondition</code> รายการตามลำดับจากน้อยไปหามาก ถ้ามีการระบุเงื่อนไข จะมีการส่งกลับรายการข้อมูลที่ตรงกับเงื่อนไขแรก เมื่อรายการไม่ตรงตามเงื่อนไข จะไม่มีการพิจารณารายการถัดไป</li><li><code>comparisonCriteria</code>: <i>[ระบุหรือไม่ก็ได้]</i> อาจระบุค่า <code>comparisonCriteria</code> ที่เลือกได้เพื่อกำหนดวิธีเปรียบเทียบข้อมูลในรายการ ถ้าพารามิเตอร์เป็น null จะมีการใช้ตัวเปรียบเทียบเริ่มต้น  </li></ul>



## Category
List.Ordering
