---
title: List.Sort
---

# List.Sort


## Description

Classifica uma lista de dados de acordo com os critérios especificados.


## Syntax

```powerquery
List.Sort(
    list as list,
    optional comparisonCriteria as any
) as list
```


## Details

Classifica uma lista de dados, <code>list</code>, de acordo com os critérios opcionais especificados.    Um parâmetro opcional, <code>comparisonCriteria</code>, pode ser especificado como o critério de comparação. Isso pode assumir os seguintes valores:    <ul>    <li> Para controlar o pedido, o critério de comparação pode ser um valor Enum do pedido. (<code>Order.Descending</code>, <code>Order.Ascending</code>). </li>    <li>Para calcular uma chave a ser usada para classificação, uma função de 1 argumento pode ser usada.</li>    <li> Para selecionar uma chave e uma ordem de controle, o critério de comparação pode ser uma lista contendo a chave e a ordem (<code>\{each 1 / _, Order.Descending}</code>). </li>    <li> Para controlar completamente a comparação, uma função de 2 argumentos pode ser usada. Esta função receberá dois itens da lista (quaisquer dois itens, em qualquer ordem). A função deve retornar um dos seguintes valores:        <ul>            <li> <code>-1</code>: o primeiro item é menor que o segundo item.</li>            <li> <code>0</code>: os itens são iguais.</li>            <li> <code>1</code>: o primeiro item é maior que o segundo item.</li>        </ul>        Compare é um método que pode ser usado para delegar essa lógica. </li>    </ul>


## Examples

### Example #1 
Classifique a lista \{2, 3, 1}.
```powerquery
List.Sort({2, 3, 1})
```

Result: 
```powerquery
{1, 2, 3}
```


### Example #2 
Classifique a lista \{2, 3, 1} em ordem decrescente.
```powerquery
List.Sort({2, 3, 1}, Order.Descending)
```

Result: 
```powerquery
{3, 2, 1}
```


### Example #3 
Classifique a lista \{2, 3, 1} em ordem decrescente usando o método Value.Compare.
```powerquery
List.Sort({2, 3, 1}, (x, y) => Value.Compare(1/x, 1/y))
```

Result: 
```powerquery
{3, 2, 1}
```




## Category
List.Ordering
