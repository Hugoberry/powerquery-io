---
title: Comparer.Ordinal
---

# Comparer.Ordinal


Retourne une fonction de comparaison qui utilise les règles ordinales pour comparer des valeurs.


## Syntax

```powerquery
Comparer.Ordinal(
    x as any,
    y as any
) as number
```


## Remarks

Retourne une fonction de comparateur qui utilise des règles ordinales pour comparer les valeurs fournies `x` et `y`.  
  
Une fonction de comparateur accepte deux arguments et retourne -1, 0 ou 1 selon que la première valeur est inférieure, égale ou supérieure à la seconde.


## Examples

### Example #1
En utilisant les règles ordinales, comparez si "encyclopédie" et "encyclopédie" sont équivalentes. Notez qu'ils sont équivalents en utilisant `Comparer.FromCulture("en-US")`.
```powerquery
Comparer.Equals(Comparer.Ordinal, "encyclopædia", "encyclopaedia")
```

Result: 
```powerquery
false
```




## Category
Comparer
