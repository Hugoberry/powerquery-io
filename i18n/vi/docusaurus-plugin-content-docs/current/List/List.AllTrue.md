---
title: List.AllTrue
---

# List.AllTrue


Trả về true nếu tất cả các biểu thức đều đúng.


## Syntax

```powerquery
List.AllTrue(
    list as list
) as logical
```


## Remarks

Trả về true nếu tất cả các biểu thức trong danh sách <code>list</code> đều đúng.


## Examples

### Example #1 
Xác định tất cả các biểu thức trong danh sách \{true, true, 2 &gt; 0} có đúng không.
```powerquery
List.AllTrue({true, true, 2 > 0})
```

Result: 
```powerquery
true
```


### Example #2 
Xác định tất cả các biểu thức trong danh sách \{true, true, 2 &lt; 0} có đúng không.
```powerquery
List.AllTrue({true, false, 2 < 0})
```

Result: 
```powerquery
false
```




## Category
List.Membership functions
