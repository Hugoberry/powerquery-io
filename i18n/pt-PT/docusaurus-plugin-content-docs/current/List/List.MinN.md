---
title: List.MinN
---

# List.MinN


## Description

Devolve o(s) valor(es) mínimo(s) existente(s) na lista. É possível especificar o número de valores a devolver ou a condição de filtragem.


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

Devolve o(s) valor(es) mínimo(s) existente(s) na lista, <code>list</code>.    O parâmetro, <code>countOrCondition</code>, especifica o número de valores a devolver ou uma condição de filtragem. O parâmetro opcional, <code>comparisonCriteria</code>, especifica como os valores existentes na lista devem ser comparados. <ul>        <li> <code>list</code>: a lista de valores.</li>        <li> <code>countOrCondition</code>: Se for especificado um número, é devolvida uma lista com um máximo de <code>countOrCondition</code> itens por ordem ascendente. Se for especificada uma condição, é devolvida uma lista dos itens que satisfaçam a condição inicial. Quando um item não satisfizer a condição, não serão considerados mais itens. Se este parâmetro for nulo, será devolvido o único menor valor existente na lista.</li><li><code>comparisonCriteria</code>: <i>[Opcional]</i> Um valor opcional<code>comparisonCriteria</code> pode ser especificado para determinar como comparar itens na lista. Se este parâmetro for nulo, será utilizado o comparador predefinido.</li></ul>


## Examples

### Example #1 
Determinar os 5 valores menores na lista &lt;code&gt;\{3, 4, 5, -1, 7, 8, 2}&lt;/code&gt;.
```powerquery
List.MinN({3, 4, 5, -1, 7, 8, 2}, 5)
```

Result: 
```powerquery
{-1, 2, 3, 4, 5}
```




## Category
List.Ordering
