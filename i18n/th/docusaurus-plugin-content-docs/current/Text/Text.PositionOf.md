---
title: Text.PositionOf
---

# Text.PositionOf


## Description

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


## Details

ส่งกลับตำแหน่งของเหตุการณ์ที่ระบุของค่าข้อความ <code>substring</code> ซึ่งพบใน <code>text</code>    อาจมีการใช้พารามิเตอร์ตัวเลือก <code>occurrence</code> เพื่อระบุตำแหน่งเหตุการณ์เพื่อส่งกลับ (เหตุการณ์แรกตามค่าเริ่มต้น)    ส่งกลับ -1 ถ้าไม่พบ <code>substring</code>      <div>        <code>comparer</code> เป็น <code>ตัวเปรียบเทียบ</code> ซึ่งใช้สำหรับควบคุมการเปรียบเทียบ สามารถใช้ตัวเปรียบเทียบในการเปรียบเทียบแบบไม่เทียบตรงตามตัวพิมพ์ใหญ่-เล็กหรือตามวัฒนธรรมและตามการรับรู้ภาษา      </div>      <div>        สามารถเลือกใช้งานรุ่นในตัวเปรียบเทียบดังต่อไปนี้ในภาษาสำหรับสูตร:      </div>      <ul>        <li><code>ตัวเปรียบเทียบ.Ordinal</code> : ใช้สำหรับการเปรียบเทียบตามเลขลำดับที่ตรงกัน</li>        <li><code>ตัวเปรียบเทียบ.เลขลำดับละเว้นตัวพิมพ์ใหญ่-เล็ก</code>: ใช้สำหรับการเปรียบเทียบเลขลำดับแบบไม่เทียบตรงตามตัวพิมพ์ใหญ่-เล็ก</li>        <li> <code>ตัวเปรียบเทียบ.FromCulture</code>: ใช้สำหรับการเปรียบเทียบตามวัฒนธรรม</li>      </ul>


## Examples

### Example #1 
รับตำแหน่งการปรากฏครั้งแรกของ &#34;World&#34; ในข้อความ &#34;Hello, World! Hello, World!&#34;
```powerquery
Text.PositionOf("Hello, World! Hello, World!", "World")
```

Result: 
```powerquery
7
```


### Example #2 
รับตำแหน่งการปรากฏครั้งสุดท้ายของ &#34;World&#34; ใน &#34;Hello, World! Hello, World!&#34;
```powerquery
Text.PositionOf("Hello, World! Hello, World!", "World", Occurrence.Last)
```

Result: 
```powerquery
21
```




## Category
Text.Membership
