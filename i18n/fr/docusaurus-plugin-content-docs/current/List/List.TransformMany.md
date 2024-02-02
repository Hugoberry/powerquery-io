---
title: List.TransformMany
---

# List.TransformMany


## Description

Retourne une liste dont les éléments sont transformés depuis la liste d&#39;entrée avec les fonctions spécifiées.


## Syntax

```powerquery
List.TransformMany(
    list as list,
    collectionTransform as function,
    resultTransform as function
) as list
```


## Details

Retourne une liste dont les éléments sont projetés à partir de la liste d’entrée.<br />    <br />    La fonction <code>collectionTransform</code> transforme chaque élément en liste intermédiaire et la fonction <code>resultTransform</code> reçoit l’élément d’origine, ainsi qu’un élément de la liste intermédiaire afin de construire le résultat final.<br />    <br />    La fonction <code>collectionTransform</code> a la signature <code>(x as any) comme liste => ...</code>,  où <code>x</code> est un élément dans <code>list</code>.    La fonction <code>resultTransform</code> projette la forme du résultat et a la signature <code> (x as any, y as any) as any => ...</code>, où <code>x</code> est un élément dans <code>list</code> et <code>y</code> est un élément de la liste générée en passant <code>x</code> vers <code>collectionTransform</code>.


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
