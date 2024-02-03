---
title: List.Modes
---

# List.Modes


## Description

Retorna uma lista dos valores mais frequentes da lista.


## Syntax

```powerquery
List.Modes(
    list as list,
    optional equationCriteria as any
) as list
```


## Details

Retorna o item exibido com mais frequência na lista, <code>list</code>. Se a lista estiver vazia, uma exceção será lançada. Se vários itens aparecerem com a mesma frequência máxima, o último será escolhido.    Um valor <code>comparisonCriteria</code> opcional, <code>equationCriteria</code>, pode ser especificado para controlar o teste de igualdade. 


## Examples

### Example #1 
Localize os itens exibidos com mais frequência na lista &lt;code&gt;\{&#34;A&#34;, 1, 2, 3, 3, 4, 5, 5}&lt;/code&gt;.
```powerquery
List.Modes({"A", 1, 2, 3, 3, 4, 5, 5})
```

Result: 
```powerquery
{3, 5}
```




## Category
List.Averages
