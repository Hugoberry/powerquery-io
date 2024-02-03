---
title: List.TransformMany
---

# List.TransformMany


## Description

Pateikiamas sąrašas, kurio elementai yra transformuojami iš įvesties sąrašo naudojant nurodytas funkcijas.


## Syntax

```powerquery
List.TransformMany(
    list as list,
    collectionTransform as function,
    resultTransform as function
) as list
```


## Details

Pateikiamas sąrašas, kurio elementai pateikiami iš įvesties sąrašo.<br />    <br />    Funkcija <code>collectionTransform</code> transformuoja kiekvieną elementą į tarpinį sąrašą, o funkcija <code>resultTransform</code> gauna pradinį elementą, taip pat elementą iš tarpinio sąrašo, kad būtų sudarytas galutinis rezultatas.<br />    <br />    Funkcija <code>collectionTransform</code> turi parašą <code>(x kaip bet kuris) kaip sąrašas => ...</code>, kur <code>x</code> yra elementas, esantis <code>list</code>.    Funkcija <code>resultTransform</code> pateikia rezultato formą ir turi parašą <code>(x kaip bet kuris, y kaip bet kuris) kaip bet kuris => ...</code>, kur <code>x</code> yra elementas, esantis <code>list</code>, o <code>y</code> – elementas iš sąrašo, sugeneruoto perduodant <code>x</code> į <code>collectionTransform</code>.


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
