---
title: List.LastN
---

# List.LastN


## Description

Retorna o último valor da lista.  Opcionalmente, pode especificar quantos valores serão retornados ou uma condição de qualificação.


## Syntax

```powerquery
List.LastN(
    list as list,
    optional countOrCondition as any
) as any
```


## Details

Retorna o último item da lista <code>list</code>. Se a lista estiver vazia, uma exceção será lançada. Esta função assume um parâmetro opcional <code>countOrCondition</code>, a fim de oferecer suporte à coleta de vários itens ou à filtragem de itens. <code>countOrCondition</code> pode ser especificado de três maneiras: <ul>  <li>Se um número for especificado, essa será a quantidade de itens retornados. </li>  <li>Se uma condição for especificada, todos os itens que atenderem inicialmente à condição serão retornados, começando pelo fim da lista. Quando um item não atender à condição, nenhum outro item será considerado. </li>  <li>Se esse parâmetro for nulo, o último item da lista será retornado.</li> </ul>


## Examples

### Example #1 
Localize o último valor da lista \{3, 4, 5, -1, 7, 8, 2}.
```powerquery
List.LastN({3, 4, 5, -1, 7, 8, 2}, 1)
```

Result: 
```powerquery
{2}
```


### Example #2 
Localize os últimos valores da lista \{3, 4, 5, -1, 7, 8, 2} que sejam maiores que 0.
```powerquery
List.LastN({3, 4, 5, -1, 7, 8, 2}, each _ > 0)
```

Result: 
```powerquery
{7, 8, 2}
```




## Category
List.Selection
