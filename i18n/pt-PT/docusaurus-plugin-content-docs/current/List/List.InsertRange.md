---
title: List.InsertRange
---

# List.InsertRange


## Description

Insere valores numa lista no índice especificado.


## Syntax

```powerquery
List.InsertRange(
    list as list,
    index as number,
    values as list
) as list
```


## Details

Devolve uma lista nova produzida pela inserção dos valores existentes em <code>values</code> em <code>list</code> em <code>index</code>. A primeira posição na lista encontra-se no índice 0.      <ul>        <li><code>list</code>: a lista de destino onde os valores devem ser inseridos.</li>        <li><code>index</code>: o índice da lista de destino (<code>list</code>) onde os valores devem ser inseridos. A primeira posição na lista encontra-se no índice 0.</li>        <li><code>values</code>: a lista de valores que devem ser inseridos em <code>list</code>.</li>      </ul>


## Examples

### Example #1 
Inserir a lista (\{3, 4}) na lista de destino (\{1, 2, 5}) no índice 2.
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
Inserir uma lista com uma lista aninhada (\{1, \{1.1, 1.2}}) numa lista de destino (\{2, 3, 4}) no índice 0.
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
