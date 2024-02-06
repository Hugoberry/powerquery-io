---
title: List.Sort
---

# List.Sort


เรียงลำดับรายการข้อมูลตามเกณฑ์ที่ระบุ


## Syntax

```powerquery
List.Sort(
    list as list,
    optional comparisonCriteria as any
) as list
```


## Remarks

เรียงลําดับรายการข้อมูล <code>list</code> ตามเกณฑ์ที่เลือกได้ที่ระบุไว้    พารามิเตอร์ที่เลือกได้ <code>comparisonCriteria</code> สามารถระบุเป็นเกณฑ์การเปรียบเทียบได้ ซึ่งสามารถใช้ค่าต่อไปนี้:    <ul>    <li>เมื่อต้องการควบคุมลําดับ เกณฑ์การเปรียบเทียบอาจเป็นค่า Order Enum (<code>Order.Descending</code>, <code>Order.Ascending</code>). </li>    <li> เมื่อต้องการคํานวณคีย์ที่จะใช้สําหรับการเรียงลําดับ สามารถใช้ฟังก์ชัน 1 อาร์กิวเมนต์ได้ </li>    <li> เมื่อต้องการเลือกทั้งคีย์และลําดับการควบคุม เกณฑ์การเปรียบเทียบสามารถเป็นรายการที่มีคีย์และลําดับได้ (<code>\{each 1 / _, Order.Descending}</code>). </li>    <li> เมื่อต้องการควบคุมการเปรียบเทียบอย่างสมบูรณ์ สามารถใช้ฟังก์ชัน 2 อาร์กิวเมนต์ได้ ฟังก์ชันนี้จะถูกส่งผ่านสองรายการจากรายการ (สองรายการใดๆ ในลําดับใดๆ) ฟังก์ชันควรส่งกลับค่าใดค่าหนึ่งต่อไปนี้:        <ul>            <li> <code>-1</code>: รายการแรกน้อยกว่ารายการที่สอง </li>            <li> <code>0</code>: รายการเท่ากัน</li>            <li><code>1</code>: รายการแรกมากกว่ารายการที่สอง</li>        </ul>        Value.Compare เป็นวิธีที่สามารถใช้ในการมอบหมายตรรกะนี้ได้ </li>    </ul>


## Examples

### Example #1 
เรียงลำดับรายการ \{2, 3, 1}
```powerquery
List.Sort({2, 3, 1})
```

Result: 
```powerquery
{1, 2, 3}
```


### Example #2 
เรียงลำดับรายการ \{2, 3, 1} จากมากไปหาน้อย
```powerquery
List.Sort({2, 3, 1}, Order.Descending)
```

Result: 
```powerquery
{3, 2, 1}
```


### Example #3 
เรียงลำดับรายการ \{2, 3, 1} จากมากไปหาน้อยโดยใช้เมธอด Value.Compare
```powerquery
List.Sort({2, 3, 1}, (x, y) => Value.Compare(1/x, 1/y))
```

Result: 
```powerquery
{3, 2, 1}
```




## Category
List.Ordering
