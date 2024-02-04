---
title: List.Difference
---

# List.Difference


## Description

Devolve a diferença das duas listas especificadas.


## Syntax

```powerquery
List.Difference(
    list1 as list,
    list2 as list,
    optional equationCriteria as any
) as list
```


## Details

Devolve os itens existentes na lista <code>list1</code> que não aparecem na lista <code>list2</code>. Os valores duplicados são suportados.    É possível especificar um valor de critério de equação opcional, <code>equationCriteria</code>, para controlar o teste de igualdade. 


## Examples

### Example #1 
Encontre os itens na lista \{1, 2, 3, 4, 5} que não aparecem em \{4, 5, 3}.
```powerquery
List.Difference({1, 2, 3, 4, 5}, {4, 5, 3})
```

Result: 
```powerquery
{1, 2}
```


### Example #2 
Determinar os itens existentes na lista \{1, 2} que não aparecem em \{1, 2, 3}.
```powerquery
List.Difference({1, 2}, {1, 2, 3})
```

Result: 
```powerquery
{}
```




## Category
List.Set operations
