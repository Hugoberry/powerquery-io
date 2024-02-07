---
title: DateTimeZone.FromFileTime
---

# DateTimeZone.FromFileTime


สร้างโซนวันที่เวลาจากตัวเลขความยาว 64 บิต


## Syntax

```powerquery
DateTimeZone.FromFileTime(
    fileTime as number
) as datetimezone
```


## Remarks

สร้างค่า <code>datetimezone</code> จากค่า <code>fileTime</code> และแปลงเป็นโซนเวลาในท้องถิ่น filetimeคือค่าเวลาของไฟล์ Windows ที่แสดงตัวเลขช่วงเวลา 100 นาโนวินาทีที่ใช้ไปตั้งแต่เวลาเที่ยงคืน 12:00 วันที่ 1 มกราคม ค.ศ. 1601 (C.E.) ตามเวลามาตรฐานสากล (UTC)


## Examples

### Example #1 
แปลง &lt;code&gt;129876402529842245&lt;/code&gt; เป็นค่าโซนวันที่เวลา
```powerquery
DateTimeZone.FromFileTime(129876402529842245)
```

Result: 
```powerquery
#datetimezone(2012, 7, 24, 14, 50, 52.9842245, -7, 0)
```




## Category
DateTimeZone
