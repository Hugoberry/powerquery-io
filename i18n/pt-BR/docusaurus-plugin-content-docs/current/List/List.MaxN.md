---
title: List.MaxN
---

# List.MaxN


Retorna os valores máximos na lista. O número de valores a serem retornados ou a condição de filtragem devem ser especificados.


## Syntax

```powerquery
List.MaxN(
    list as list,
    countOrCondition as any,
    optional comparisonCriteria as any,
    optional includeNulls as logical
) as list
```


## Remarks

Retorna o(s) valor(es) máximo(s) na lista, <code>list</code>.    Depois que as linhas são classificadas, parâmetros opcionais podem ser especificados para filtrar ainda mais o resultado. O parâmetro opcional <code>countOrCondition</code> especifica o número de valores a serem retornados ou uma condição de filtragem. O parâmetro opcional <code>comparisonCriteria</code> especifica como comparar valores na lista. <ul>        <li> <code>list</code>: a lista de valores.</li>        <li> <code>countOrCondition</code>: Se um número for especificado, uma lista de até <code>countOrCondition</code> itens em ordem crescente será retornada. Se uma condição for especificada, uma lista de itens que atendem inicialmente à condição será retornada. Quando um item falha na condição, nenhum outro item é considerado.</li><li><code>comparisonCriteria</code>: <i>[Opcional]</i> Um valor <code>comparisonCriteria</code> opcional pode ser especificado para determinar como comparar os itens na lista. Se este parâmetro for nulo, o comparador padrão será usado. </li></ul>



## Category
List.Ordering
