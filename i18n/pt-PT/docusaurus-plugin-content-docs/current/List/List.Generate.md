---
title: List.Generate
---

# List.Generate


Gera uma lista de valores.


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

Gera uma lista de valores com as funções fornecidas. A função <code>initial</code> gera um valor de candidato inicial, que é testado em relação a <code>condition</code>.    Se o valor do candidato for aprovado, será devolvido como parte da lista resultante e o valor de candidato seguinte será gerado ao passar o valor recentemente aprovado para <code>next</code>.    Quando um valor candidato deixar de corresponder a <code>condition</code>, o processo de geração de lista é interrompido.    Também é possível fornecer um parâmetro opcional, <code>selector</code>, para transformar os itens na lista resultante.


## Examples

### Example #1 
Crie uma lista que começa com o número dez, reduzindo repetidamente em uma unidade e garantindo que cada item é superior a zero.
```powerquery
List.Generate(() => 10, each _ > 0, each _ - 1)
```

Result: 
```powerquery
{10, 9, 8, 7, 6, 5, 4, 3, 2, 1}
```


### Example #2 
Gerar uma lista de registos que contêm x e y, em que x é um valor e y é uma lista. x deve ser menor que 10 e representa o número de itens na lista y. Após a lista ser gerada, devolver apenas os valores de x.
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
