---
title: List.Modes
---

# List.Modes


Restituisce un elenco con i valori più frequenti dell&#39;elenco.


## Syntax

```powerquery
List.Modes(
    list as list,
    optional equationCriteria as any
) as list
```


## Remarks

Restituisce l'elemento più frequente dell'elenco <code>list</code>. Se l'elenco è vuoto viene generata un'eccezione. Se più elementi hanno la stessa frequenza massima, viene scelto l'ultimo elemento.    È possibile specificare un valore <code>comparisonCriteria</code> facoltativo <code>equationCriteria</code> per verificare il test di uguaglianza. 


## Examples

### Example #1 
Trovare gli elementi più frequenti dell&#39;elenco &lt;code&gt;\{&#34;A&#34;, 1, 2, 3, 3, 4, 5, 5}&lt;/code&gt;.
```powerquery
List.Modes({"A", 1, 2, 3, 3, 4, 5, 5})
```

Result: 
```powerquery
{3, 5}
```




## Category
List.Averages
