---
title: Comparer.Equals
---

# Comparer.Equals


Retourne une valeur logique en fonction de l'égalité entre les deux valeurs données.


## Syntax

```powerquery
Comparer.Equals(
    comparer as function,
    x as any,
    y as any
) as logical
```


## Remarks

Retourne une valeur `logical` basée sur la vérification de l’égalité sur les deux valeurs données, `x` et `y`, à l’aide du fourni`comparer`.

`comparer` est un `Comparer` utilisé pour contrôler la comparaison. Un comparateur est une fonction qui accepte deux arguments et retourne -1, 0 ou 1 selon que la première valeur est inférieure ou égale à, ou supérieur à la seconde. Les comparateurs peuvent être utilisés pour fournir des comparaisons qui ne respectent pas la casse ou la culture et les paramètres régionaux.

Les comparateurs intégrés suivants sont disponibles dans le langage de formule :

-   `Comparer.Ordinal` : Utilisé pour effectuer une comparaison ordinale exacte
-   `Comparer.OrdinalIgnoreCase` : utilisé pour effectuer une comparaison ordinale exacte non sensible à la casse
-   `Comparer.FromCulture` : permet d’effectuer une comparaison dépendante de la culture


## Examples

### Example #1
Comparez "1" et "A" en utilisant le paramètre régional "en-US" pour déterminer si les valeurs sont égales.
```powerquery
Comparer.Equals(Comparer.FromCulture("en-US"), "1", "A")
```

Result: 
```powerquery
false
```




## Category
Comparer
