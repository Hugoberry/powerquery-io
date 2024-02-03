---
title: List.TransformMany
---

# List.TransformMany


## Description

Vrne seznam z elementi, ki so pretvorjeni iz vhodnega seznama z navedenimi funkcijami.


## Syntax

```powerquery
List.TransformMany(
    list as list,
    collectionTransform as function,
    resultTransform as function
) as list
```


## Details

Vrne seznam, katerega elementi so projicirani iz vhodnega seznama.<br />    <br />    Funkcija <code>collectionTransform</code> pretvori vsak element v vmesni seznam, funkcija <code>resultTransform</code> pa izvirni element kot tudi element z vmesnega seznama pretvori v končni rezultat <br />    <br />    Funkcija <code>collectionTransform</code> ima podpis <code>(x kot poljuben) kot seznam => ...</code>,  kjer je<code>x</code> element v mapi <code>list</code>.    Funkcija <code>resultTransform</code> projicira obliko rezultata in ima podpis <code>(x kot poljuben, y kot poljuben) kot poljuben => ...</code>, kjer je <code>x</code> element v <code>list</code> in <code>y</code> element s seznama, ustvarjenega s prehodom <code>x</code> v <code>collectionTransform</code>.


## Examples

### Example #1 
Sploščen seznam ljudi in njihovih hišnih ljubljenčkov.
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
