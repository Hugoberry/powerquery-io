---
title: List.TransformMany
---

# List.TransformMany


Retorna una llista els elements de la qual es transformen a partir de la llista d'entrada mitjançant funcions especificades.


## Syntax

```powerquery
List.TransformMany(
    list as list,
    collectionTransform as function,
    resultTransform as function
) as list
```


## Remarks

Retorna una llista els elements de la qual es projecten a partir de la llista d'entrada.  
  
La funció `collectionTransform` transforma cada element en una llista intermèdia i la funció `resultTransform` rep l'element original, així com un element de la llista intermèdia per construir el resultat final.  
  
La funció `collectionTransform` té la signatura `(x as any) as list => ...`, en què `x` és un element de `list`. La funció `resultTransform` projecta la forma del resultat i té la signatura `(x as any, y as any) as any => ...`, en què `x` és un element de `list` i `y` és un element de la llista generat en passar `x` a `collectionTransform`.


## Examples

### Example #1
Simplifiqueu una llista de persones i les seves mascotes.
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
