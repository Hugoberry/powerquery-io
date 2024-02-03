---
title: List.Mode
---

# List.Mode


## Description

Retorna o valor mais frequente da lista.


## Syntax

```powerquery
List.Mode(
    list as list,
    optional equationCriteria as any
) as any
```


## Details

Retorna o item exibido com mais frequência na lista, <code>list</code>. Se a lista estiver vazia, uma exceção será lançada. Se vários itens aparecerem com a mesma frequência máxima, o último será escolhido.    Um valor <code>comparisonCriteria</code> opcional, <code>equationCriteria</code>, pode ser especificado para controlar o teste de igualdade. 


## Examples

### Example #1 
Localize o item exibido com mais frequência na lista &lt;code&gt;\{&#34;A&#34;, 1, 2, 3, 3, 4, 5}&lt;/code&gt;.
```powerquery
List.Mode({"A", 1, 2, 3, 3, 4, 5})
```

Result: 
```powerquery
3
```


### Example #2 
Localize o item exibido com mais frequência na lista &lt;code&gt;\{&#34;A&#34;, 1, 2, 3, 3, 4, 5, 5}&lt;/code&gt;.
```powerquery
List.Mode({"A", 1, 2, 3, 3, 4, 5, 5})
```

Result: 
```powerquery
5
```




## Category
List.Averages
