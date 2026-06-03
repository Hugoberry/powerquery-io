---
title: List.AnyTrue
---

# List.AnyTrue


Retourneert 'true' wanneer een bepaalde expressie 'true' is.


## Syntax

```powerquery
List.AnyTrue(
    list as list
) as logical
```


## Remarks

Retourneert 'true' wanneer een bepaalde expressie in de lijst `list` 'true' is.


## Examples

### Example #1
Vaststellen of een van de expressies in de lijst \{true, false, 2 > 0\} 'true' is.
```powerquery
List.AnyTrue({true, false, 2>0})
```

Result: 
```powerquery
true
```


### Example #2
Vaststellen of een van de expressies in de lijst \{2 = 0, false, 2 &lt; 0\} 'true' is.
```powerquery
List.AnyTrue({2 = 0, false, 2 < 0})
```

Result: 
```powerquery
false
```




## Category
List.Membership functions
