---
title: List.Average
---

# List.Average


ส่งกลับค่าเฉลี่ยของค่าต่างๆ ใช้งานค่าตัวเลข วันที่ วันที่เวลา โซนวันที่เวลา และระยะเวลา


## Syntax

```powerquery
List.Average(
    list as list,
    optional precision as Precision.Type
) as any
```


## Remarks

ส่งกลับค่าเฉลี่ยสำหรับข้อมูลในรายการ <code>list</code> ผลลัพธ์จะเป็นชนิดข้อมูลเดียวกันกับค่าในรายการ เฉพาะการใช้งานค่าตัวเลข วันที่ เวลา วันที่เวลา โซนวันที่เวลา และระยะเวลา เท่านั้น    ถ้ารายการว่างเปล่า ค่า Null จะถูกส่งกลับ


## Examples

### Example #1 
หาค่าเฉลี่ยของรายการตัวเลข &lt;code&gt;\{3, 4, 6}&lt;/code&gt;
```powerquery
List.Average({3, 4, 6})
```

Result: 
```powerquery
4.333333333333333
```


### Example #2 
หาค่าเฉลี่ยของค่าวันที่ 1 มกราคม 2011, 2 มกราคม 2011 และ 3 มกราคม 2011
```powerquery
List.Average({#date(2011, 1, 1), #date(2011, 1, 2), #date(2011, 1, 3)})
```

Result: 
```powerquery
#date(2011, 1, 2)
```




## Category
List.Averages
