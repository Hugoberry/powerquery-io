---
title: List.AllTrue
---

# List.AllTrue


Returns true if all expressions are true.


## Syntax

```powerquery
List.AllTrue(
    list as list
) as logical
```


## Remarks

Returns true if all expressions in the list <code>list</code> are true.


## Examples

### Example #1 
Determine if all the expressions in the list \{true, true, 2 &gt; 0} are true.
```powerquery
List.AllTrue({true, true, 2 > 0})
```

Result: 
```powerquery
true
```


### Example #2 
Determine if all the expressions in the list \{true, true, 2 &lt; 0} are true.
```powerquery
List.AllTrue({true, false, 2 < 0})
```

Result: 
```powerquery
false
```




## Category
List.Membership functions
