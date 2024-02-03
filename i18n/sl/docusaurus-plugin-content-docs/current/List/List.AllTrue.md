---
title: List.AllTrue
---

# List.AllTrue


## Description

Vrne vrednost &#34;true&#34;, če so vsi izrazi &#34;true&#34;.


## Syntax

```powerquery
List.AllTrue(
    list as list
) as logical
```


## Details

Vrne vrednost "true", če so vsi izrazi na seznamu <code>list</code> "true".


## Examples

### Example #1 
Ugotovite, ali so vsi izrazi na seznamu \{true, true, 2 &gt; 0} &#34;true&#34;.
```powerquery
List.AllTrue({true, true, 2 > 0})
```

Result: 
```powerquery
true
```


### Example #2 
Ugotovite, ali so vsi izrazi na seznamu \{true, true, 2 &lt; 0} &#34;true&#34;.
```powerquery
List.AllTrue({true, false, 2 < 0})
```

Result: 
```powerquery
false
```




## Category
List.Membership functions
