---
title: Comparer.OrdinalIgnoreCase
---

# Comparer.OrdinalIgnoreCase


## Description

ส่งกลับฟังก์ชันตัวเปรียบเทียบแบบไม่เทียบตรงตามตัวพิมพ์ใหญ่-เล็กซึ่งใช้กฎเลขลำดับในการเปรียบเทียบค่า


## Syntax

```powerquery
Comparer.OrdinalIgnoreCase(
    x as any,
    y as any
) as number
```


## Details

ส่งกลับฟังก์ชันตัวเปรียบเทียบที่ไม่ตรงตามตัวพิมพ์ใหญ่-เล็กที่ใช้กฎเลขลําดับเพื่อเปรียบเทียบค่าที่ระบุ <code>x</code> และ <code>y</code><br />        <br /> 
        ฟังก์ชันตัวเปรียบเทียบยอมรับสองอาร์กิวเมนต์และส่งกลับ -1, 0 หรือ 1 โดยขึ้นอยู่กับว่าค่าแรกน้อยกว่า เท่ากับ  หรือมากกว่าค่าที่สอง    


## Examples

### Example #1 
การใช้กฎเลขลำดับแบบไม่เทียบตรงตามตัวพิมพ์ใหญ่-เล็ก เปรียบเทียบ &#34;Abc&#34; กับ &#34;abc&#34; หมายหตุ &#34;Abc&#34; จะมีค่าน้อยกว่า &#34;abc&#34; โดยใช้ &lt;code&gt;Comparer.Ordinal&lt;/code&gt;
```powerquery
Comparer.OrdinalIgnoreCase("Abc", "abc")
```

Result: 
```powerquery
0
```




## Category
Comparer
