---
title: List.TransformMany
---

# List.TransformMany


## Description

Көрсетілген функцияларды пайдаланып элементтері кіріс тізімнен түрлендірілген тізімді қайтарады.


## Syntax

```powerquery
List.TransformMany(
    list as list,
    collectionTransform as function,
    resultTransform as function
) as list
```


## Details

Элементтері енгізу тізімінен жобаланған тізімді қайтарады.<br />    <br /><code>collectionTransform</code> функциясы әрбір элементті аралық тізімге түрлендіреді, ал <code>resultTransform</code> функциясы соңғы нәтижені құру мақсатында бастапқы элементті, сондай-ақ аралық тізімнен элементті алады.<br />    <br />    <code>collectionTransform</code> функциясында  қолтаңбасы бар <code>(x as any) as list => ...</code>, мұндағы <code>x</code> — <code>list</code> ішіндегі элемент.    <code>resultTransform</code> функциясы нәтиженің пішінін жобалап, қолтаңбасы бар <code>(x as any, y as any) as any => ...</code>, мұндағы <code>x</code> <code>list</code> ішіндегі элемент болып табылады, ал <code>y</code> — <code>x</code> мәнін <code>collectionTransform</code> мәніне өткізу арқылы жасалған тізімдегі элемент болып табылады.


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
