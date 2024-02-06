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

Devolve uma lista cujos elementos são projetados a partir da lista de entrada.<br />    <br />    A função <code>collectionTransform</code> transforma cada elemento numa lista intermediada e a função <code>resultTransform</code> recebe o elemento original, bem como um item da lista intermediada para construir o resultado final.<br />    <br />    A função <code>collectionTransform</code> tem a assinatura <code>(x as any) as list => ...</code>, em que <code>x</code> é um elemento em <code>list</code>.    A função <code>resultTransform</code> projeta a forma do resultado e tem a assinatura <code>(x as any, y as any) as any => ...</code>, em que <code>x</code> é um elemento em <code>list</code> e <code>y</code> é um elemento da lista gerada ao passar <code>x</code> para <code>collectionTransform</code>.


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
