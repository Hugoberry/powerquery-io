---
title: List.AllTrue
---

# List.AllTrue


## Description

Барлық өрнектер шын болса, шын мәнін қайтарады.


## Syntax

```powerquery
List.AllTrue(
    list as list
) as logical
```


## Details

<code>list</code> тізіміндегі барлық өрнектер шын болса, шын мәнін қайтарады.


## Examples

### Example #1 
\{true, true, 2 &gt; 0} тізіміндегі барлық өрнектердің шын болуын анықтайды.
```powerquery
List.AllTrue({true, true, 2 > 0})
```

Result: 
```powerquery
true
```


### Example #2 
\{true, true, 2 &lt; 0} тізіміндегі барлық өрнектердің шын болуын анықтайды.
```powerquery
List.AllTrue({true, false, 2 < 0})
```

Result: 
```powerquery
false
```




## Category
List.Membership functions
