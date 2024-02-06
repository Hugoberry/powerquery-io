---
title: List.AnyTrue
---

# List.AnyTrue


Devolve true se qualquer expressão for verdadeira.


## Syntax

```powerquery
List.AnyTrue(
    list as list
) as logical
```


## Remarks

Devolve true se qualquer expressão existente na lista <code>list</code> for verdadeira.


## Examples

### Example #1 
Determinar se qualquer uma das expressões existentes na lista \{true, false, 2 &gt; 0} é verdadeira.
```powerquery
List.AnyTrue({true, false, 2>0})
```

Result: 
```powerquery
true
```


### Example #2 
Determinar se qualquer uma das expressões existentes na lista \{2 = 0, false, 2 &lt; 0} é verdadeira.
```powerquery
List.AnyTrue({2 = 0, false, 2 < 0})
```

Result: 
```powerquery
false
```




## Category
List.Membership functions
