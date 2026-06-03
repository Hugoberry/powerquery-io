---
title: Date.From
---

# Date.From


สร้างวันที่จากค่าที่กำหนด


## Syntax

```powerquery
Date.From(
    value as any,
    optional culture as text
) as date
```


## Remarks

ส่งคืนค่าวันที่จากค่าที่กำหนดให้

-   `value`: ค่าที่จะแปลงเป็นวันที่ หากค่าที่ให้มาเป็น `null` ฟังก์ชันนี้จะคืนค่า `null`. ถ้าค่าที่กำหนดคือ `date` จะส่งคืนค่า `value` ค่าประเภทต่อไปนี้สามารถแปลงเป็นค่า `date` ได้:
    -   `text`: A ค่า `date` จากการแสดงผลในรูปแบบข้อความ โปรดดู `Date.FromText` สำหรับรายละเอียดเพิ่มเติม
    -   `datetime`: คอมโพเนนต์วันที่ของ `value`
    -   `datetimezone`: คอมโพเนนต์วันที่ของวันที่เวลาท้องถิ่นที่เทียบเท่ากับ `value`
    -   `number`: The date component of the datetime equivalent of a floating-point number whose inteคอมโพเนนต์วันที่ของวันที่เวลาที่เทียบเท่ากับเลขทศนิยม โดยมีคอมโพเนนต์จำนวนเต็มคือจำนวนวันก่อนหรือหลังเที่ยงคืนวันที่ 30 ธันวาคม 1899 และมีคอมโพเนนต์เศษส่วนแสดงเวลาในวันนั้นหารด้วย 24 ตัวอย่างเช่น เที่ยงคืนวันที่ 31 ธันวาคม 1899 แสดงด้วย 1.0 6.00 น. วันที่ 1 มกราคม 1900 แสดงด้วย 2.25 เที่ยงคืนวันที่ 29 ธันวาคม 1899 แสดงด้วย -1.0 และ 6.00 น. วันที่ 29 ธันวาคม 1899 แสดงด้วย -1.25 ค่าฐานคือเที่ยงคืนวันที่ 30 ธันวาคม 1899 ค่าต่ำสุดคือเที่ยงคืนวันที่ 1 มกราคม 0100 ค่าสูงสุดคือวินาทีสุดท้ายของวันที่ 31 ธันวาคม 9999
    -   ถ้า `value` เป็นประเภทอื่นใด ระบบจะแสดงข้อผิดพลาด
-   `culture`: รูปแบบของค่าที่กำหนด (ตัวอย่างเช่น "en-US")


## Examples

### Example #1
แปลงวันที่และเวลาที่ระบุเป็นค่าวันที่
```powerquery
Date.From(#datetime(1899, 12, 30, 06, 45, 12))
```

Result: 
```powerquery
#date(1899, 12, 30)
```


### Example #2
แปลงตัวเลขที่ระบุเป็นค่าวันที่
```powerquery
Date.From(43910)
```

Result: 
```powerquery
#date(2020, 3, 20)
```


### Example #3
แปลงวันที่ข้อความภาษาเยอรมันในคอลัมน์วันที่โพสต์เป็นค่าวันที่
```powerquery
let
    Source = #table(type table [Account Code = text, Posted Date = text, Sales = number],
    {
        {"US-2004", "20 Januar 2023", 580},
        {"CA-8843", "18 Juli, 2023", 280},
        {"PA-1274", "12 Januar, 2022", 90},
        {"PA-4323", "14 April 2023", 187},
        {"US-1200", "14 Dezember, 2022", 350},
        {"PTY-507", "4 Juni, 2023", 110}
    }),
    #"Filtered rows" = Table.TransformColumns(
        Source,
        {"Posted Date", each Date.From(_, "de-DE"), type date}
    )
in
    #"Filtered rows"
```

Result: 
```powerquery
#table(type table [Account Code = text, Posted Date = date, Sales = number],
{
    {"US-2004", #date(2023, 1, 20), 580},
    {"CA-8843", #date(2023, 7, 18), 280},
    {"PA-1274", #date(2022, 1, 12), 90},
    {"PA-4323", #date(2023, 4, 14), 187},
    {"US-1200", #date(2022, 12, 14), 350},
    {"PTY-507", #date(2023, 6, 4), 110}
})
```




## Category
Date
