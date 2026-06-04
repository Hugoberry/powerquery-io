---
title: List.TransformMany
---

# List.TransformMany


Pateikiamas sąrašas, kurio elementai yra transformuojami iš įvesties sąrašo naudojant nurodytas funkcijas.


## Syntax

```powerquery
List.TransformMany(
    list as list,
    collectionTransform as function,
    resultTransform as function
) as list
```


## Remarks

Pateikiamas sąrašas, kurio elementai pateikiami iš įvesties sąrašo.  
  
Funkcija `collectionTransform` transformuoja kiekvieną elementą į tarpinį sąrašą, o funkcija `resultTransform` gauna pradinį elementą, taip pat elementą iš tarpinio sąrašo, kad būtų sudarytas galutinis rezultatas.  
  
Funkcija `collectionTransform` turi parašą `(x kaip bet kuris) kaip sąrašas => ...`, kur `x` yra elementas, esantis `list`. Funkcija `resultTransform` pateikia rezultato formą ir turi parašą `(x kaip bet kuris, y kaip bet kuris) kaip bet kuris => ...`, kur `x` yra elementas, esantis `list`, o `y` – elementas iš sąrašo, sugeneruoto perduodant `x` į `collectionTransform`.


## Examples

### Example #1
Sulyginkite žmonių ir jų augintinių sąrašą.
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
