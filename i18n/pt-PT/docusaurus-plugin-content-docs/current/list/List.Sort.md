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

Ordena uma lista de dados, <code>list</code>, de acordo com os critérios opcionais especificados.    É possível especificar um parâmetro opcional, <code>comparisonCriteria</code>, como critério de comparação. Este parâmetro pode assumir os valores seguintes:    <ul>    <li> Para controlar a ordenação, o critério de comparação pode ser um valor de enumeração de Ordenação. (<code>Order.Descending</code>, <code>Order.Ascending</code>). </li>    <li> Para calcular uma chave a utilizar para a ordenação, é possível utilizar uma função de 1 argumento. </li>    <li> Para selecionar uma chave e controlar a ordenação, o critério de comparação pode ser uma lista que contém a chave e a ordem (<code>\{each 1 / _, Order.Descending}</code>). </li>    <li> Para controlar totalmente a comparação, é possível utilizar uma função de 2 argumentos. Esta função irá receber dois itens da lista (quaisquer dois itens em qualquer ordem). A função deverá devolver um dos seguintes valores:        <ul>            <li> <code>-1</code>: O primeiro item é inferior ao segundo item.</li>            <li> <code>0</code>: Os itens são idênticos.</li>            <li> <code>1</code>: O primeiro item é superior ao segundo item.</li>        </ul>        Value.Compare é um método que pode ser utilizado para delegar esta lógica. </li>    </ul>


## Examples

### Example #1 
Ordenar a lista \{2, 3, 1}.
```powerquery
List.Sort({2, 3, 1})
```

Result: 
```powerquery
{1, 2, 3}
```


### Example #2 
Ordenar a lista \{2, 3, 1} por ordem descendente.
```powerquery
List.Sort({2, 3, 1}, Order.Descending)
```

Result: 
```powerquery
{3, 2, 1}
```


### Example #3 
Ordenar a lista \{2, 3, 1} por ordem descendente utilizando o método Value.Compare.
```powerquery
List.Sort({2, 3, 1}, (x, y) => Value.Compare(1/x, 1/y))
```

Result: 
```powerquery
{3, 2, 1}
```




## Category
List.Ordering
