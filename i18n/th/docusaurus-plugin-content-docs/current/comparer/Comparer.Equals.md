---
title: Comparer.Equals
---

# Comparer.Equals


ส่งกลับค่าตรรกะตามการตรวจสอบความเท่ากันระหว่างค่าที่ระบุสองค่า


## Syntax

```powerquery
Comparer.Equals(
    comparer as function,
    x as any,
    y as any
) as logical
```


## Remarks

ส่งกลับค่า<code>เชิงตรรกะ</code>ตามการตรวจสอบความเท่ากันของค่าที่ระบุสองค่า <code>x</code> และ <code>y</code> โดยใช้ <code>comparer</code>       <div>         <code>comparer</code> คือ<code>ตัวเปรียบเทียบ</code> ซึ่งใช้เพื่อควบคุมการเปรียบเทียบ        ตัวเปรียบเทียบเป็นฟังก์ชันที่ยอมรับสองอาร์กิวเมนต์และส่งกลับ -1, 0 หรือ 1 โดยขึ้นอยู่กับว่าค่าแรกน้อยกว่า เท่ากับ  หรือมากกว่าค่าที่สอง         ตัวเปรียบเทียบสามารถใช้เพื่อให้การเปรียบเทียบที่ไม่ตรงตามตัวพิมพ์ใหญ่-เล็กหรือตามตำแหน่งที่ตั้งและวัฒนธรรม      </div>       <div>        ตัวเปรียบเทียบในตัวต่อไปนี้พร้อมใช้งานในภาษาสูตร:      </div>       <ul>         <li><code>Comparer.Ordinal</code>:  ใช้เพื่อดําเนินการเปรียบเทียบลําดับที่แน่นอน</li>        <li><code>Comparer.OrdinalIgnoreCase</code>: ใช้เพื่อดําเนินการเปรียบเทียบที่ไม่ตรงตามตัวพิมพ์ใหญ่-เล็กตามลําดับที่แน่นอน </li>        <li> <code>Comparer.FromCulture</code>: ใช้เพื่อดําเนินการเปรียบเทียบตามวัฒนธรรม</li>      </ul>


## Examples

### Example #1 
เปรียบเทียบ &#34;1&#34; และ &#34;A&#34; โดยใช้ภาษา &#34;en-US&#34; เพื่อดูว่าค่าเท่ากันหรือไม่
```powerquery
Comparer.Equals(Comparer.FromCulture("en-US"), "1", "A")
```

Result: 
```powerquery
false
```




## Category
Comparer
