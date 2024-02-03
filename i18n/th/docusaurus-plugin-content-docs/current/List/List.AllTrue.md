---
title: List.AllTrue
---

# List.AllTrue


## Description

ส่งกลับเป็น true ถ้านิพจน์ทั้งหมดเป็น true


## Syntax

```powerquery
List.AllTrue(
    list as list
) as logical
```


## Details

ส่งกลับเป็น true ถ้านิพจน์ทั้งหมดในรายการ <code>list</code> เป็น true


## Examples

### Example #1 
กำหนดว่านิพจน์ทั้งหมดในรายการ \{true, true, 2 &gt; 0} เป็น true หรือไม่
```powerquery
List.AllTrue({true, true, 2 > 0})
```

Result: 
```powerquery
true
```


### Example #2 
กำหนดว่านิพจน์ทั้งหมดในรายการ \{true, true, 2 &lt; 0} เป็น true หรือไม่
```powerquery
List.AllTrue({true, false, 2 < 0})
```

Result: 
```powerquery
false
```




## Category
List.Membership functions
