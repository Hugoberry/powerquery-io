---
title: List.TransformMany
---

# List.TransformMany


## Description

Devuelve una lista cuyos elementos se transforman de la lista de entrada con las funciones especificadas.


## Syntax

```powerquery
List.TransformMany(
    list as list,
    collectionTransform as function,
    resultTransform as function
) as list
```


## Details

Devuelve una lista cuyos elementos se proyectan a partir de la lista de entrada.<br />    <br />    La función <code>collectionTransform</code> transforma cada elemento en una lista intermedia y la función <code>resultTransform</code> recibe el elemento original, así como un elemento de la lista intermedia, para construir el resultado final.<br />    <br />    La función <code>collectionTransform</code> tiene la firma <code>(x como cualquiera) como lista => ...</code>,  donde <code>x</code> es un elemento en <code>list</code>.    La función <code>resultTransform</code> proyecta la forma del resultado y tiene la firma <code>(x como cualquiera, y como cualquiera) como cualquiera => ...</code>, donde <code>x</code> es un elemento en <code>list</code> y <code>y</code> es un elemento de la lista generada al pasar <code>x</code> a <code>collectionTransform</code>.


## Examples

### Example #1 
Acopla una lista de personas y sus mascotas.
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
