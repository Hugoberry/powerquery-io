---
title: List.TransformMany
---

# List.TransformMany


Devolve unha lista na que se transforman os elementos a partir da lista de entrada utilizando as funcións especificadas.


## Syntax

```powerquery
List.TransformMany(
    list as list,
    collectionTransform as function,
    resultTransform as function
) as list
```


## Remarks

Devolve unha lista cuxos elementos se proxectan desde a lista de entrada..  
  
A función `collectionTransform` transforma cada elemento nunha lista intermedia e a función `resultTransform` recibe o elemento orixinal así como un elemento da lista intermedia para construír a final resultado.  
  
A función `collectionTransform` ten a sinatura `(x como calquera) como lista => ...`, onde `x` é un elemento en `list`. A función `resultTransform` proxecta a forma do resultado e ten a sinatura `(x como calquera, y como calquera) como calquera => ...`, onde `x` é un elemento en `list` e `y` é un elemento da lista xerada ao pasar `x` a `collectionTransform`.


## Examples

### Example #1
Simplificar unha lista de persoas e as súas mascotas.
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
