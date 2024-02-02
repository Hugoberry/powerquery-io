---
title: List.Generate
---

# List.Generate


## Description

Génère une liste de valeurs.


## Syntax

```powerquery
List.Generate(
    initial as function,
    condition as function,
    next as function,
    optional selector as function
) as list
```


## Details

Génère une liste de valeurs à l’aide des fonctions fournies. La fonction <code>initial</code> génère une valeur de candidat de début, qui est ensuite testée par rapport à <code>condition</code>.    Si la valeur candidate est approuvée, elle est retournée dans la liste résultante et la valeur candidate suivante est générée en passant la valeur nouvellement approuvée à <code>next</code>.    Une fois qu’une valeur candidate ne correspond pas à <code>condition</code>, le processus de génération de liste s’arrête.    Un paramètre facultatif, <code>selector</code>, peut également être fourni pour transformer les éléments dans la liste résultante.


## Examples

### Example #1 
Créez une liste en démarrant à dix, en décrémentant à plusieurs reprises d’un élément et en veillant à ce que chaque élément soit supérieur à zéro.
```powerquery
List.Generate(() => 10, each _ > 0, each _ - 1)
```

Result: 
```powerquery
{10, 9, 8, 7, 6, 5, 4, 3, 2, 1}
```


### Example #2 
Génère une liste d&#39;enregistrements contenant x et y, où x est une valeur et y est une liste. x doit être inférieur à 10 et représenter le nombre d&#39;éléments dans la liste y. Après la génération de la liste, retourne uniquement les valeurs x.
```powerquery
List.Generate(
    () => [x = 1, y = {}],
    each [x] < 10,
    each [x = List.Count([y]), y = [y] & {x}],
    each [x]
)
```

Result: 
```powerquery
{1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9}
```




## Category
List.Generators
