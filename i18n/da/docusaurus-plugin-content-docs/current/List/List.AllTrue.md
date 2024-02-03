---
title: List.AllTrue
---

# List.AllTrue


## Description

Returnerer true, hvis alle udtryk er true.


## Syntax

```powerquery
List.AllTrue(
    list as list
) as logical
```


## Details

Returnerer true, hvis alle udtryk på listen <code>list</code> er true.


## Examples

### Example #1 
Find ud af, om alle udtryk på listen \{true, true, 2 &gt; 0} er true.
```powerquery
List.AllTrue({true, true, 2 > 0})
```

Result: 
```powerquery
true
```


### Example #2 
Find ud af, om alle udtryk på listen \{true, true, 2 &lt; 0} er true.
```powerquery
List.AllTrue({true, false, 2 < 0})
```

Result: 
```powerquery
false
```




## Category
List.Membership functions
