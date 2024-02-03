---
title: List.AnyTrue
---

# List.AnyTrue


## Description

Menghasilkan benar jika ekspresi apa pun benar.


## Syntax

```powerquery
List.AnyTrue(
    list as list
) as logical
```


## Details

Menghasilkan benar jika ekspresi apa pun dalam daftar <code>list</code> benar.


## Examples

### Example #1 
Menentukan apakah salah satu ekspresi dalam daftar \{true, false, 2 &gt; 0} benar.
```powerquery
List.AnyTrue({true, false, 2>0})
```

Result: 
```powerquery
true
```


### Example #2 
Menentukan apakah salah satu ekspresi dalam daftar \{2 = 0, false, 2 &lt; 0} benar.
```powerquery
List.AnyTrue({2 = 0, false, 2 < 0})
```

Result: 
```powerquery
false
```




## Category
List.Membership functions
