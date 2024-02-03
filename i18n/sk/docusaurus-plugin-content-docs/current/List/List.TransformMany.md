---
title: List.TransformMany
---

# List.TransformMany


## Description

Vráti zoznam, ktorého prvky sa transformujú zo vstupného zoznamu pomocou stanovených funkcií.


## Syntax

```powerquery
List.TransformMany(
    list as list,
    collectionTransform as function,
    resultTransform as function
) as list
```


## Details

Vráti zoznam, ktorého prvky sa premietajú zo vstupného zoznamu.<br />    <br />    Funkcia <code>collectionTransform</code> transformuje každý prvok na sprostredkujúci zoznam a funkcia <code>resultTransform</code> prijíma pôvodný prvok a položku zo sprostredkujúceho zoznamu, aby bolo možné vytvoriť konečný výsledok.<br />    <br />    Funkcia <code>collectionTransform</code> má podpis <code>(x ako ľubovoľný) ako zoznam => ...</code>, kde <code>x</code> je prvok v <code>list</code>.    Funkcia <code>resultTransform</code> premieta tvar výsledku a má podpis <code>(x ako ľubovoľný, y ako ľubovoľný) ako ľubovoľný => ...</code>, kde <code>x</code> je prvok v <code>list</code> a <code>y</code> je prvok zo zoznamu vygenerovaný zadaním <code>x</code> do <code>collectionTransform</code>.


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
