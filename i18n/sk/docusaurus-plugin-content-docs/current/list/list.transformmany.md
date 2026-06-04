---
title: List.TransformMany
---

# List.TransformMany


Vráti zoznam, ktorého prvky sa transformujú zo vstupného zoznamu pomocou stanovených funkcií.


## Syntax

```powerquery
List.TransformMany(
    list as list,
    collectionTransform as function,
    resultTransform as function
) as list
```


## Remarks

Vráti zoznam, ktorého prvky sa premietajú zo vstupného zoznamu.  
  
Funkcia `collectionTransform` transformuje každý prvok na sprostredkujúci zoznam a funkcia `resultTransform` prijíma pôvodný prvok a položku zo sprostredkujúceho zoznamu, aby bolo možné vytvoriť konečný výsledok.  
  
Funkcia `collectionTransform` má podpis `(x ako ľubovoľný) ako zoznam => ...`, kde `x` je prvok v `list`. Funkcia `resultTransform` premieta tvar výsledku a má podpis `(x ako ľubovoľný, y ako ľubovoľný) ako ľubovoľný => ...`, kde `x` je prvok v `list` a `y` je prvok zo zoznamu vygenerovaný zadaním `x` do `collectionTransform`.


## Examples

### Example #1
Zjednodušte štruktúru zoznamu ľudí a ich domácich zvierat.
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
