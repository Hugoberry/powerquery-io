---
title: Number.Combinations
---

# Number.Combinations


Gibt die Anzahl eindeutiger Kombinationen zurück.


## Syntax

```powerquery
Number.Combinations(
    setSize as number,
    combinationSize as number
) as number
```


## Remarks

Gibt die Anzahl eindeutiger Kombinationen aus einer Liste mit Elementen (<code>setSize</code>) mit der angegebenen Kombinationsgröße (<code>combinationSize</code>) zurück.<ul>    <li><code>setSize</code>: Die Anzahl von Elementen in der Liste.</li>    <li><code>combinationSize</code>: Die Anzahl von Elementen in jeder Kombination.</li></ul>


## Examples

### Example #1 
Ermittelt die Anzahl von Kombinationen auf der Grundlage von insgesamt fünf Elementen, wenn es sich bei jeder Kombination um eine Dreiergruppe handelt.
```powerquery
Number.Combinations(5, 3)
```

Result: 
```powerquery
10
```




## Category
Number.Operations
