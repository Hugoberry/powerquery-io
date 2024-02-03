---
title: Number.IsOdd
---

# Number.IsOdd


## Description

Cho biết giá trị có lẻ hay không.


## Syntax

```powerquery
Number.IsOdd(
    number as number
) as logical
```


## Details

Cho biết giá trị có lẻ hay không. Trả về <code>true</code> nếu <code>number</code> là số lẻ, <code>false</code> nếu ngược lại.


## Examples

### Example #1 
Kiểm tra 625 có phải là số lẻ hay không.
```powerquery
Number.IsOdd(625)
```

Result: 
```powerquery
true
```


### Example #2 
Kiểm tra 82 có phải là số lẻ hay không.
```powerquery
Number.IsOdd(82)
```

Result: 
```powerquery
false
```




## Category
Number.Information
