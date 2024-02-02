---
title: List.AnyTrue
---

# List.AnyTrue


## Description

Retourne true si l&#39;une des expressions a la valeur true.


## Syntax

```powerquery
List.AnyTrue(
    list as list
) as logical
```


## Details

Retourne true si l'une des expressions dans la liste <code>list</code> a la valeur true.


## Examples

### Example #1 
Détermine si l&#39;une des expressions dans la liste \{true, false, 2 &gt; 0} a la valeur true.
```powerquery
List.AnyTrue({true, false, 2>0})
```

Result: 
```powerquery
true
```


### Example #2 
Détermine si l&#39;une des expressions dans la liste \{2 = 0, false, 2 &lt; 0} a la valeur true.
```powerquery
List.AnyTrue({2 = 0, false, 2 < 0})
```

Result: 
```powerquery
false
```




## Category
List.Membership functions
