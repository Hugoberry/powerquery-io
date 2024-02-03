---
title: List.AnyTrue
---

# List.AnyTrue


## Description

Кез келген өрнек шын болса, шын мәнін қайтарады.


## Syntax

```powerquery
List.AnyTrue(
    list as list
) as logical
```


## Details

<code>list</code> тізіміндегі кез келген өрнек шын болса, шын мәнін қайтарады.


## Examples

### Example #1 
\{true, false, 2 &gt; 0} тізіміндегі өрнектердің кез келгені шын екенін анықтау.
```powerquery
List.AnyTrue({true, false, 2>0})
```

Result: 
```powerquery
true
```


### Example #2 
\{2 = 0, false, 2 &lt; 0} тізіміндегі өрнектердің кез келгені шын екенін анықтау.
```powerquery
List.AnyTrue({2 = 0, false, 2 < 0})
```

Result: 
```powerquery
false
```




## Category
List.Membership functions
