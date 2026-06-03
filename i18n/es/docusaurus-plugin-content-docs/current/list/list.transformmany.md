---
title: List.TransformMany
---

# List.TransformMany


Devuelve una lista cuyos elementos se transforman de la lista de entrada con las funciones especificadas.


## Syntax

```powerquery
List.TransformMany(
    list as list,
    collectionTransform as function,
    resultTransform as function
) as list
```


## Remarks

Devuelve una lista cuyos elementos se proyectan a partir de la lista de entrada.  
  
La función `collectionTransform` transforma cada elemento en una lista intermedia y la función `resultTransform` recibe el elemento original, así como un elemento de la lista intermedia, para construir el resultado final.  
  
La función `collectionTransform` tiene la firma `(x como cualquiera) como lista => ...`, donde `x` es un elemento en `list`. La función `resultTransform` proyecta la forma del resultado y tiene la firma `(x como cualquiera, y como cualquiera) como cualquiera => ...`, donde `x` es un elemento en `list` y `y` es un elemento de la lista generada al pasar `x` a `collectionTransform`.


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
