---
title: List.Random
---

# List.Random


Retourne une liste de nombres aléatoires.


## Syntax

```powerquery
List.Random(
    count as number,
    optional seed as number
) as list
```


## Remarks

Retourne une liste de nombres aléatoires entre 0 et 1, en fonction du nombre de valeurs à générer et d'une valeur de départ facultative.<ul>   <li><code>count</code> : nombre de valeurs aléatoires à générer.</li>   <li><code>seed</code> : <i>[Facultatif]</i> valeur numérique utilisée pour amorcer le générateur de nombres aléatoires. Si cette valeur est omise, une liste unique de nombres aléatoires est générée chaque fois que vous appelez la fonction. Si vous spécifiez la valeur de départ avec un nombre, chaque appel à la fonction génère la même liste de nombres aléatoires.</li></ul>


## Examples

### Example #1 
Crée une liste de 3 nombres aléatoires.
```powerquery
List.Random(3)
```

Result: 
```powerquery
{0.992332, 0.132334, 0.023592}
```


### Example #2 
Crée une liste de 3 nombres aléatoires, en spécifiant la valeur de départ.
```powerquery
List.Random(3, 2)
```

Result: 
```powerquery
{0.883002, 0.245344, 0.723212}
```




## Category
List.Generators
