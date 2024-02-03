---
title: List.AllTrue
---

# List.AllTrue


## Description

Retornará true se todas as expressões forem true.


## Syntax

```powerquery
List.AllTrue(
    list as list
) as logical
```


## Details

Retornará true se todas as expressões da lista <code>list</code> forem true.


## Examples

### Example #1 
Determina se todas as expressões da lista \{true, true, 2 &gt; 0} serão true.
```powerquery
List.AllTrue({true, true, 2 > 0})
```

Result: 
```powerquery
true
```


### Example #2 
Determina se todas as expressões da lista \{true, true, 2 &lt; 0} serão true.
```powerquery
List.AllTrue({true, false, 2 < 0})
```

Result: 
```powerquery
false
```




## Category
List.Membership functions
