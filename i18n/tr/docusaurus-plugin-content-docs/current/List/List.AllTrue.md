---
title: List.AllTrue
---

# List.AllTrue


## Description

Tüm ifadeler doğru ise doğru değerini döndürür.


## Syntax

```powerquery
List.AllTrue(
    list as list
) as logical
```


## Details

<code>list</code> listesindeki tüm ifadeler doğru ise doğru değerini döndürür.


## Examples

### Example #1 
\{true, true, 2 &gt; 0} listesindeki tüm ifadelerin doğru olup olmadığını belirler.
```powerquery
List.AllTrue({true, true, 2 > 0})
```

Result: 
```powerquery
true
```


### Example #2 
\{true, true, 2 &lt; 0} listesindeki tüm ifadelerin doğru olup olmadığını belirler.
```powerquery
List.AllTrue({true, false, 2 < 0})
```

Result: 
```powerquery
false
```




## Category
List.Membership functions
