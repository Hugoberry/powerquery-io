---
title: Date.FromText
---

# Date.FromText


สร้าง Date จากรูปแบบ Date ท้องถิ่น สากล และแบบกำหนดเอง


## Syntax

```powerquery
Date.FromText(
    text as text,
    optional options as any
) as date
```


## Remarks

สร้างค่าวันที่จากข้อมูลที่เป็นข้อความ

-   `text`: ค่าข้อความที่จะแปลงเป็นวันที่
-   `options`: `record` ที่เป็นตัวเลือก ซึ่งสามารถระบุคุณสมบัติเพิ่มเติมได้ `record` สามารถมีเขตข้อมูลต่อไปนี้:
    -   `Format`: ค่า `text` ที่ระบุรูปแบบที่จะใช้ สำหรับรายละเอียดเพิ่มเติม โปรดไปที่ https://go.microsoft.com/fwlink/?linkid=2180104 และ https://go.microsoft.com/fwlink/?linkid=2180105 การละเว้นช่องนี้หรือการระบุค่า `null` จะส่งผลให้การประมวลผลวันที่ใช้ความพยายามอย่างเต็มที่
    -   `Culture`: เมื่อ `Format` ไม่เป็นค่าว่าง `Culture` จะควบคุมตัวกำหนดรูปแบบบางอย่าง ตัวอย่างเช่น ใน `"en-US"` `"MMM"` เป็น `"Jan", "Feb", "Mar", ...` ในขณะที่ใน `"ru-RU"` `"MMM"` เป็น `"янв", "фев", "мар", ...` เมื่อ `Format` เป็น `null`, `Culture` จะควบคุมรูปแบบเริ่มต้นที่จะใช้ เมื่อ `Culture` เป็น `null` หรือละไว้ จะใช้ `Culture.Current`

เพื่อสนับสนุนเวิร์กโฟลว์แบบดั้งเดิม `options` อาจเป็นค่าข้อความ ซึ่งมีวิธีการทำงานเหมือนกับ `options = [Format = null, Culture = options]`.


## Examples

### Example #1
แปลง `"2010-12-31"` เป็นค่า `date`
```powerquery
Date.FromText("2010-12-31")
```

Result: 
```powerquery
#date(2010, 12, 31)
```


### Example #2
แปลงโดยใช้รูปแบบที่กำหนดเองและวัฒนธรรมเยอรมัน
```powerquery
Date.FromText("30 Dez 2010", [Format="dd MMM yyyy", Culture="de-DE"])
```

Result: 
```powerquery
#date(2010, 12, 30)
```


### Example #3
ค้นหาวันที่ในปฏิทินคริสต์ศักราชที่สอดคล้องกับกับการเริ่มต้นของปี 1400 ในปฏิทินฮิจเราะห์
```powerquery
Date.FromText("1400", [Format="yyyy", Culture="ar-SA"])
```

Result: 
```powerquery
#date(1979, 11, 20)
```


### Example #4
แปลงวันที่ข้อความภาษาอิตาลีที่มีเดือนเป็นตัวย่อในคอลัมน์วันที่โพสต์เป็นค่าวันที่
```powerquery
let
    Source = #table(type table [Account Code = text, Posted Date = text, Sales = number],
    {
        {"US-2004", "20 gen. 2023", 580},
        {"CA-8843", "18 lug. 2024", 280},
        {"PA-1274", "12 gen. 2023", 90},
        {"PA-4323", "14 apr. 2023", 187},
        {"US-1200", "14 dic. 2023", 350},
        {"PTY-507", "4 giu. 2024", 110}
    }),
    #"Converted Date" = Table.TransformColumns(
        Source,
        {"Posted Date", each Date.FromText(_, [Culture = "it-IT"]), type date}
    )
in
    #"Converted Date"
```

Result: 
```powerquery
#table(type table [Account Code = text, Posted Date = date, Sales = number],
{
    {"US-2004", #date(2023, 1, 20), 580},
    {"CA-8843", #date(2024, 7, 18), 280},
    {"PA-1274", #date(2023, 1, 12), 90},
    {"PA-4323", #date(2023, 4, 14), 187},
    {"US-1200", #date(2023, 12, 14), 350},
    {"PTY-507", #date(2024, 6, 4), 110}
})
```




## Category
Date
