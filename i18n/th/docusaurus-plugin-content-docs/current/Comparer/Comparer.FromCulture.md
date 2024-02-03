---
title: Comparer.FromCulture
---

# Comparer.FromCulture


## Description

ส่งกลับฟังก์ชันตัวเปรียบเทียบตามความไวต่อวัฒนธรรมและตัวพิมพ์ใหญ่-เล็กที่ระบุ


## Syntax

```powerquery
Comparer.FromCulture(
    culture as text,
    optional ignoreCase as logical
) as function
```


## Details

ส่งกลับฟังก์ชันตัวเปรียบเทียบที่ใช้ <code>culture</code> และความไวของตัวพิมพ์ใหญ่-เล็กที่ระบุโดย <code>ignoreCase</code> เพื่อดําเนินการเปรียบเทียบ<br /> <br />      ฟังก์ชันตัวเปรียบเทียบยอมรับสองอาร์กิวเมนต์และส่งกลับ -1, 0 หรือ 1 โดยขึ้นอยู่กับว่าค่าแรกน้อยกว่า เท่ากับ  หรือมากกว่าค่าที่สอง<br />      <br />      ค่าเริ่มต้นสําหรับ <code>ignoreCase</code> เป็นเท็จ <code>culture</code> ควรเป็นหนึ่งในตําแหน่งที่ตั้งที่ได้รับการสนับสนุนโดย .NET framework (ตัวอย่างเช่น "en-US")    


## Examples

### Example #1 
เปรียบเทียบ &#34;a&#34; กับ &#34;A&#34; โดยใช้ภาษา &#34;en-US&#34; เพื่อดูว่าค่าเท่ากันหรือไม่
```powerquery
Comparer.FromCulture("en-US")("a", "A")
```

Result: 
```powerquery
-1
```


### Example #2 
เปรียบเทียบ &#34;a&#34; กับ &#34;A&#34; โดยใช้ภาษา &#34;en-US&#34; และไม่คำนึงถึงตัวพิมพ์ใหญ่พิมพ์เล็ก เพื่อดูว่าค่าทั้งสองเท่ากันหรือไม่
```powerquery
Comparer.FromCulture("en-US", true)("a", "A")
```

Result: 
```powerquery
0
```




## Category
Comparer
