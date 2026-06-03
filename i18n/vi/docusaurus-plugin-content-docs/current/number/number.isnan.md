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

Cho biết giá trị có phải là NaN (không phải số) hay không. Trả về `true` nếu `number` tương đương với `Number.NaN`, nếu không thì trả về `false`.


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
