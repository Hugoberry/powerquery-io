---
title: List.AllTrue
---

# List.AllTrue


## Description

Gibt &#34;true&#34; zurück, wenn alle Ausdrücke zutreffen.


## Syntax

```powerquery
List.AllTrue(
    list as list
) as logical
```


## Details

Gibt "true" zurück, wenn alle Ausdrücke in der Liste "<code>list</code>" zutreffen.


## Examples

### Example #1 
Ermittelt, ob alle Ausdrücke in der Liste &#34;\{true, true, 2 &gt; 0}&#34; zutreffen.
```powerquery
List.AllTrue({true, true, 2 > 0})
```

Result: 
```powerquery
true
```


### Example #2 
Ermittelt, ob alle Ausdrücke in der Liste &#34;\{true, true, 2 &lt; 0}&#34; zutreffen.
```powerquery
List.AllTrue({true, false, 2 < 0})
```

Result: 
```powerquery
false
```




## Category
List.Membership functions
