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

Retorna uma lista cujos elementos são projetados da lista de entrada.<br />    <br />    A função <code>collectionTransform</code> transforma cada elemento em uma lista intermediária, e a função <code>resultTransform</code> recebe o elemento original e também um item da lista intermediária para construir o resultado final.<br />    <br />    A função <code>collectionTransform</code> tem a assinatura <code>(x como qualquer) como lista => ...</code>, onde <code>x</code> é um elemento em <code>list</code>.    A função <code>resultTransform</code> projeta a forma do resultado e tem a assinatura <code>(x como qualquer, y como qualquer) como qualquer => ...</code>, onde <code>x</code> é um elemento em <code>list</code> e <code>y</code> é um elemento da lista gerada passando <code>x</code> para <code>collectionTransform</code>.


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
