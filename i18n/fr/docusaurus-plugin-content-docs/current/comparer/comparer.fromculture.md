---
title: Comparer.FromCulture
---

# Comparer.FromCulture


Retourne une fonction de comparaison en fonction de la culture et du respect de la casse spécifiés.


## Syntax

```powerquery
Comparer.FromCulture(
    culture as text,
    optional ignoreCase as logical
) as function
```


## Remarks

Retourne une fonction de comparaison qui utilise le `culture` et le respect de la casse spécifiés par `ignoreCase` pour effectuer des comparaisons.  
  
Une fonction de comparaison accepte deux arguments et retourne -1, 0 ou 1 selon que la première valeur est inférieure, égale ou supérieure à la seconde.  
  
La valeur par défaut de `ignoreCase` est false. Le `culture` doit être l’un des paramètres régionaux pris en charge par le .NET Framework (par exemple, "fr-FR").


## Examples

### Example #1
Comparez "a" et "A" en utilisant le paramètre régional "en-US" pour déterminer si les valeurs sont égales.
```powerquery
Comparer.FromCulture("en-US")("a", "A")
```

Result: 
```powerquery
-1
```


### Example #2
Comparez "a" et "A" en utilisant le paramètre régional "en-US" en ignorant la casse pour déterminer si les valeurs sont égales.
```powerquery
Comparer.FromCulture("en-US", true)("a", "A")
```

Result: 
```powerquery
0
```




## Category
Comparer
