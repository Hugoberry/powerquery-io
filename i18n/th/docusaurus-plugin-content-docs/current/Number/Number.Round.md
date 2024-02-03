---
title: Number.Round
---

# Number.Round


## Description

ส่งกลับจำนวนที่ปัดเศษ จำนวนหลักและโหมดการปัดเศษสามารถระบุได้


## Syntax

```powerquery
Number.Round(
    number as number,
    optional digits as number,
    optional roundingMode as RoundingMode.Type
) as number
```


## Details

ส่งกลับผลลัพธ์ของการปัดเศษ <code>number</code> เป็นตัวเลขที่ใกล้เคียงที่สุด ถ้า <code>number</code> เป็น null <code>Number.Round</code> จะส่งกลับค่า null<br />      <br />      ตามค่าเริ่มต้น <code>number</code> จะถูกปัดเศษให้เป็นจำนวนเต็มที่ใกล้เคียงที่สุด และค่าที่เท่ากันจะใช้งานไม่ได้โดยการปัดเศษเป็นเลขคู่ที่ใกล้เคียงที่สุด (โดยใช้ <code>RoundingMode.ToEven</code> หรือที่รู้จักกันในชื่อ "การปัดเศษแบบพนักงานธนาคาร")<br />      <br />      อย่างไรก็ตาม ค่าเริ่มต้นเหล่านี้สามารถถูกแทนที่ได้ผ่านพารามิเตอร์ตัวเลือกดังต่อไปนี้      <ul>        <li><code>digits</code>: ทำให้ <code>number</code> จะถูกปัดเศษเป็นจำนวนหลักทศนิยมที่ระบุ</li>        <li><code>roundingMode</code>: แทนที่ลักษณะการแบ่งค่าที่เท่ากันเริ่มต้นเมื่อ <code>number</code> อยู่กึ่งกลางระหว่างค่าที่ปัดเศษที่เป็นไปได้สองค่า      (ดู <code>RoundingMode.Type</code> สำหรับค่าที่เป็นไปได้)</li>      </ul>


## Examples

### Example #1 
ปัดเศษ 1.234 เป็นจำนวนเต็มที่ใกล้เคียงที่สุด
```powerquery
Number.Round(1.234)
```

Result: 
```powerquery
1
```


### Example #2 
ปัดเศษ 1.56 เป็นจำนวนเต็มที่ใกล้เคียงที่สุด
```powerquery
Number.Round(1.56)
```

Result: 
```powerquery
2
```


### Example #3 
ปัดเศษ 1.2345 เป็นทศนิยมสองตำแหน่ง
```powerquery
Number.Round(1.2345, 2)
```

Result: 
```powerquery
1.23
```


### Example #4 
ปัดเศษ 1.2345 เป็นทศนิยมสามตำแหน่ง (ปัดเศษขึ้น)
```powerquery
Number.Round(1.2345, 3, RoundingMode.Up)
```

Result: 
```powerquery
1.235
```


### Example #5 
ปัดเศษ 1.2345 เป็นทศนิยมสามตำแหน่ง (ปัดเศษลง)
```powerquery
Number.Round(1.2345, 3, RoundingMode.Down)
```

Result: 
```powerquery
1.234
```




## Category
Number.Rounding
