---
title: List.TransformMany
---

# List.TransformMany


Returnerer en liste, hvis elementer er transformeret fra inputlisten ved hjælp af de angivne funktioner.


## Syntax

```powerquery
List.TransformMany(
    list as list,
    collectionTransform as function,
    resultTransform as function
) as list
```


## Remarks

Returnerer en liste, hvis elementer projiceres fra inputlisten.  
  
Funktionen `collectionTransform` transformerer hvert element til en mellemliggende liste, og funktionen `resultTransform` modtager det oprindelige element samt et element fra den mellemliggende liste for at konstruere det endelige resultat.  
  
Funktionen `collectionTransform` har signaturen `(x as any) som liste => ...` , hvor `x` er et element i `list`. Funktionen `resultTransform` projicerer resultatets form og har signaturen `(x as any, y as any) som enhver => ...` , hvor `x` er et element i `list` og `y` er et element fra den liste, der genereres ved at overføre `x` til `collectionTransform`.


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
