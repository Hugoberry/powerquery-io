---
title: List.TransformMany
---

# List.TransformMany


Retourne une liste dont les éléments sont transformés depuis la liste d'entrée avec les fonctions spécifiées.


## Syntax

```powerquery
List.TransformMany(
    list as list,
    collectionTransform as function,
    resultTransform as function
) as list
```


## Remarks

Retourne une liste dont les éléments sont projetés à partir de la liste d’entrée.  
  
La fonction `collectionTransform` transforme chaque élément en liste intermédiaire et la fonction `resultTransform` reçoit l’élément d’origine, ainsi qu’un élément de la liste intermédiaire afin de construire le résultat final.  
  
La fonction `collectionTransform` a la signature `(x as any) comme liste => ...`, où `x` est un élément dans `list`. La fonction `resultTransform` projette la forme du résultat et a la signature `(x as any, y as any) as any => ...`, où `x` est un élément dans `list` et `y` est un élément de la liste générée en passant `x` vers `collectionTransform`.


## Examples

### Example #1
Effectuez un applatissement de la liste des personnes et de leurs animaux domestiques.
```powerquery
List.TransformMany(
    {
        [Name = "Alice", Pets = {"Scruffy", "Sam"}],
        [Name = "Bob", Pets = {"Walker"}]
    },
    each [Pets],
    (person, pet) => [Name = person[Name], Pet = pet]
)
```

Result: 
```powerquery
{
    [Name = "Alice", Pet = "Scruffy"],
    [Name = "Alice", Pet = "Sam"],
    [Name = "Bob", Pet = "Walker"]
}
```




## Category
List.Transformation functions
