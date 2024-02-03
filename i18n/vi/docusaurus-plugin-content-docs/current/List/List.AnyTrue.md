---
title: List.AnyTrue
---

# List.AnyTrue


## Description

Trả về true nếu mọi biểu thức đều đúng.


## Syntax

```powerquery
List.AnyTrue(
    list as list
) as logical
```


## Details

Trả về true nếu mọi biểu thức trong danh sách <code>list</code> đều đúng.


## Examples

### Example #1 
Xác định có biểu thức nào trong số các biểu thức thuộc danh sách \{true, false, 2 &gt; 0} đúng không.
```powerquery
List.AnyTrue({true, false, 2>0})
```

Result: 
```powerquery
true
```


### Example #2 
Xác định xem có biểu thức nào trong số các biểu thức thuộc danh sách \{2 = 0, false, 2 &lt; 0} đúng không.
```powerquery
List.AnyTrue({2 = 0, false, 2 < 0})
```

Result: 
```powerquery
false
```




## Category
List.Membership functions
