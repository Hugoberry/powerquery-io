---
title: List.AnyTrue
---

# List.AnyTrue


Mengembalikan benar jika sebarang ungkapan adalah benar.


## Syntax

```powerquery
List.AnyTrue(
    list as list
) as logical
```


## Remarks

Mengembalikan benar jika sebarang ungkapan dalam senarai `list` adalah benar.


## Examples

### Example #1
Menentukan sama ada sebarang ungkapan dalam senarai \{true, false, 2 > 0\} adalah benar.
```powerquery
List.AnyTrue({true, false, 2>0})
```

Result: 
```powerquery
true
```


### Example #2
Menentukan sama ada sebarang ungkapan dalam senarai \{2 = 0, false, 2 &lt; 0\} adalah benar.
```powerquery
List.AnyTrue({2 = 0, false, 2 < 0})
```

Result: 
```powerquery
false
```




## Category
List.Membership functions
