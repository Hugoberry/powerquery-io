---
title: List.AnyTrue
---

# List.AnyTrue


Gibt &#34;true&#34; zurück, wenn ein beliebiger Ausdruck zutrifft.


## Syntax

```powerquery
List.AnyTrue(
    list as list
) as logical
```


## Remarks

Gibt "true" zurück, wenn ein beliebiger Ausdruck in der Liste "<code>list</code>" zutrifft.


## Examples

### Example #1 
Ermittelt, ob einer der Ausdrücke in der Liste &#34;\{true, false, 2 &gt; 0}&#34; zutrifft.
```powerquery
List.AnyTrue({true, false, 2>0})
```

Result: 
```powerquery
true
```


### Example #2 
Ermittelt, ob einer der Ausdrücke in der Liste &#34;\{2 = 0, false, 2 &lt; 0}&#34; zutrifft.
```powerquery
List.AnyTrue({2 = 0, false, 2 < 0})
```

Result: 
```powerquery
false
```




## Category
List.Membership functions
