---
title: Duration.FromText
---

# Duration.FromText


ส่งกลับค่าระยะเวลาจากรูปแบบเวลาที่ใช้ไปเป็นข้อความ (d.h:m:s)


## Syntax

```powerquery
Duration.FromText(
    text as text
) as duration
```


## Remarks

ส่งกลับค่าระยะเวลาจากข้อความที่ระบุ `text` สามารถแยกวิเคราะห์รูปแบบต่อไปนี้ด้วยฟังก์ชันนี้:

-   (-)hh:mm(:ss(.ff))
-   (-)ddd(.hh:mm(:ss(.ff)))

(รวมช่วงทั้งหมดไว้ด้วย)

-   ddd: จำนวนวัน
-   hh: จำนวนชั่วโมง ระหว่าง 0 ถึง 23
-   mm: จำนวนนาที ระหว่าง 0 ถึง 59
-   ss: จำนวนวินาที ระหว่าง 0 ถึง 59
-   ff: เสี้ยววินาที ระหว่าง 0 ถึง 9999999


## Examples

### Example #1
แปลง `"2.05:55:20"` เป็นค่า `duration`
```powerquery
Duration.FromText("2.05:55:20")
```

Result: 
```powerquery
#duration(2, 5, 55, 20)
```




## Category
Duration
