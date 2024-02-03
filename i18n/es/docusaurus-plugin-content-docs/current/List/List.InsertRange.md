---
title: List.InsertRange
---

# List.InsertRange


## Description

Inserta valores en una lista en el índice especificado.


## Syntax

```powerquery
List.InsertRange(
    list as list,
    index as number,
    values as list
) as list
```


## Details

Devuelve una nueva lista generada insertando los valores de <code>values</code> en <code>list</code> y <code>index</code>. La primera posición de la lista está en el índice 0.      <ul>        <li><code>list</code>: la lista de destino donde se van a insertar los valores.</li>        <li><code>index</code>: el índice de la lista de destino (<code>list</code>) donde se van a insertar los valores. La primera posición de la lista está en el índice 0.</li>        <li><code>values</code>: la lista de valores que se van a insertar en <code>list</code>.</li>      </ul>


## Examples

### Example #1 
Insertar lista (\{3, 4}) en la lista de destino (\{1, 2, 5}) en el índice 2.
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
Insertar una lista con una lista anidada (\{1, \{1.1, 1.2}}) en una lista de destino (\{2, 3, 4}) en el índice 0.
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
