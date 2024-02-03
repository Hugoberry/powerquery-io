---
title: List.Modes
---

# List.Modes


## Description

Retorna una llista dels valors més freqüents de la llista.


## Syntax

```powerquery
List.Modes(
    list as list,
    optional equationCriteria as any
) as list
```


## Details

Retorna l'element que apareix amb més freqüència a la llista, <code>list</code>. Si la llista és buida, es produeix una excepció. Si apareixen diversos elements amb la mateixa freqüència, es tria el darrer.    Es pot especificar un valor opcional <code>comparisonCriteria</code>, <code>equationCriteria</code>, per controlar la prova d'igualtat. 


## Examples

### Example #1 
Troba els elements que apareixen amb més freqüència a la llista &lt;code&gt;\{&#34;A&#34;, 1, 2, 3, 3, 4, 5, 5}&lt;/code&gt;.
```powerquery
List.Modes({"A", 1, 2, 3, 3, 4, 5, 5})
```

Result: 
```powerquery
{3, 5}
```




## Category
List.Averages
