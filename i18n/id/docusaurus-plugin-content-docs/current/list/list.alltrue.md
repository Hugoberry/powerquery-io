---
title: List.AllTrue
---

# List.AllTrue


Menghasilkan benar jika semua ekspresi benar.


## Syntax

```powerquery
List.AllTrue(
    list as list
) as logical
```


## Remarks

Menghasilkan benar jika semua ekspresi dalam daftar `list` benar.


## Examples

### Example #1
Menentukan apakah semua ekspresi dalam daftar \{true, true, 2 > 0\} benar.
```powerquery
List.AllTrue({true, true, 2 > 0})
```

Result: 
```powerquery
true
```


### Example #2
Menentukan apakah semua ekspresi dalam daftar \{true, true, 2 &lt; 0\} benar.
```powerquery
List.AllTrue({true, false, 2 < 0})
```

Result: 
```powerquery
false
```




## Category
List.Membership functions
