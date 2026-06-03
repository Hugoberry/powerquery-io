---
title: List.TransformMany
---

# List.TransformMany


Devolve uma lista cujos elementos são transformados a partir da lista de entrada utilizando funções especificadas.


## Syntax

```powerquery
List.TransformMany(
    list as list,
    collectionTransform as function,
    resultTransform as function
) as list
```


## Remarks

Devolve uma lista cujos elementos são projetados a partir da lista de entrada.  
  
A função `collectionTransform` transforma cada elemento numa lista intermediada e a função `resultTransform` recebe o elemento original, bem como um item da lista intermediada para construir o resultado final.  
  
A função `collectionTransform` tem a assinatura `(x as any) as list => ...`, em que `x` é um elemento em `list`. A função `resultTransform` projeta a forma do resultado e tem a assinatura `(x as any, y as any) as any => ...`, em que `x` é um elemento em `list` e `y` é um elemento da lista gerada ao passar `x` para `collectionTransform`.


## Examples

### Example #1
Aplane uma lista de pessoas e respetivos animais de estimação.
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
