---
title: List.Mode
---

# List.Mode


## Description

Devolve o valor máis frecuente da lista.


## Syntax

```powerquery
List.Mode(
    list as list,
    optional equationCriteria as any
) as any
```


## Details

Devolve o elemento que aparece con máis frecuencia na lista, <code>list</code>. Se a lista está baleira, xérase unha excepción. Se aparecen varios elementos coa mesma frecuencia máxima, escóllese o último.    Pódese indicar un valor <code>comparisonCriteria</code> opcional, <code>equationCriteria</code>, para controlar probas de igualdade. 


## Examples

### Example #1 
Buscar o elemento que aparece con máis frecuencia na lista &lt;code&gt;\{&#34;A&#34;, 1, 2, 3, 3, 4, 5}&lt;/code&gt;.
```powerquery
List.Mode({"A", 1, 2, 3, 3, 4, 5})
```

Result: 
```powerquery
3
```


### Example #2 
Buscar o elemento que aparece con máis frecuencia na lista &lt;code&gt;\{&#34;A&#34;, 1, 2, 3, 3, 4, 5, 5}&lt;/code&gt;.
```powerquery
List.Mode({"A", 1, 2, 3, 3, 4, 5, 5})
```

Result: 
```powerquery
5
```




## Category
List.Averages
