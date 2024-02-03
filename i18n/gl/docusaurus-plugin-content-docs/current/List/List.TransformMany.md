---
title: List.TransformMany
---

# List.TransformMany


## Description

Devolve unha lista na que se transforman os elementos a partir da lista de entrada utilizando as funcións especificadas.


## Syntax

```powerquery
List.TransformMany(
    list as list,
    collectionTransform as function,
    resultTransform as function
) as list
```


## Details

Devolve unha lista cuxos elementos se proxectan desde a lista de entrada..<br />    <br />    A función <code>collectionTransform</code> transforma cada elemento nunha lista intermedia e a función <code>resultTransform</code> recibe o elemento orixinal así como un elemento da lista intermedia para construír a final resultado.<br />    <br />  A función <code>collectionTransform</code> ten a sinatura <code>(x como calquera) como lista => ...</code>, onde <code>x</code> é un elemento en <code>list</code>.    A función <code>resultTransform</code> proxecta a forma do resultado e ten a sinatura <code>(x como calquera, y como calquera) como calquera => ...</code>, onde <code>x</code> é un elemento en <code>list</code> e <code>y</code> é un elemento da lista xerada ao pasar <code>x</code> a <code>collectionTransform</code>.


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
