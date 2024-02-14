---
title: DateTime.FromFileTime
---

# DateTime.FromFileTime


สร้างวันที่เวลาจากตัวเลขความยาว 64 บิต


## Syntax

```powerquery
DateTime.FromFileTime(
    fileTime as number
) as datetime
```


## Remarks

สร้างค่า <code>datetime</code> จากค่า <code>fileTime</code> และแปลงเป็นโซนเวลาในท้องถิ่น เวลาแฟ้มคือค่าเวลาของแฟ้ม Windows ที่แสดงตัวเลขช่วงเวลา 100 นาโนวินาทีที่ใช้ไปตั้งแต่เที่ยงคืนเวลา 12:00 วันที่ 1 มกราคม ค.ศ. 1601 (C.E.) เวลามาตรฐานสากล (UTC)


## Examples

### Example #1 
แปลง &lt;code&gt;129876402529842245&lt;/code&gt; เป็นค่าวันที่เวลา
```powerquery
DateTime.FromFileTime(129876402529842245)
```

Result: 
```powerquery
#datetime(2012, 7, 24, 14, 50, 52.9842245)
```




## Category
DateTime
