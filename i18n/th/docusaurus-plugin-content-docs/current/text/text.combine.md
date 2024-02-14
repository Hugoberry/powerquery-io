---
title: Text.Combine
---

# Text.Combine


เชื่อมรายการของค่าข้อความเข้ากับค่าข้อความค่าใดค่าหนึ่ง


## Syntax

```powerquery
Text.Combine(
    texts as list,
    optional separator as text
) as text
```


## Remarks

ส่งกลับผลลัพธ์ของการรวมรายการค่าของข้อความ <code>texts</code> ลงในค่าข้อความเดียว ค่า <code>null</code> ใดๆ ที่แสดงอยู่ <code>texts</code> จะถูกละเว้น    สามารถระบุ <code>separator</code> เพิ่มเติมที่ใช้ในข้อความที่รวมขั้นสุดท้ายได้


## Examples

### Example #1 
รวมค่าข้อความ &#34;Seattle&#34; และ &#34;WA&#34;
```powerquery
Text.Combine({"Seattle", "WA"})
```

Result: 
```powerquery
"SeattleWA"
```


### Example #2 
รวมค่าข้อความ &#34;Seattle&#34; และ &#34;WA&#34; โดยคั่นด้วยเครื่องหมายจุลภาคและช่องว่าง
```powerquery
Text.Combine({"Seattle", "WA"}, ", ")
```

Result: 
```powerquery
"Seattle, WA"
```


### Example #3 
รวมค่า &#34;Seattle&#34;, &lt;code&gt;null&lt;/code&gt; และ &#34;WA&#34; โดยคั่นด้วยเครื่องหมายจุลภาคและช่องว่าง (โปรดทราบว่า &lt;code&gt;null&lt;/code&gt; จะถูกละเว้น)
```powerquery
Text.Combine({"Seattle", null, "WA"}, ", ")
```

Result: 
```powerquery
"Seattle, WA"
```




## Category
Text.Transformations
