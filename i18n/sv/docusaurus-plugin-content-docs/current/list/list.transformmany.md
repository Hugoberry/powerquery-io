---
title: List.TransformMany
---

# List.TransformMany


Returnerar en lista vars element omvandlas från indatalistan med hjälp av angivna funktioner.


## Syntax

```powerquery
List.TransformMany(
    list as list,
    collectionTransform as function,
    resultTransform as function
) as list
```


## Remarks

Returnerar en lista vars element projiceras från indatalistan.  
  
Funktionen `collectionTransform` omvandlar varje element till en mellanliggande lista och funktionen `resultTransform` tar emot originalelementet samt ett objekt från den mellanliggande listan för att skapa det slutliga resultatet.  
  
Funktionen `collectionTransform` har signaturen `(x as any) som lista => ...`, där `x` är ett element i `list`. Funktionen `resultTransform` projicerar resultatets form och har signaturen `(x som vilken som helst, y som någon) som alla => ...` , där `x` är ett element i `list` och `y` är ett element från listan som genereras genom att skicka `x` till `collectionTransform`.


## Examples

### Example #1
Platta ut en lista över människor och deras husdjur.
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
