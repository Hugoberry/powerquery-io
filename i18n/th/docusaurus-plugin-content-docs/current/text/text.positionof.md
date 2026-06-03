---
title: Text.PositionOf
---

# Text.PositionOf


ส่งกลับตำแหน่งแรกของค่า (ส่งกลับ -1 ถ้าไม่พบ)


## Syntax

```powerquery
Text.PositionOf(
    text as text,
    substring as text,
    optional occurrence as Occurrence.Type,
    optional comparer as function
) as any
```


## Remarks

ส่งกลับตำแหน่งของเหตุการณ์ที่ระบุของค่าข้อความ `substring` ซึ่งพบใน `text` อาจมีการใช้พารามิเตอร์ตัวเลือก `occurrence` เพื่อระบุตำแหน่งเหตุการณ์เพื่อส่งกลับ (เหตุการณ์แรกตามค่าเริ่มต้น) ส่งกลับ -1 ถ้าไม่พบ `substring`

`comparer` เป็น `ตัวเปรียบเทียบ` ซึ่งใช้สำหรับควบคุมการเปรียบเทียบ สามารถใช้ตัวเปรียบเทียบในการเปรียบเทียบแบบไม่เทียบตรงตามตัวพิมพ์ใหญ่-เล็กหรือตามวัฒนธรรมและตามการรับรู้ภาษา

สามารถเลือกใช้งานรุ่นในตัวเปรียบเทียบดังต่อไปนี้ในภาษาสำหรับสูตร:

-   `ตัวเปรียบเทียบ.Ordinal` : ใช้สำหรับการเปรียบเทียบตามเลขลำดับที่ตรงกัน
-   `ตัวเปรียบเทียบ.เลขลำดับละเว้นตัวพิมพ์ใหญ่-เล็ก`: ใช้สำหรับการเปรียบเทียบเลขลำดับแบบไม่เทียบตรงตามตัวพิมพ์ใหญ่-เล็ก
-   `ตัวเปรียบเทียบ.FromCulture`: ใช้สำหรับการเปรียบเทียบตามวัฒนธรรม


## Examples

### Example #1
รับตำแหน่งการปรากฏครั้งแรกของ "World" ในข้อความ "Hello, World! Hello, World!"
```powerquery
Text.PositionOf("Hello, World! Hello, World!", "World")
```

Result: 
```powerquery
7
```


### Example #2
รับตำแหน่งการปรากฏครั้งสุดท้ายของ "World" ใน "Hello, World! Hello, World!"
```powerquery
Text.PositionOf("Hello, World! Hello, World!", "World", Occurrence.Last)
```

Result: 
```powerquery
21
```




## Category
Text.Membership
