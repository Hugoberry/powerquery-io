---
title: List.TransformMany
---

# List.TransformMany


Zwraca listę, której elementy są elementami z listy wejściowej, które zostały przekształcone przy użyciu określonych funkcji.


## Syntax

```powerquery
List.TransformMany(
    list as list,
    collectionTransform as function,
    resultTransform as function
) as list
```


## Remarks

Zwraca listę, której elementy są rzutowane z listy wejściowej.  
  
Funkcja `collectionTransform` przekształca każdy element w listę pośrednią, a funkcja `resultTransform` odbiera oryginalny element oraz element z listy pośredniej w celu utworzenia końcowego wyniku.  
  
Funkcja `collectionTransform` ma sygnaturę `(x as any) as list =>...` , gdzie `x` jest elementem w `list`. Funkcja `resultTransform` rzutuje kształt wyniku i ma sygnaturę `(x as any, y as any) as any =>...` , gdzie `x` jest elementem w `list`, a `y` jest elementem z listy wygenerowanej przez przekazanie `x` do `collectionTransform`.


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
