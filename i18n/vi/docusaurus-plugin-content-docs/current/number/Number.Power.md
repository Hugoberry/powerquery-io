---
title: Number.Power
---

# Number.Power


Tăng một số lên lũy thừa cho sẵn.


## Syntax

```powerquery
Number.Power(
    number as number,
    power as number
) as number
```


## Remarks

Trả về kết quả sau khi đưa <code>number</code> lên lũy thừa <code>power</code>.    Nếu <code>number</code> hoặc <code>power</code> là giá trị null thì <code>Number.Power</code> trả về giá trị null.      <ul>        <li><code>number</code>: Cơ số.</li>        <li><code>power</code>: Số mũ.</li>      </ul>


## Examples

### Example #1 
Tìm giá trị của 5 sau khi được tăng lên lũy thừa 3 (lũy thừa 3 của 5).
```powerquery
Number.Power(5, 3)
```

Result: 
```powerquery
125
```




## Category
Number.Operations
