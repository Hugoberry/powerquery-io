---
title: List.MaxN
---

# List.MaxN


Devolve o(s) valor(es) máximo(s) existente(s) na lista. Tem de especificar o número de valores a devolver ou a condição de filtragem.


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

Devolve o(s) valor(es) máximo(s) existente(s) na lista, <code>list</code>.    Após as linhas serem ordenadas, é possível especificar parâmetros opcionais para filtrar melhor o resultado. O parâmetro opcional, <code>countOrCondition</code>, especifica o número de valores a devolver ou uma condição de filtragem. O parâmetro opcional, <code>comparisonCriteria</code>, especifica como os valores existentes na lista devem ser comparados. <ul>        <li> <code>list</code>: A lista de valores.</li>        <li> <code>countOrCondition</code>: Se for especificado um número, é devolvida uma lista com um máximo de <code>countOrCondition</code> itens por ordem ascendente. Se for especificada uma condição, é devolvida uma lista dos itens que satisfaçam a condição inicial. Quando um item não satisfizer a condição, não serão considerados mais itens.</li><li><code>comparisonCriteria</code>: <i>[Opcional]</i> Um valor opcional<code>comparisonCriteria</code> pode ser especificado para determinar como comparar itens na lista. Se este parâmetro for nulo, será utilizado o comparador predefinido.</li></ul>



## Category
List.Ordering
