---
title: List.MinN
---

# List.MinN


## Description

Retorna os valores mínimos na lista. O número de valores a serem retornados ou a condição de filtragem podem ser especificados.


## Syntax

```powerquery
List.MinN(
    list as list,
    countOrCondition as any,
    optional comparisonCriteria as any,
    optional includeNulls as logical
) as list
```


## Details

Retorna os valores mínimos na lista, <code>list</code>. O parâmetro, <code>countOrCondition</code>, especifica o número de valores a serem retornados ou uma condição de filtragem. O parâmetro opcional, <code>comparisonCriteria</code>, especifica como comparar valores na lista. <ul> <li> <code>list</code>: a lista de valores.</li> <li> <code>countOrCondition</code>: Se um número for especificado, uma lista de até <code>countOrCondition</code> itens em ordem crescente será retornada. Se uma condição for especificada, uma lista de itens que atendem inicialmente à condição será retornada. Quando um item falha na condição, nenhum outro item é considerado. Se esse parâmetro for nulo, o menor valor único na lista será retornado.</li><li><code>comparisonCriteria</code>: <i>[Opcional]</i> Um valor <code>comparisonCriteria</code> opcional pode ser especificado para determinar como comparar os itens na lista. Se este parâmetro for nulo, o comparador padrão será usado. </li></ul>


## Examples

### Example #1 
Localize os cinco menores valores da lista &lt;code&gt;\{3, 4, 5, -1, 7, 8, 2}&lt;/code&gt;.
```powerquery
List.MinN({3, 4, 5, -1, 7, 8, 2}, 5)
```

Result: 
```powerquery
{-1, 2, 3, 4, 5}
```




## Category
List.Ordering
