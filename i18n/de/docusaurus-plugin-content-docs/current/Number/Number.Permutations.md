---
title: Number.Permutations
---

# Number.Permutations


## Description

Gibt die Anzahl von Permutationen zurück.


## Syntax

```powerquery
Number.Permutations(
    setSize as number,
    permutationSize as number
) as number
```


## Details

Gibt die Anzahl von Permutationen zurück, die auf der Grundlage einer Reihe von Elementen (<code>setSize</code>) mit einer angegebenen Permutationsgröße (<code>permutationSize</code>) generiert werden können.


## Examples

### Example #1 
Ermittelt die Anzahl von Permutationen auf der Grundlage von insgesamt fünf Elementen in Dreiergruppen.
```powerquery
Number.Permutations(5, 3)
```

Result: 
```powerquery
60
```




## Category
Number.Operations
