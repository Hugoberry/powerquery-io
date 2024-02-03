---
title: List.TransformMany
---

# List.TransformMany


## Description

Returnerer en liste, hvis elementer er transformeret fra inputlisten ved hjælp af de angivne funktioner.


## Syntax

```powerquery
List.TransformMany(
    list as list,
    collectionTransform as function,
    resultTransform as function
) as list
```


## Details

Returnerer en liste, hvis elementer projiceres fra inputlisten.<br />    <br />    Funktionen <code>collectionTransform</code>    transformerer hvert element til en mellemliggende liste, og funktionen <code>resultTransform</code>    modtager det oprindelige element samt et element fra den mellemliggende liste for at konstruere det endelige resultat.<br />    <br />    Funktionen <code>collectionTransform</code>    har signaturen <code>(x as any) som liste => ... </code>, hvor <code>x</code> er et element i <code>list</code>.    Funktionen <code>resultTransform</code>    projicerer resultatets form og har signaturen <code>(x as any, y as any) som enhver => ... </code>, hvor <code>x</code> er et element i <code>list</code>    og <code>y</code> er et element fra den liste, der genereres ved at overføre <code>x</code> til <code>collectionTransform</code>.


## Examples

### Example #1 
Fladgør en liste over personer og deres kæledyr.
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
