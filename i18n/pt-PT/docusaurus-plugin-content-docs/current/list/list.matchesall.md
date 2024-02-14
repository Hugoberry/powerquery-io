---
title: List.MatchesAll
---

# List.MatchesAll


Devolve true se a função de condição for satisfeita por todos os valores existentes na lista.


## Syntax

```powerquery
List.MatchesAll(
    list as list,
    condition as function
) as logical
```


## Remarks

Devolve <code>true</code> se a função de condição, <code>condition</code>, for satisfeita por todos os valores existentes na lista <code>list</code>; caso contrário, devolve <code>false</code>.


## Examples

### Example #1 
Determinar se todos os valores existentes na lista \{11, 12, 13} são maiores que 10.
```powerquery
List.MatchesAll({11, 12, 13}, each _  > 10)
```

Result: 
```powerquery
true
```


### Example #2 
Determinar se todos os valores existentes na lista \{1, 2, 3} são maiores que 10.
```powerquery
List.MatchesAll({1, 2, 3}, each _  > 10)
```

Result: 
```powerquery
false
```




## Category
List.Selection
