---
title: List.TransformMany
---

# List.TransformMany


Retourneert een lijst waarvan de elementen met behulp van de opgegeven functies zijn getransformeerd vanuit de invoerlijst.


## Syntax

```powerquery
List.TransformMany(
    list as list,
    collectionTransform as function,
    resultTransform as function
) as list
```


## Remarks

Retourneert een lijst waarvan de elementen worden geprojecteerd uit de invoerlijst.  
  
De `collectionTransform`\-functie transformeert elk element naar een tussenliggende lijst en de `resultTransform`\-functie ontvangt zowel het oorspronkelijke element als een item uit de tussenliggende lijst om het uiteindelijke resultaat samen te stellen.  
  
De `collectionTransform`\-functie heeft de handtekening `(x as any) as list => ...`, waarbij `x` een element is in `list`. The `resultTransform`\-functie projecteert de vorm van het resultaat en heeft de handtekening `(x as any, y as any) as any => ...`, waarbij `x` een element is in `list` en `y` een element is uit de lijst die wordt gegenereerd door `x` door te geven aan `collectionTransform`.


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
