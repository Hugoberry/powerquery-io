---
title: List.Union
---

# List.Union


## Description

Devolve a unión dos valores da lista localizados na entrada.


## Syntax

```powerquery
List.Union(
    lists as list,
    optional equationCriteria as any
) as list
```


## Details

Toma unha lista de listas <code>lists</code>, une os elementos das listas individuais e devólveos á lista de saída. Como consecuencia, a lista devolta contén todos os elementos de todas as listas de entrada.    Esta operación mantén a semántica de multiconxuntos tradicional, polo que os valores duplicados coinciden como parte da unión.    Pódese indicar un valor de criterio de ecuación opcional, <code>equationCriteria</code>, para controlar probas de igualdade. 


## Examples

### Example #1 
Crear unha unión da lista \{1..5}, \{2..6}, \{3..7}.
```powerquery
List.Union({{1..5}, {2..6}, {3..7}})
```

Result: 
```powerquery
{1, 2, 3, 4, 5, 6, 7}
```




## Category
List.Set operations
