---
title: List.TransformMany
---

# List.TransformMany


Returnează o listă ale cărei elemente sunt transformate din lista de intrare utilizând funcţiile specificate.


## Syntax

```powerquery
List.TransformMany(
    list as list,
    collectionTransform as function,
    resultTransform as function
) as list
```


## Remarks

Returnează o listă ale cărei elemente sunt proiectate din lista de intrare.  
  
Funcția `collectionTransform` transformă fiecare element într-o listă intermediară, iar funcția `resultTransform` primește elementul original, precum și un element din lista intermediară pentru a construi rezultatul final.  
  
Funcția `collectionTransform` are semnătura `(x ca oricare) ca listă => ...`, unde `x` este un element în `list`. Funcția `resultTransform` proiectează forma rezultatului și are semnătura `(x ca oricare, y ca oricare) ca oricare => ...`, unde `x` este un element în `list` și `y` este un element din lista generată prin trecerea `x` la `collectionTransform`.


## Examples

### Example #1
Aplatizați o listă de oameni și animalele lor de companie.
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
