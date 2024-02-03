---
title: List.AnyTrue
---

# List.AnyTrue


## Description

Vrne vrednost &#34;true&#34;, če je kateri koli izraz &#34;true&#34;.


## Syntax

```powerquery
List.AnyTrue(
    list as list
) as logical
```


## Details

Vrne vrednost "true", če ja kateri koli izraz na seznamu <code>list</code> "true".


## Examples

### Example #1 
Ugotovite, ali je kateri od izrazov na seznamu \{true, false, 2 &gt; 0} &#34;true&#34;.
```powerquery
List.AnyTrue({true, false, 2>0})
```

Result: 
```powerquery
true
```


### Example #2 
Ugotovite, ali je kateri od izrazov na seznamu \{2 = 0, false, 2 &lt; 0} &#34;true&#34;.
```powerquery
List.AnyTrue({2 = 0, false, 2 < 0})
```

Result: 
```powerquery
false
```




## Category
List.Membership functions
