---
title: Value.FromText
---

# Value.FromText


สร้างค่าที่กำหนดชนิดไว้ล่วงหน้าจากข้อความสำหรับแสดงแทน


## Syntax

```powerquery
Value.FromText(
    text as any,
    optional culture as text
) as any
```


## Remarks

ถอดรหัสค่าจากการแสดงข้อความและแปลว่าเป็นค่าที่มีประเภทที่เหมาะสม

-   `text`: ข้อความที่จะแปล
-   `culture`: (ไม่บังคับ) วัฒนธรรมเฉพาะที่ใช้ในการแปลข้อความ (ตัวอย่างเช่น "th-TH")

ฟังก์ชันนี้รับค่าข้อความและส่งคืนค่าชนิด `number`, `logical`, `null`, `datetime`, `duration` หรือ `text` ค่าข้อความที่ว่างเปล่าจะถูกแปลเป็นค่า `null`


## Examples

### Example #1
แปลงข้อความที่แสดงตัวเลขเป็นค่าตัวเลขที่สอดคล้องกัน
```powerquery
Value.FromText("12345.6789")
```

Result: 
```powerquery
12345.6789
```


### Example #2
แปลงข้อความที่แสดงเปอร์เซ็นต์เป็นค่าตัวเลขที่สอดคล้องกัน
```powerquery
Value.FromText("25.4%")
```

Result: 
```powerquery
0.254
```


### Example #3
แปลงข้อความที่แสดงค่ายูโรฝรั่งเศสเป็นค่าตัวเลขที่สอดคล้องกัน
```powerquery
Value.FromText("€1,190", "fr-FR")
```

Result: 
```powerquery
1.19
```


### Example #4
แปลงข้อความที่แสดงวันที่และเวลาเยอรมันให้เป็นค่าวันที่และเวลาที่สอดคล้องกัน
```powerquery
Value.FromText("24 Dez 2024 14:33:20", "de-DE")
```

Result: 
```powerquery
#datetime(2024, 12, 24, 14, 33, 20)
```




## Category
Text.Conversions from and to text
