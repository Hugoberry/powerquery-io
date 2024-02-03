---
title: List.TransformMany
---

# List.TransformMany


## Description

Returnerar en lista vars element omvandlas från indatalistan med hjälp av angivna funktioner.


## Syntax

```powerquery
List.TransformMany(
    list as list,
    collectionTransform as function,
    resultTransform as function
) as list
```


## Details

Returnerar en lista vars element projiceras från indatalistan.<br />    <br />    Funktionen <code>collectionTransform</code> omvandlar varje element till en mellanliggande lista och funktionen <code>resultTransform</code> tar emot originalelementet samt ett objekt från den mellanliggande listan för att skapa det slutliga resultatet.<br />    <br />    Funktionen <code>collectionTransform</code> har signaturen <code>(x as any) som lista => ...</code>,  där <code>x</code> är ett element i <code>list</code>.    Funktionen <code>resultTransform</code> projicerar resultatets form och har signaturen <code>(x som vilken som helst, y som någon) som alla => ... </code>, där <code>x</code> är ett element i <code>list</code> och <code>y</code> är ett element från listan som genereras genom att skicka <code>x</code> till <code>collectionTransform</code>.


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
