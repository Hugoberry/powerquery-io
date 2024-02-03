---
title: List.AnyTrue
---

# List.AnyTrue


## Description

Returns true if any expression is true.


## Syntax

```powerquery
List.AnyTrue(
    list as list
) as logical
```


## Details

Returns true if any expression in the list <code>list</code> is true.


## Examples

### Example #1 
Determine if any of the expressions in the list \{true, false, 2 &gt; 0} are true.
```powerquery
List.AnyTrue({true, false, 2>0})
```

Result: 
```powerquery
true
```


### Example #2 
Determine if any of the expressions in the list \{2 = 0, false, 2 &lt; 0} are true.
```powerquery
List.AnyTrue({2 = 0, false, 2 < 0})
```

Result: 
```powerquery
false
```




## Category
List.Membership functions
