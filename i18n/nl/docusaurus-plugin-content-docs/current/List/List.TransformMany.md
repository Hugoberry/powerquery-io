---
title: List.TransformMany
---

# List.TransformMany


## Description

Retourneert een lijst waarvan de elementen met behulp van de opgegeven functies zijn getransformeerd vanuit de invoerlijst.


## Syntax

```powerquery
List.TransformMany(
    list as list,
    collectionTransform as function,
    resultTransform as function
) as list
```


## Details

Retourneert een lijst waarvan de elementen worden geprojecteerd uit de invoerlijst.<br />    <br />     De <code>collectionTransform</code>-functie transformeert elk element naar een tussenliggende lijst en de <code>resultTransform</code>-functie ontvangt zowel het oorspronkelijke element als een item uit de tussenliggende lijst om het uiteindelijke resultaat samen te stellen.<br />     <br />    De <code>collectionTransform</code>-functie heeft de handtekening <code>(x as any) as list => ...</code>, waarbij <code>x</code> een element is in <code>list</code>.     The <code>resultTransform</code>-functie projecteert de vorm van het resultaat en heeft de handtekening <code>(x as any, y as any) as any => ...</code>, waarbij <code>x</code> een element is in <code>list</code> en <code>y</code> een element is uit de lijst die wordt gegenereerd door <code>x</code> door te geven aan <code>collectionTransform</code>.


## Examples

### Example #1 
Maak een lijst met personen en hun huisdieren plat.
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
