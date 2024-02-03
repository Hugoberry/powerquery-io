---
title: List.TransformMany
---

# List.TransformMany


## Description

Zwraca listę, której elementy są elementami z listy wejściowej, które zostały przekształcone przy użyciu określonych funkcji.


## Syntax

```powerquery
List.TransformMany(
    list as list,
    collectionTransform as function,
    resultTransform as function
) as list
```


## Details

Zwraca listę, której elementy są rzutowane z listy wejściowej.<br />    <br />    Funkcja <code>collectionTransform</code> przekształca każdy element w listę pośrednią, a funkcja <code>resultTransform</code> odbiera oryginalny element oraz element z listy pośredniej w celu utworzenia końcowego wyniku.<br />    <br />    Funkcja <code>collectionTransform</code> ma sygnaturę <code>(x as any) as list =>... </code>, gdzie <code>x</code> jest elementem w <code>list</code>.    Funkcja <code>resultTransform</code> rzutuje kształt wyniku i ma sygnaturę <code>(x as any, y as any) as any =>... </code>, gdzie <code>x</code> jest elementem w <code>list</code>, a <code>y</code> jest elementem z listy wygenerowanej przez przekazanie <code>x</code> do <code>collectionTransform</code>.


## Examples

### Example #1 
Spłaszcz listę osób i ich zwierząt domowych.
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
