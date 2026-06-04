---
title: Number.Combinations
---

# Number.Combinations


Tiek atgriezts unikālo kombināciju skaits.


## Syntax

```powerquery
Number.Combinations(
    setSize as number,
    combinationSize as number
) as number
```


## Remarks

Tiek atgriezts vienumu saraksta `setSize` unikālo kombināciju skaits, ņemot vērā norādīto kombināciju lielumu `combinationSize`.

-   `setSize`: saraksta vienumu skaits.
-   `combinationSize`: vienumu skaits katrā kombinācijā.


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
