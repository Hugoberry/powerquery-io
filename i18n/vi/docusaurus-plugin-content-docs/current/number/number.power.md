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

Trả về kết quả sau khi đưa `number` lên lũy thừa `power`. Nếu `number` hoặc `power` là giá trị null thì `Number.Power` trả về giá trị null.

-   `number`: Cơ số.
-   `power`: Số mũ.


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
