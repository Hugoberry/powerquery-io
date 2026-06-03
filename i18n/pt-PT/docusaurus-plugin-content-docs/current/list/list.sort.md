---
title: List.Sort
---

# List.Sort


Ordena uma lista de dados de acordo com os critérios especificados.


## Syntax

```powerquery
List.Sort(
    list as list,
    optional comparisonCriteria as any
) as list
```


## Remarks

Ordena uma lista de dados, `list`, de acordo com os critérios opcionais especificados. Poderá ser especificado um parâmetro opcional, `comparisonCriteria`, como critério de comparação. Pode assumir os valores seguintes:

-   Para controlar a ordem, o critério de comparação pode ser um valor de enumeração Order. (`Order.Descending`, `Order.Ascending`).
-   Para calcular uma chave a utilizar na ordenação, poderá ser utilizada uma função de um argumento.
-   Para selecionar uma chave e controlar a ordem, o critério de comparação pode ser uma lista que contém a chave e a ordem (`{each 1 / _, Order.Descending}`).
-   Para controlar totalmente a comparação, poderá ser utilizada uma função de dois argumentos (como Value.Compare). Serão transmitidos a esta função dois itens da lista (quaisquer dois itens, em qualquer ordem). A função deverá devolver um dos valores seguintes:
    -   `-1`: o primeiro item é menor do que o segundo item.
    -   `0`: os itens são iguais.
    -   `1`: o primeiro item é maior do que o segundo item.


## Examples

### Example #1
Ordenar a lista \{2, 3, 1\}.
```powerquery
List.Sort({2, 3, 1})
```

Result: 
```powerquery
{1, 2, 3}
```


### Example #2
Ordenar a lista \{2, 3, 1\} por ordem descendente.
```powerquery
List.Sort({2, 3, 1}, Order.Descending)
```

Result: 
```powerquery
{3, 2, 1}
```


### Example #3
Ordenar a lista \{2, 3, 1\} por ordem descendente utilizando o método Value.Compare.
```powerquery
List.Sort({2, 3, 1}, (x, y) => Value.Compare(1/x, 1/y))
```

Result: 
```powerquery
{3, 2, 1}
```




## Category
List.Ordering
