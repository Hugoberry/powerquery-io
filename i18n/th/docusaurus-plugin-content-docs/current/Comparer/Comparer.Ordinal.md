---
title: Comparer.Ordinal
---

# Comparer.Ordinal


## Description

ส่งกลับฟังก์ชันตัวเปรียบเทียบซึ่งใช้กฎเลขแสดงลำดับเพื่อเปรียบเทียบค่า


## Syntax

```powerquery
Comparer.Ordinal(
    x as any,
    y as any
) as number
```


## Details

ส่งกลับฟังก์ชันตัวเปรียบเทียบที่ใช้กฎเลขลําดับเพื่อเปรียบเทียบค่าที่ระบุ <code>x</code> และ <code>y</code><br />      <br />       ฟังก์ชันตัวเปรียบเทียบยอมรับสองอาร์กิวเมนต์และส่งกลับ -1, 0 หรือ 1 โดยขึ้นอยู่กับว่าค่าแรกว่าน้อยกว่า เท่ากับ หรือมากกว่าค่าที่สอง    


## Examples

### Example #1 
การใช้กฎเลขลำดับจะเปรียบเทียบว่า &#34;encyclopædia&#34; และ &#34;encyclopaedia&#34; เทียบเท่ากันหรือไม่ โปรดทราบว่าคำเหล่านี้เทียบเท่ากันโดยใช้ &lt;code&gt;Comparer.FromCulture(&#34;en-US&#34;)&lt;/code&gt; 
```powerquery
Comparer.Equals(Comparer.Ordinal, "encyclopædia", "encyclopaedia")
```

Result: 
```powerquery
false
```




## Category
Comparer
