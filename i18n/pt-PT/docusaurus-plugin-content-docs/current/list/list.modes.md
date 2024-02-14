---
title: List.Modes
---

# List.Modes


Devolve uma lista com os valores mais frequentes existentes na lista.


## Syntax

```powerquery
List.Modes(
    list as list,
    optional equationCriteria as any
) as list
```


## Remarks

Devolve o item que aparece mais frequentemente na lista, <code>list</code>. Se a lista estiver vazia, é emitida uma exceção. Se existirem vários itens com a mesma frequência máxima, é escolhido o último.    É possível especificar um valor de <code>comparisonCriteria</code> opcional, <code>equationCriteria</code>, para controlar o teste de igualdade. 


## Examples

### Example #1 
Determinar os itens que aparecem mais frequentemente na lista &lt;code&gt;\{&#34;A&#34;, 1, 2, 3, 3, 4, 5, 5}&lt;/code&gt;.
```powerquery
List.Modes({"A", 1, 2, 3, 3, 4, 5, 5})
```

Result: 
```powerquery
{3, 5}
```




## Category
List.Averages
