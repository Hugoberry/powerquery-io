---
title: List.AnyTrue
---

# List.AnyTrue


## Description

ส่งกลับเป็น true ถ้านิพจน์ใดๆ เป็น true


## Syntax

```powerquery
List.AnyTrue(
    list as list
) as logical
```


## Details

ส่งกลับเป็น true ถ้านิพจน์ใดๆ ในรายการ <code>list</code> เป็น true


## Examples

### Example #1 
กำหนดว่านิพจน์ใดๆ ในรายการ \{true, false, 2 &gt; 0} เป็น true หรือไม่
```powerquery
List.AnyTrue({true, false, 2>0})
```

Result: 
```powerquery
true
```


### Example #2 
กำหนดว่านิพจน์ใดๆ ในรายการ \{2 = 0, false, 2 &lt; 0} เป็น true หรือไม่
```powerquery
List.AnyTrue({2 = 0, false, 2 < 0})
```

Result: 
```powerquery
false
```




## Category
List.Membership functions
