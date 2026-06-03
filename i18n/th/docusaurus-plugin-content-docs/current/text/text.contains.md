---
title: Text.Contains
---

# Text.Contains


ส่งกลับว่าข้อความมีสตริงย่อยหรือไม่


## Syntax

```powerquery
Text.Contains(
    text as text,
    substring as text,
    optional comparer as function
) as logical
```


## Remarks

ตรวจสอบว่า `text` มีค่า `substring` หรือไม่ ส่งกลับเป็น true ถ้าพบค่า ฟังก์ชันนี้ไม่สนับสนุนอักขระตัวแทนหรือนิพจน์ทั่วไป  
  
อาร์กิวเมนต์เพิ่มเติม `comparer` สามารถนำไปใช้เพื่อระบุการเปรียบเทียบการรับรู้ที่ตรงตามตัวพิมพ์ใหญ่-เล็ก หรือรูปแบบและตําแหน่งที่ตั้ง ตัวเปรียบเทียบที่มีอยู่แล้วภายในต่อไปนี้พร้อมใช้งานในภาษาสูตร:

-   `Comparer.Ordinal`: ใช้เพื่อดําเนินการเปรียบเทียบลําดับที่ตรงตามตัวพิมพ์ใหญ่-เล็ก
-   `Comparer.OrdinalIgnoreCase`: ใช้เพื่อดําเนินการเปรียบเทียบลําดับที่ไม่ตรงตามตัวพิมพ์ใหญ่-เล็ก
-   `Comparer.FromCulture`: ใช้เพื่อทำการเปรียบเทียบโดยคำนึงถึงความแตกต่างของรูปแบบ

ถ้าอาร์กิวเมนต์แรกเป็นค่าว่าง ฟังก์ชันนี้จะคืนค่าว่าง  
  
ตัวอักษรทุกตัวได้รับการตีความตามตัวอักษร ตัวอย่างเช่น "DR", "DR", "DR" และ "DR" ไม่ถือว่ามีความเท่าเทียมกัน


## Examples

### Example #1
ค้นหาว่าข้อความ "Hello World" มี "Hello" หรือไม่
```powerquery
Text.Contains("Hello World", "Hello")
```

Result: 
```powerquery
true
```


### Example #2
ค้นหาว่าข้อความ "Hello World" มี "hello" หรือไม่
```powerquery
Text.Contains("Hello World", "hello")
```

Result: 
```powerquery
false
```


### Example #3
ค้นหาว่าข้อความ "สวัสดี ทุกท่าน" มี "สวัสดี" หรือไม่ โดยใช้ตัวเปรียบเทียบที่ไม่ตรงตามตัวพิมพ์ใหญ่-เล็ก
```powerquery
Text.Contains("Hello World", "hello", Comparer.OrdinalIgnoreCase)
```

Result: 
```powerquery
true
```


### Example #4
ค้นหาแถวในตารางที่มี "A-" หรือ "7" ในรหัสบัญชี
```powerquery
let
    Source = #table(type table [Account Code = text, Posted Date = date, Sales = number],
    {
        {"US-2004", #date(2023,1,20), 580},
        {"CA-8843", #date(2023,7,18), 280},
        {"PA-1274", #date(2022,1,12), 90},
        {"PA-4323", #date(2023,4,14), 187},
        {"US-1200", #date(2022,12,14), 350},
        {"PTY-507", #date(2023,6,4), 110}
    }),
    #"Filtered rows" = Table.SelectRows(
        Source,
        each Text.Contains([Account Code], "A-") or
            Text.Contains([Account Code], "7"))
in
    #"Filtered rows"
    
```

Result: 
```powerquery
#table(type table [Account Code = text, Posted Date = date, Sales = number],
{
    {"CA-8843", #date(2023,7,18), 280},
    {"PA-1274", #date(2022,1,12), 90},
    {"PA-4323", #date(2023,4,14), 187},
    {"PTY-507", #date(2023,6,4), 110}
})
    
```




## Category
Text.Membership
