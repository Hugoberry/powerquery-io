---
title: Comparer.Equals
---

# Comparer.Equals


Retourne une valeur logique en fonction de l&#39;égalité entre les deux valeurs données.


## Syntax

```powerquery
Comparer.Equals(
    comparer as function,
    x as any,
    y as any
) as logical
```


## Remarks

Retourne une valeur <code>logical</code> basée sur la vérification de l’égalité sur les deux valeurs données, <code>x</code> et <code>y</code>, à l’aide du fourni<code>comparer</code>.      <div>        <code>comparer</code> est un <code>Comparer</code> utilisé pour contrôler la comparaison. Un comparateur est une fonction qui accepte deux arguments et retourne -1, 0 ou 1 selon que la première valeur est inférieure ou égale à,  ou supérieur à la seconde.        Les comparateurs peuvent être utilisés pour fournir des comparaisons qui ne respectent pas la casse ou la culture et les paramètres régionaux.      </div>      <div>        Les comparateurs intégrés suivants sont disponibles dans le langage de formule :      </div>      <ul>        <li><code>Comparer.Ordinal</code> :  Utilisé pour effectuer une comparaison ordinale exacte</li>        <li><code>Comparer.OrdinalIgnoreCase</code> : utilisé pour effectuer une comparaison ordinale exacte non sensible à la casse</li>        <li> <code>Comparer.FromCulture</code> : permet d’effectuer une comparaison dépendante de la culture</li>      </ul>


## Examples

### Example #1 
Comparez &#34;1&#34; et &#34;A&#34; en utilisant le paramètre régional &#34;en-US&#34; pour déterminer si les valeurs sont égales.
```powerquery
Comparer.Equals(Comparer.FromCulture("en-US"), "1", "A")
```

Result: 
```powerquery
false
```




## Category
Comparer
