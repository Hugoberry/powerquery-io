---
title: List.InsertRange
---

# List.InsertRange


## Description

Insere valores em uma lista no índice especificado.


## Syntax

```powerquery
List.InsertRange(
    list as list,
    index as number,
    values as list
) as list
```


## Details

Retorna uma nova lista gerada através da inserção dos valores em <code>values</code> em <code>list</code> em <code>index</code>. A primeira posição na lista está no índice 0.      <ul>        <li><code>list</code>: A lista de destino em que os valores serão inseridos.</li>        <li><code>index</code>: O índice da lista de destino (<code>list</code>) em que os valores serão inseridos. A primeira posição na lista está no índice 0.</li>        <li><code>values</code>: A lista de valores que serão inseridos em <code>list</code>.</li>      </ul>


## Examples

### Example #1 
Insira a lista (\{3, 4}) na lista de destino (\{1, 2, 5}) no índice. 2.
```powerquery
List.InsertRange({1, 2, 5}, 2, {3, 4})
```

Result: 
```powerquery
{
    1,
    2,
    3,
    4,
    5
}
```


### Example #2 
Insira uma lista com uma lista aninhada (\{1, \{1.1, 1.2}}) em uma lista de destino (\{2, 3, 4}) no índice 0.
```powerquery
List.InsertRange({2, 3, 4}, 0, {1, {1.1, 1.2}})
```

Result: 
```powerquery
{
    1,
    {
        1.1,
        1.2
    },
    2,
    3,
    4
}
```




## Category
List.Selection
