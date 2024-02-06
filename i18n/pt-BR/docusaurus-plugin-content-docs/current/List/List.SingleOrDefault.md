---
title: List.SingleOrDefault
---

# List.SingleOrDefault


Retorna o item de lista 1 de uma lista de comprimento 1 e o valor padrão de uma lista vazia.


## Syntax

```powerquery
List.SingleOrDefault(
    list as list,
    optional default as any
) as any
```


## Remarks

Se houver somente um item na lista <code>list</code>, esse item será retornado.    Se a lista estiver vazia, a função retornará um valor nulo, a menos que um <code>default</code> opcional seja especificado. Se houver mais de um item na lista, a função retornará um erro.


## Examples

### Example #1 
Localize o valor único na lista \{1}.
```powerquery
List.SingleOrDefault({1})
```

Result: 
```powerquery
1
```


### Example #2 
Localize o valor único na lista \{}.
```powerquery
List.SingleOrDefault({})
```

Result: 
```powerquery
null
```


### Example #3 
Localize o valor único na lista \{}. Se ela estiver vazia, -1 será retornado.
```powerquery
List.SingleOrDefault({}, -1)
```

Result: 
```powerquery
-1
```




## Category
List.Selection
