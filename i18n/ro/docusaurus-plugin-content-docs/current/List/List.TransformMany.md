---
title: List.TransformMany
---

# List.TransformMany


## Description

Returnează o listă ale cărei elemente sunt transformate din lista de intrare utilizând funcţiile specificate.


## Syntax

```powerquery
List.TransformMany(
    list as list,
    collectionTransform as function,
    resultTransform as function
) as list
```


## Details

Returnează o listă ale cărei elemente sunt proiectate din lista de intrare.<br />    <br />    Funcția <code>collectionTransform</code> transformă fiecare element într-o listă intermediară, iar funcția <code>resultTransform</code> primește elementul original, precum și un element din lista intermediară pentru a construi rezultatul final.<br />    <br />    Funcția <code>collectionTransform</code> are semnătura <code> (x ca oricare) ca listă => ...</code>,  unde <code>x</code> este un element în <code>list</code>.    Funcția <code>resultTransform</code> proiectează forma rezultatului și are semnătura <code>(x ca oricare, y ca oricare) ca oricare => ...</code>, unde <code>x</code> este un element în <code>list</code> și <code>y</code> este un element din lista generată prin trecerea <code>x</code> la <code>collectionTransform</code>.


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
