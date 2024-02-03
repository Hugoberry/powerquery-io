---
title: List.Generate
---

# List.Generate


## Description

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


## Details

Gera uma lista de valores usando as funções fornecidas. A função <code>initial</code> gera um valor candidato inicial, que é então testado em relação a <code>condition</code>.    Se o valor candidato for aprovado, ele será retornado como parte da lista resultante e o próximo valor candidato será gerado passando o valor recém-aprovado para <code>next</code>.    Uma vez que um valor candidato não corresponda com <code>condition</code>, o processo de geração de lista será interrompido.    Um parâmetro opcional, <code>selector</code>, também pode ser fornecido para transformar os itens na lista resultante.


## Examples

### Example #1 
Crie uma lista começando em dez, diminuindo repetidamente até um e garantindo que cada item seja maior que zero.
```powerquery
List.Generate(() => 10, each _ > 0, each _ - 1)
```

Result: 
```powerquery
{10, 9, 8, 7, 6, 5, 4, 3, 2, 1}
```


### Example #2 
Gere uma lista de registros que contenha x e y, onde x é um valor e y é uma lista. x deverá ser inferior a 10 e representa o número de itens na lista y. Após a geração da lista, retorna apenas os valores x.
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
