---
title: List.TransformMany
---

# List.TransformMany


Retorna uma lista cujos elementos serão transformados na lista de entrada usando funções especificadas.


## Syntax

```powerquery
List.TransformMany(
    list as list,
    collectionTransform as function,
    resultTransform as function
) as list
```


## Remarks

Retorna uma lista cujos elementos são projetados da lista de entrada.  
  
A função `collectionTransform` transforma cada elemento em uma lista intermediária, e a função `resultTransform` recebe o elemento original e também um item da lista intermediária para construir o resultado final.  
  
A função `collectionTransform` tem a assinatura `(x como qualquer) como lista => ...`, onde `x` é um elemento em `list`. A função `resultTransform` projeta a forma do resultado e tem a assinatura `(x como qualquer, y como qualquer) como qualquer => ...`, onde `x` é um elemento em `list` e `y` é um elemento da lista gerada passando `x` para `collectionTransform`.


## Examples

### Example #1
Nivele uma lista de pessoas e seus animais de estimação.
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
