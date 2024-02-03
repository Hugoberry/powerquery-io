---
title: List.Mode
---

# List.Mode


## Description

Retorna el valor més freqüent de la llista.


## Syntax

```powerquery
List.Mode(
    list as list,
    optional equationCriteria as any
) as any
```


## Details

Retorna l'element que apareix amb més freqüència a la llista, <code>list</code>. Si la llista és buida, es produeix una excepció. Si apareixen diversos elements amb la mateixa freqüència, es tria el darrer.    Es pot especificar un valor opcional <code>comparisonCriteria</code>, <code>equationCriteria</code>, per controlar la prova d'igualtat. 


## Examples

### Example #1 
Troba l&#39;element que apareix amb més freqüència a la llista &lt;code&gt;\{&#34;A&#34;, 1, 2, 3, 3, 4, 5}&lt;/code&gt;.
```powerquery
List.Mode({"A", 1, 2, 3, 3, 4, 5})
```

Result: 
```powerquery
3
```


### Example #2 
Troba l&#39;element que apareix amb més freqüència a la llista &lt;code&gt;\{&#34;A&#34;, 1, 2, 3, 3, 4, 5, 5}&lt;/code&gt;.
```powerquery
List.Mode({"A", 1, 2, 3, 3, 4, 5, 5})
```

Result: 
```powerquery
5
```




## Category
List.Averages
