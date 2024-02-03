---
title: List.Modes
---

# List.Modes


## Description

Devolve unha lista dos valores máis frecuentes na lista.


## Syntax

```powerquery
List.Modes(
    list as list,
    optional equationCriteria as any
) as list
```


## Details

Devolve o elemento que aparece con máis frecuencia na lista, <code>list</code>. Se a lista está baleira, xérase unha excepción. Se aparecen varios elementos coa mesma frecuencia máxima, escóllese o último.    Pódese indicar un valor <code>comparisonCriteria</code> opcional, <code>equationCriteria</code>, para controlar probas de igualdade. 


## Examples

### Example #1 
Buscar os elementos que aparecen con máis frecuencia na lista &lt;code&gt;\{&#34;A&#34;, 1, 2, 3, 3, 4, 5, 5}&lt;/code&gt;.
```powerquery
List.Modes({"A", 1, 2, 3, 3, 4, 5, 5})
```

Result: 
```powerquery
{3, 5}
```




## Category
List.Averages
