---
title: List.Numbers
---

# List.Numbers


Retourne une liste de nombres en fonction d&#39;une valeur initiale, d&#39;un nombre et d&#39;une valeur incrémentielle facultative.


## Syntax

```powerquery
List.Numbers(
    start as number,
    count as number,
    optional increment as number
) as list
```


## Remarks

Retourne une liste de nombres en fonction d'une valeur initiale, d'un nombre et d'une valeur incrémentielle facultative. La valeur d'incrément par défaut est 1.<ul>   <li><code>start</code> : valeur initiale dans la liste.</li>   <li><code>count</code> : nombre de valeurs à créer.</li>   <li><code>increment</code> : <i>[Facultatif]</i> valeur par laquelle incrémenter. Si les valeurs omises sont incrémentées par 1.</li></ul>


## Examples

### Example #1 
Génère une liste de 10 caractères consécutifs en partant de 1.
```powerquery
List.Numbers(1, 10)
```

Result: 
```powerquery
{
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10
}
```


### Example #2 
Génère une liste de 10 chiffres à partir de 1, avec un incrément de 2 pour chaque numéro suivant.
```powerquery
List.Numbers(1, 10, 2)
```

Result: 
```powerquery
{
    1,
    3,
    5,
    7,
    9,
    11,
    13,
    15,
    17,
    19
}
```




## Category
List.Generators
