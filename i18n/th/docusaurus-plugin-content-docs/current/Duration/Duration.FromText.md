---
title: Duration.FromText
---

# Duration.FromText


ส่งกลับค่าระยะเวลาจากรูปแบบเวลาที่ใช้ไปเป็นข้อความ (d.h:m:s)


## Syntax

```powerquery
Duration.FromText(
    text as text
) as duration
```


## Remarks

ส่งกลับค่าระยะเวลาจากข้อความที่ระบุ <code>text</code> สามารถแยกวิเคราะห์รูปแบบต่อไปนี้ด้วยฟังก์ชันนี้:  <ul>        <li>(-)hh:mm(:ss(.ff)) </li>        <li>(-)ddd(.hh:mm(:ss(.ff))) </li> </ul>        <br />        (รวมช่วงทั้งหมดไว้ด้วย)<br />        ddd: จำนวนวัน<br />        hh: จำนวนชั่วโมง ระหว่าง 0 ถึง 23<br />        mm: จำนวนนาที ระหว่าง 0 ถึง 59<br />        ss: จำนวนวินาที ระหว่าง 0 ถึง 59<br />        ff: เสี้ยววินาที ระหว่าง 0 ถึง 9999999


## Examples

### Example #1 
แปลง &lt;code&gt;&#34;2.05:55:20&#34;&lt;/code&gt; เป็นค่า &lt;code&gt;duration&lt;/code&gt;
```powerquery
Duration.FromText("2.05:55:20")
```

Result: 
```powerquery
#duration(2, 5, 55, 20)
```




## Category
Duration
