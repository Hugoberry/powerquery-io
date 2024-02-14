---
title: Number.IsNaN
---

# Number.IsNaN


Cho biết giá trị có phải là NaN (không phải số) hay không.


## Syntax

```powerquery
Number.IsNaN(
    number as number
) as logical
```


## Remarks

Cho biết giá trị có phải là NaN (không phải số) hay không. Trả về <code>true</code> nếu <code>number</code> tương đương với <code>Number.IsNaN</code>, <code>false</code> nếu ngược lại.


## Examples

### Example #1 
Kiểm tra 0 chia cho 0 có phải là NaN hay không.
```powerquery
Number.IsNaN(0/0)
```

Result: 
```powerquery
true
```


### Example #2 
Kiểm tra 1 chia cho 0 có phải là NaN hay không.
```powerquery
Number.IsNaN(1/0)
```

Result: 
```powerquery
false
```




## Category
Number.Information
