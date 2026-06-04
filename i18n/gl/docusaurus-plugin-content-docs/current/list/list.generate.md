---
title: List.Generate
---

# List.Generate


Xera unha lista de valores.


## Syntax

```powerquery
List.Generate(
    initial as function,
    condition as function,
    next as function,
    optional selector as function
) as list
```


## Remarks

Xera unha lista de valores empregando as funcións fornecidas. A función `initial` xera un valor candidato inicial, que logo se proba con `condition`. Se o valor candidato é aprobado, devólvese na lista resultante e se xera o seguinte valor candidato ao pasar o novo valor aprobado por `next`. Cando un valor candidato non coincide con `condition`, o proceso de xeración da lista detense. Tamén se pode fornecer un parámetro opcional, `selector`, para transformar os elementos da lista resultante.


## Examples

### Example #1
Cree unha lista que comece por dez e vaia diminuíndo por un, asegurándose de que cada elemento é maior que cero.
```powerquery
List.Generate(() => 10, each _ > 0, each _ - 1)
```

Result: 
```powerquery
{10, 9, 8, 7, 6, 5, 4, 3, 2, 1}
```


### Example #2
Xera unha lista de rexistros que conteñen x e y, onde x é un valor e y é unha lista. x debe manterse menor que 10 e representa o número de elementos na lista y. Despois de xerar a lista, só devolve os valores x.
```powerquery
List.Generate(
    () => [x = 1, y = {}],
    each [x] < 10,
    each [x = List.Count([y]), y = [y] & {x}],
    each [x]
)
```

Result: 
```powerquery
{1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9}
```




## Category
List.Generators
