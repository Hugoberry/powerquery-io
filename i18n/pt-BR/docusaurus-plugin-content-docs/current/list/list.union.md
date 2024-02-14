---
title: List.Union
---

# List.Union


Retorna a união dos valores de lista encontrados na entrada.


## Syntax

```powerquery
List.Union(
    lists as list,
    optional equationCriteria as any
) as list
```


## Remarks

Assume uma lista das listas <code>lists</code>, une os itens nas listas individuais e as retorna na lista de saída. Consequentemente, a lista retornada conterá todos os itens em qualquer lista de entrada.    Esta operação mantém a semântica tipo Bag tradicional, para que os valores duplicados sejam correspondentes como parte da União.    Um valor de critérios de equação opcional, <code>equationCriteria</code>, pode ser especificado para controlar o teste de igualdade. 


## Examples

### Example #1 
Crie uma união da lista \{1..5}, \{2..6}, \{3..7}.
```powerquery
List.Union({{1..5}, {2..6}, {3..7}})
```

Result: 
```powerquery
{1, 2, 3, 4, 5, 6, 7}
```




## Category
List.Set operations
