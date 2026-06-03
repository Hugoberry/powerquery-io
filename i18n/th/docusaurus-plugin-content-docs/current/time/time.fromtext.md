---
title: Time.FromText
---

# Time.FromText


สร้าง Time จากรูปแบบ Time ท้องถิ่นและสากล และแบบกำหนดเอง


## Syntax

```powerquery
Time.FromText(
    text as text,
    optional options as any
) as time
```


## Remarks

สร้างค่า `time` จากการแสดงผลในรูปแบบข้อความ `text`พารามิเตอร์ `record` เพิ่มเติม `options` อาจมีไว้เพื่อระบุคุณสมบัติเพิ่มเติม `record` สามารถมีเขตข้อมูลต่อไปนี้:

-   `Format`: ค่า `text` ที่ระบุรูปแบบที่จะใช้ สำหรับรายละเอียดเพิ่มเติม โปรดไปที่ https://go.microsoft.com/fwlink/?linkid=2180104 และ https://go.microsoft.com/fwlink/?linkid=2180105 การละเขตข้อมูลนี้หรือระบุเป็น `null` จะส่งผลให้แยกวิเคราะห์เวลาโดยใช้วิธีที่ดีที่สุด
-   `Culture`: เมื่อ `Format` ไม่ใช่ null `Culture` จะควบคุมตัวระบุรูปแบบบางส่วน ตัวอย่างเช่น ใน `"en-US"` `"tt"` is `"AM" or "PM"` ในขณะที่ใน `"ar-EG"` `"tt"` is `"ص" or "م"` เมื่อ `Format` เป็น `null`, `Culture` จะควบคุมรูปแบบเริ่มต้นที่จะใช้ เมื่อ `Culture` เป็น `null` หรือละไว้ จะใช้ `Culture.Current`

เพื่อสนับสนุนเวิร์กโฟลว์แบบดั้งเดิม `options` อาจเป็นค่าข้อความ ซึ่งมีวิธีการทำงานเหมือนกับ `options = [Format = null, Culture = options]`


## Examples

### Example #1
แปลง `"10:12:31am"` เป็นค่าเวลา
```powerquery
Time.FromText("10:12:31am")
```

Result: 
```powerquery
#time(10, 12, 31)
```


### Example #2
แปลง `"1012"` เป็นค่า Time
```powerquery
Time.FromText("1012")
```

Result: 
```powerquery
#time(10, 12, 00)
```


### Example #3
แปลง `"10"` เป็นค่า Time
```powerquery
Time.FromText("10")
```

Result: 
```powerquery
#time(10, 00, 00)
```




## Category
Time
