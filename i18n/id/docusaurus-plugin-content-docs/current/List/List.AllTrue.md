---
title: List.AllTrue
---

# List.AllTrue


## Description

Menghasilkan benar jika semua ekspresi benar.


## Syntax

```powerquery
List.AllTrue(
    list as list
) as logical
```


## Details

Menghasilkan benar jika semua ekspresi dalam daftar <code>list</code> benar.


## Examples

### Example #1 
Menentukan apakah semua ekspresi dalam daftar \{true, true, 2 &gt; 0} benar.
```powerquery
List.AllTrue({true, true, 2 > 0})
```

Result: 
```powerquery
true
```


### Example #2 
Menentukan apakah semua ekspresi dalam daftar \{true, true, 2 &lt; 0} benar.
```powerquery
List.AllTrue({true, false, 2 < 0})
```

Result: 
```powerquery
false
```




## Category
List.Membership functions
