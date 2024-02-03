---
title: List.AllTrue
---

# List.AllTrue


## Description

Mengembalikan benar jika semua ungkapan adalah benar.


## Syntax

```powerquery
List.AllTrue(
    list as list
) as logical
```


## Details

Mengembalikan benar jika semua ungkapan dalam senarai <code>list</code> adalah benar.


## Examples

### Example #1 
Menentukan sama ada semua ungkapan dalam senarai \{true, true, 2 &gt; 0} adalah benar.
```powerquery
List.AllTrue({true, true, 2 > 0})
```

Result: 
```powerquery
true
```


### Example #2 
Menentukan sama ada semua ungkapan dalam senarai \{true, true, 2 &lt; 0} adalah benar.
```powerquery
List.AllTrue({true, false, 2 < 0})
```

Result: 
```powerquery
false
```




## Category
List.Membership functions
