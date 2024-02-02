---
title: List.Alternate
---

# List.Alternate


## Description

Retourne une liste composée tous les éléments de décalage impairs dans une liste.


## Syntax

```powerquery
List.Alternate(
    list as list,
    count as number,
    optional repeatInterval as number,
    optional offset as number
) as list
```


## Details

Retourne une liste composée tous les éléments de décalage impairs dans une liste. Prend et ignore les valeurs de la liste <code>list</code> en fonction des paramètres.    <ul>    <li><code>count</code> : spécifie le nombre de valeurs qui sont ignorées chaque fois.</li>    <li><code>repeatInterval</code> : intervalle de répétition facultatif qui indique combien de valeurs sont ajoutées entre les valeurs ignorées.</li>    <li><code>offset</code> : paramètre de décalage facultatif qui commence à ignorer les valeurs au niveau du décalage initial.</li>    </ul>


## Examples

### Example #1 
Crée une liste depuis \{1..10} qui ignore le premier nombre.
```powerquery
List.Alternate({1..10}, 1)
```

Result: 
```powerquery
{2, 3, 4, 5, 6, 7, 8, 9, 10}
```


### Example #2 
Crée une liste depuis \{1..10} qui ignore un nombre sur deux.
```powerquery
List.Alternate({1..10}, 1, 1)
```

Result: 
```powerquery
{2, 4, 6, 8, 10}
```


### Example #3 
Crée une liste depuis \{1..10} qui démarre à 1 et ignore un nombre sur deux.
```powerquery
List.Alternate({1..10}, 1, 1, 1)
```

Result: 
```powerquery
{1, 3, 5, 7, 9}
```


### Example #4 
Crée une liste depuis \{1..10} qui démarre à 1, ignore une valeur, conserve deux valeurs, et ainsi de suite.
```powerquery
List.Alternate({1..10}, 1, 2, 1)
```

Result: 
```powerquery
{1, 3, 4, 6, 7, 9, 10}
```




## Category
List.Selection
