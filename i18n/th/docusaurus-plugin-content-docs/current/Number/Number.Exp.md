---
title: Number.Exp
---

# Number.Exp


## Description

ยกกำลัง e ด้วยตัวเลขที่ระบุ


## Syntax

```powerquery
Number.Exp(
    number as number
) as number
```


## Details

ส่งคืนผลลัพธ์ของการยกกำลัง e ของ <code>number</code> (ฟังก์ชันเอ็กซ์โพเนนเชียล)      <ul>        <li><code>number</code>: <code>ตัวเลข</code> ซึ่งมีการคำนวณฟังก์ชันเอ็กซ์โพเนนเชียล ถ้า <code>number</code> เป็น null <code>ตัวเลข.Exp</code> จะส่งคืนค่าเป็น null </li>      </ul>


## Examples

### Example #1 
ยกกำลัง e ด้วยเลข 3
```powerquery
Number.Exp(3)
```

Result: 
```powerquery
20.085536923187668
```




## Category
Number.Operations
