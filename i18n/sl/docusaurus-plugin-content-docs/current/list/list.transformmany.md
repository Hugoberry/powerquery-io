---
title: List.TransformMany
---

# List.TransformMany


Vrne seznam z elementi, ki so pretvorjeni iz vhodnega seznama z navedenimi funkcijami.


## Syntax

```powerquery
List.TransformMany(
    list as list,
    collectionTransform as function,
    resultTransform as function
) as list
```


## Remarks

Vrne seznam, katerega elementi so projicirani iz vhodnega seznama.  
  
Funkcija `collectionTransform` pretvori vsak element v vmesni seznam, funkcija `resultTransform` pa izvirni element kot tudi element z vmesnega seznama pretvori v končni rezultat  
  
Funkcija `collectionTransform` ima podpis `(x kot poljuben) kot seznam => ...`, kjer je`x` element v mapi `list`. Funkcija `resultTransform` projicira obliko rezultata in ima podpis `(x kot poljuben, y kot poljuben) kot poljuben => ...`, kjer je `x` element v `list` in `y` element s seznama, ustvarjenega s prehodom `x` v `collectionTransform`.


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
