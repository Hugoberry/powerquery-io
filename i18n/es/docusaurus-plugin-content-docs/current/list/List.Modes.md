---
title: List.Modes
---

# List.Modes


Devuelve una lista de los valores más frecuentes de la lista.


## Syntax

```powerquery
List.Modes(
    list as list,
    optional equationCriteria as any
) as list
```


## Remarks

Devuelve el elemento que aparece con más frecuencia en la lista <code>list</code>. Si la lista está vacía, se produce una excepción. Si varios elementos aparecen con la misma frecuencia máxima, se elige el último.    Se puede especificar un valor <code>comparisonCriteria</code> opcional (<code>equationCriteria</code>) para controlar la igualdad de las pruebas. 


## Examples

### Example #1 
Buscar los elementos que aparecen con más frecuencia en la lista &lt;code&gt;\{&#34;A&#34;, 1, 2, 3, 3, 4, 5, 5}&lt;/code&gt;.
```powerquery
List.Modes({"A", 1, 2, 3, 3, 4, 5, 5})
```

Result: 
```powerquery
{3, 5}
```




## Category
List.Averages
