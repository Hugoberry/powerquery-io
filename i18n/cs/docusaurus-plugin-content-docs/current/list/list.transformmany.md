---
title: List.TransformMany
---

# List.TransformMany


Vrátí seznam, jehož elementy jsou transformovány ze vstupního seznamu pomocí určených funkcí.


## Syntax

```powerquery
List.TransformMany(
    list as list,
    collectionTransform as function,
    resultTransform as function
) as list
```


## Remarks

Vrátí seznam, jehož elementy jsou promítány ze vstupního seznamu.  
  
Funkce `collectionTransform` transformuje každý prvek na zprostředkující seznam a funkce `resultTransform` přijímá původní element i položku z přechodného seznamu, aby bylo možné vytvořit konečný výsledek.  
  
Funkce `collectionTransform` má signaturu `(x jako libovolný) jako seznam =>...` , kde `x` je prvek v `list`. Funkce `resultTransform` promítá tvar výsledku a má signaturu `(x jako jakýkoli jiný, y jako jakýkoli jiný) jako jakýkoli =>...` , kde `x` je element v `list` a `y` je prvek ze seznamu vygenerovaný předáním `x` do `collectionTransform`.


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
