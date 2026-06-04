---
title: List.TransformMany
---

# List.TransformMany


Vraća listu čiji su elementi transformisani na osnovu liste unosa pomoću navedenih funkcija.


## Syntax

```powerquery
List.TransformMany(
    list as list,
    collectionTransform as function,
    resultTransform as function
) as list
```


## Remarks

Vraća listu čiji su elementi projektovani sa liste unosa.  
  
Funkcija „`collectionTransform`“ transformiše svaki element u srednju listu, a funkcija „`resultTransform`“ prima originalni element, kao i stavku sa srednje liste da bi se konstruisao konačni rezultat.  
  
Funkcija „`collectionTransform`“ ima potpis `(x kao bilo koji) kao lista => ...`, gde `x` predstavlja element u `list`. Funkcija „`resultTransform`“ projektuje oblik rezultata i ima potpis `(x kao bilo koji, y kao bilo koji) kao bilo koji => ...`, gde `x` predstavlja element u `list`, a `y` predstavlja element sa liste generisan prosleđivanjem elementa `x` u `collectionTransform`.


## Examples

### Example #1
Poravnajte listu ljudi i njihovih kućnih ljubimaca.
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
