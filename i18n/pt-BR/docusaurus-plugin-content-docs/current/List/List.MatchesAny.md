---
title: List.MatchesAny
---

# List.MatchesAny


Retornará true se a função condition for atendida por qualquer valor.


## Syntax

```powerquery
List.MatchesAny(
    list as list,
    condition as function
) as logical
```


## Remarks

Retornará <code>true</code> se a função condition <code>condition</code> for atendida por qualquer valor da lista <code>list</code>; do contrário, <code>false</code> será retornado.


## Examples

### Example #1 
Descubra se algum valor da lista \{9, 10, 11} é maior que 10.
```powerquery
List.MatchesAny({9, 10, 11}, each _  > 10)
```

Result: 
```powerquery
true
```


### Example #2 
Descubra se algum valor da lista \{1, 2, 3} é maior que 10.
```powerquery
List.MatchesAny({1, 2, 3}, each _  > 10)
```

Result: 
```powerquery
false
```




## Category
List.Selection
