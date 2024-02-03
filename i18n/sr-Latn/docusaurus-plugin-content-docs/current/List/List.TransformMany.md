---
title: List.TransformMany
---

# List.TransformMany


## Description

Vraća listu čiji su elementi transformisani na osnovu liste unosa pomoću navedenih funkcija.


## Syntax

```powerquery
List.TransformMany(
    list as list,
    collectionTransform as function,
    resultTransform as function
) as list
```


## Details

Vraća listu čiji su elementi projektovani sa liste unosa.<br />    <br />    Funkcija „<code>collectionTransform</code>“ transformiše svaki element u srednju listu, a funkcija „<code>resultTransform</code>“ prima originalni element, kao i stavku sa srednje liste da bi se konstruisao konačni rezultat.<br />    <br />    Funkcija „<code>collectionTransform</code>“ ima potpis <code>(x kao bilo koji) kao lista => ...</code>,  gde <code>x</code> predstavlja element u <code>list</code>.    Funkcija „<code>resultTransform</code>“ projektuje oblik rezultata i ima potpis <code>(x kao bilo koji, y kao bilo koji) kao bilo koji => ...</code>, gde <code>x</code> predstavlja element u <code>list</code>, a <code>y</code> predstavlja element sa liste generisan prosleđivanjem elementa <code>x</code> u <code>collectionTransform</code>.


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
