---
title: List.AnyTrue
---

# List.AnyTrue


Returnerer true, hvis et udtryk er true.


## Syntax

```powerquery
List.AnyTrue(
    list as list
) as logical
```


## Remarks

Returnerer true, hvis et udtryk på listen <code>list</code> er true.


## Examples

### Example #1 
Find ud af, om et af udtrykkene på listen \{true, false, 2 &gt; 0} er true.
```powerquery
List.AnyTrue({true, false, 2>0})
```

Result: 
```powerquery
true
```


### Example #2 
Find ud af, om et af udtrykkene på listen \{2 = 0, false, 2 &lt; 0} er true.
```powerquery
List.AnyTrue({2 = 0, false, 2 < 0})
```

Result: 
```powerquery
false
```




## Category
List.Membership functions
