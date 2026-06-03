---
title: List.Sort
---

# List.Sort


Classifica uma lista de dados de acordo com os critérios especificados.


## Syntax

```powerquery
List.Sort(
    list as list,
    optional comparisonCriteria as any
) as list
```


## Remarks

Classifica uma lista de dados, `list`, de acordo com os critérios opcionais especificados. Um parâmetro opcional, `comparisonCriteria`, pode ser especificado como o critério de comparação. Isso pode assumir os seguintes valores:

-   Para controlar a ordem, o critério de comparação pode ser um valor Enum do pedido. (`Order.Descending`, `Order.Ascending`).
-   Para calcular uma chave a ser usada para classificação, uma função de 1 argumento pode ser usada.
-   Para selecionar uma chave e uma ordem de controle, o critério de comparação pode ser uma lista contendo a chave e a ordem (`{each 1 / _, Order.Descending}`).
-   para controlar completamente a comparação, uma função de dois argumentos pode ser usada (como Value.Compare). Esta função receberá dois itens da lista (quaisquer dois itens, em qualquer ordem). A função deve retornar um dos seguintes valores:
    -   `-1`: o primeiro item é menor que o segundo item.
    -   `0`: os itens são iguais.
    -   `1`: o primeiro item é maior que o segundo item.


## Examples

### Example #1
Classifique a lista \{2, 3, 1\}.
```powerquery
List.Sort({2, 3, 1})
```

Result: 
```powerquery
{1, 2, 3}
```


### Example #2
Classifique a lista \{2, 3, 1\} em ordem decrescente.
```powerquery
List.Sort({2, 3, 1}, Order.Descending)
```

Result: 
```powerquery
{3, 2, 1}
```


### Example #3
Classifique a lista \{2, 3, 1\} em ordem decrescente usando o método Value.Compare.
```powerquery
List.Sort({2, 3, 1}, (x, y) => Value.Compare(1/x, 1/y))
```

Result: 
```powerquery
{3, 2, 1}
```




## Category
List.Ordering
