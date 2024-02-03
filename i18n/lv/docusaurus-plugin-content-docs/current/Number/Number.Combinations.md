---
title: Number.Combinations
---

# Number.Combinations


## Description

Tiek atgriezts unikālo kombināciju skaits.


## Syntax

```powerquery
Number.Combinations(
    setSize as number,
    combinationSize as number
) as number
```


## Details

Tiek atgriezts vienumu saraksta <code>setSize</code> unikālo kombināciju skaits, ņemot vērā norādīto kombināciju lielumu <code>combinationSize</code>.<ul>    <li><code>setSize</code>: saraksta vienumu skaits.</li>    <li><code>combinationSize</code>: vienumu skaits katrā kombinācijā.</li></ul>


## Examples

### Example #1 
Iegūstiet no 5 vienumiem izveidojamo 3 vienumu kombināciju skaitu.
```powerquery
Number.Combinations(5, 3)
```

Result: 
```powerquery
10
```




## Category
Number.Operations
