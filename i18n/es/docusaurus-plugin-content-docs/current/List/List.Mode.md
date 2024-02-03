---
title: List.Mode
---

# List.Mode


## Description

Devuelve el valor más frecuente de la lista.


## Syntax

```powerquery
List.Mode(
    list as list,
    optional equationCriteria as any
) as any
```


## Details

Devuelve el elemento que aparece con más frecuencia en la lista <code>list</code>. Si la lista está vacía, se produce una excepción. Si varios elementos aparecen con la misma frecuencia máxima, se elige el último.    Se puede especificar un valor <code>comparisonCriteria</code> opcional (<code>equationCriteria</code>) para controlar la igualdad de las pruebas. 


## Examples

### Example #1 
Buscar el elemento que aparece con más frecuencia en la lista &lt;code&gt;\{&#34;A&#34;, 1, 2, 3, 3, 4, 5}&lt;/code&gt;.
```powerquery
List.Mode({"A", 1, 2, 3, 3, 4, 5})
```

Result: 
```powerquery
3
```


### Example #2 
Buscar el elemento que aparece con más frecuencia en la lista &lt;code&gt;\{&#34;A&#34;, 1, 2, 3, 3, 4, 5, 5}&lt;/code&gt;.
```powerquery
List.Mode({"A", 1, 2, 3, 3, 4, 5, 5})
```

Result: 
```powerquery
5
```




## Category
List.Averages
