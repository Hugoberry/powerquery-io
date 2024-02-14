---
title: Number.Combinations
---

# Number.Combinations


Returnerer antallet af entydige kombinationer.


## Syntax

```powerquery
Number.Combinations(
    setSize as number,
    combinationSize as number
) as number
```


## Remarks

Returnerer antallet af entydige kombinationer fra en liste over elementer, <code>setSize</code>, med den angivne kombinationsstørrelse, <code>combinationSize</code>.<ul>    <li><code>setSize</code>: Antallet af elementer på listen.</li>    <li><code>combinationSize</code>: Antallet af elementer i de enkelte kombinationer.</li></ul>


## Examples

### Example #1 
Find antallet af kombinationer fra i alt fem elementer, når de enkelte kombinationer er en gruppe på tre.
```powerquery
Number.Combinations(5, 3)
```

Result: 
```powerquery
10
```




## Category
Number.Operations
