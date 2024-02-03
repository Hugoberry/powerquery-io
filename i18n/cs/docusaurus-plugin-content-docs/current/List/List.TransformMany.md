---
title: List.TransformMany
---

# List.TransformMany


## Description

Vrátí seznam, jehož elementy jsou transformovány ze vstupního seznamu pomocí určených funkcí.


## Syntax

```powerquery
List.TransformMany(
    list as list,
    collectionTransform as function,
    resultTransform as function
) as list
```


## Details

Vrátí seznam, jehož elementy jsou promítány ze vstupního seznamu.<br />    <br />    Funkce <code>collectionTransform</code> transformuje každý prvek na zprostředkující seznam a funkce <code>resultTransform</code> přijímá původní element i položku z přechodného seznamu, aby bylo možné vytvořit konečný výsledek.<br />    <br />    Funkce <code>collectionTransform</code> má signaturu <code>(x jako libovolný) jako seznam =>... </code>, kde <code>x</code> je prvek v <code>list</code>.    Funkce <code>resultTransform</code> promítá tvar výsledku a má signaturu <code>(x jako jakýkoli jiný, y jako jakýkoli jiný) jako jakýkoli =>... </code>, kde <code>x</code> je element v <code>list</code> a <code>y</code> je prvek ze seznamu vygenerovaný předáním <code>x</code> do <code>collectionTransform</code>.


## Examples

### Example #1 
Zploštit seznam lidí a jejich mazlíčků.
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
