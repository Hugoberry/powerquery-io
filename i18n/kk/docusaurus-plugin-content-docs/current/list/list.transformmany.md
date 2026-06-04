---
title: List.TransformMany
---

# List.TransformMany


Көрсетілген функцияларды пайдаланып элементтері кіріс тізімнен түрлендірілген тізімді қайтарады.


## Syntax

```powerquery
List.TransformMany(
    list as list,
    collectionTransform as function,
    resultTransform as function
) as list
```


## Remarks

Элементтері енгізу тізімінен жобаланған тізімді қайтарады.  
  
`collectionTransform` функциясы әрбір элементті аралық тізімге түрлендіреді, ал `resultTransform` функциясы соңғы нәтижені құру мақсатында бастапқы элементті, сондай-ақ аралық тізімнен элементті алады.  
  
`collectionTransform` функциясында қолтаңбасы бар `(x as any) as list => ...`, мұндағы `x` — `list` ішіндегі элемент. `resultTransform` функциясы нәтиженің пішінін жобалап, қолтаңбасы бар `(x as any, y as any) as any => ...`, мұндағы `x` `list` ішіндегі элемент болып табылады, ал `y` — `x` мәнін `collectionTransform` мәніне өткізу арқылы жасалған тізімдегі элемент болып табылады.


## Examples

### Example #1
Адамдар мен олардың үй жануарларының тізімін жинақтаңыз.
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
