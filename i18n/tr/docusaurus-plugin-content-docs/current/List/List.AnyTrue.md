---
title: List.AnyTrue
---

# List.AnyTrue


## Description

Herhangi bir ifade doğru ise doğru değerini döndürür.


## Syntax

```powerquery
List.AnyTrue(
    list as list
) as logical
```


## Details

<code>list</code> listesindeki herhangi bir ifade doğru ise doğru değerini döndürür.


## Examples

### Example #1 
\{true, false, 2 &gt; 0} listesindeki herhangi bir ifadenin doğru olup olmadığını belirler.
```powerquery
List.AnyTrue({true, false, 2>0})
```

Result: 
```powerquery
true
```


### Example #2 
\{2 = 0, false, 2 &lt; 0} listesindeki herhangi bir ifadenin doğru olup olmadığını belirler.
```powerquery
List.AnyTrue({2 = 0, false, 2 < 0})
```

Result: 
```powerquery
false
```




## Category
List.Membership functions
