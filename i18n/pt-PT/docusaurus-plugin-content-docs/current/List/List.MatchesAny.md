---
title: List.MatchesAny
---

# List.MatchesAny


## Description

Devolve true se a função de condição for satisfeita por qualquer valor.


## Syntax

```powerquery
List.MatchesAny(
    list as list,
    condition as function
) as logical
```


## Details

Devolve <code>true</code> se a função de condição, <code>condition</code>, for satisfeita por qualquer um dos valores existentes na lista <code>list</code>; caso contrário, devolve <code>false</code>.


## Examples

### Example #1 
Determinar se qualquer um dos valores existentes na lista \{9, 10, 11} é maior que 10.
```powerquery
List.MatchesAny({9, 10, 11}, each _  > 10)
```

Result: 
```powerquery
true
```


### Example #2 
Determinar se qualquer um dos valores existentes na lista \{1, 2, 3} é maior que 10.
```powerquery
List.MatchesAny({1, 2, 3}, each _  > 10)
```

Result: 
```powerquery
false
```




## Category
List.Selection
