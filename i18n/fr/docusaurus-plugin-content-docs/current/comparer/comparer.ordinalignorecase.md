---
title: Comparer.OrdinalIgnoreCase
---

# Comparer.OrdinalIgnoreCase


Retourne une fonction de comparaison ne respectant pas la casse, qui utilise les règles ordinales pour comparer des valeurs.


## Syntax

```powerquery
Comparer.OrdinalIgnoreCase(
    x as any,
    y as any
) as number
```


## Remarks

Retourne une fonction de comparaison qui ne respecte pas la casse, qui utilise des règles ordinales pour comparer les valeurs fournies `x` et `y`.  
  
Une fonction de comparaison accepte deux arguments et retourne -1, 0 ou 1 en fonction de la valeur inférieure, égale ou supérieure à la seconde.


## Examples

### Example #1
En utilisant des règles ordinales ne respectant pas la casse, comparez "Abc" avec "abc". Notez que "Abc" est plus petit que "abc" avec `Comparer.Ordinal`.
```powerquery
Comparer.OrdinalIgnoreCase("Abc", "abc")
```

Result: 
```powerquery
0
```




## Category
Comparer
