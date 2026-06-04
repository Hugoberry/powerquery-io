---
title: Number.Permutations
---

# Number.Permutations


Орнын жылжытулардың санын қайтарады.


## Syntax

```powerquery
Number.Permutations(
    setSize as number,
    permutationSize as number
) as number
```


## Remarks

`permutationSize` көрсетілген орнын жылжыту өлшемінің көмегімен `setSize` элементтер санынан жасауға болатын орнын жылжытулар санын қайтарады.


## Examples

### Example #1
Жалпы 5 элементтер 3 топтарымен орнын жылжытулардың санын анықтау.
```powerquery
Number.Permutations(5, 3)
```

Result: 
```powerquery
60
```




## Category
Number.Operations
