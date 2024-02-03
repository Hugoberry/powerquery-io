---
title: List.Mode
---

# List.Mode


## Description

Restituisce il valore più frequente dell&#39;elenco.


## Syntax

```powerquery
List.Mode(
    list as list,
    optional equationCriteria as any
) as any
```


## Details

Restituisce l'elemento più frequente dell'elenco <code>list</code>. Se l'elenco è vuoto viene generata un'eccezione. Se più elementi hanno la stessa frequenza massima, viene scelto l'ultimo elemento.    È possibile specificare un valore <code>comparisonCriteria</code> facoltativo <code>equationCriteria</code> per verificare il test di uguaglianza. 


## Examples

### Example #1 
Trovare l&#39;elemento più frequente dell&#39;elenco &lt;code&gt;\{&#34;A&#34;, 1, 2, 3, 3, 4, 5}&lt;/code&gt;.
```powerquery
List.Mode({"A", 1, 2, 3, 3, 4, 5})
```

Result: 
```powerquery
3
```


### Example #2 
Trovare l&#39;elemento più frequente dell&#39;elenco &lt;code&gt;\{&#34;A&#34;, 1, 2, 3, 3, 4, 5, 5}&lt;/code&gt;.
```powerquery
List.Mode({"A", 1, 2, 3, 3, 4, 5, 5})
```

Result: 
```powerquery
5
```




## Category
List.Averages
