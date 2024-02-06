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

ตรวจหาว่า <code>text</code> มีค่า <code>substring</code> หรือไม่ ส่งกลับเป็น true ถ้าพบค่า ฟังก์ชันนี้ไม่สนับสนุนอักขระตัวแทนหรือนิพจน์ทั่วไป      <br />      <br />      อาร์กิวเมนต์เพิ่มเติม <code>comparer</code> สามารถนำไปใช้เพื่อระบุการเปรียบเทียบการรับรู้ที่ตรงตามตัวพิมพ์ใหญ่-เล็ก หรือทางวัฒนธรรมและตําแหน่งที่ตั้ง      ตัวเปรียบเทียบที่มีอยู่แล้วภายในต่อไปนี้พร้อมใช้งานในภาษาสูตร:      <ul>        <li><code>Comparer.Ordinal</code>: ใช้เพื่อดําเนินการเปรียบเทียบลําดับที่ตรงตามตัวพิมพ์ใหญ่-เล็ก</li>        <li><code>Comparer.OrdinalIgnoreCase</code>: ใช้เพื่อดําเนินการเปรียบเทียบลําดับที่ไม่ตรงตามตัวพิมพ์ใหญ่-เล็ก</li>        <li> <code>Comparer.FromCulture</code>: ใช้เพื่อดําเนินการเปรียบเทียบการรับรู้ทางวัฒนธรรม</li>      </ul>


## Examples

### Example #1 
ค้นหาว่าข้อความ &#34;Hello World&#34; มี &#34;Hello&#34; หรือไม่
```powerquery
Text.Contains("Hello World", "Hello")
```

Result: 
```powerquery
true
```


### Example #2 
ค้นหาว่าข้อความ &#34;Hello World&#34; มี &#34;hello&#34; หรือไม่
```powerquery
Text.Contains("Hello World", "hello")
```

Result: 
```powerquery
false
```


### Example #3 
ค้นหาว่าข้อความ &#34;สวัสดี ทุกท่าน&#34; มี &#34;สวัสดี&#34; หรือไม่ โดยใช้ตัวเปรียบเทียบที่ไม่ตรงตามตัวพิมพ์ใหญ่-เล็ก
```powerquery
Text.Contains("Hello World", "hello", Comparer.OrdinalIgnoreCase)
```

Result: 
```powerquery
true
```




## Category
Text.Membership
