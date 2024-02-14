---
title: List.AnyTrue
---

# List.AnyTrue


Retornará true se alguma expressão for true.


## Syntax

```powerquery
List.AnyTrue(
    list as list
) as logical
```


## Remarks

Retornará true alguma expressão na lista <code>list</code> for true.


## Examples

### Example #1 
Determina se alguma expressão na lista \{true, false, 2 &gt; 0} será true.
```powerquery
List.AnyTrue({true, false, 2>0})
```

Result: 
```powerquery
true
```


### Example #2 
Determina se alguma expressão na lista \{2 = 0, false, 2 &lt; 0} será true.
```powerquery
List.AnyTrue({2 = 0, false, 2 < 0})
```

Result: 
```powerquery
false
```




## Category
List.Membership functions
