---
title: Number.Combinations
---

# Number.Combinations


## Description

Vrne število enoličnih kombinacij.


## Syntax

```powerquery
Number.Combinations(
    setSize as number,
    combinationSize as number
) as number
```


## Details

Vrne število enoličnih kombinacij iz seznama elementov <code>setSize</code> z določeno velikostjo kombinacije <code>combinationSize</code>.<ul>    <li><code>setSize</code>: število elementov na seznamu.</li>    <li><code>combinationSize</code>: število elementov v vsaki kombinaciji.</li></ul>


## Examples

### Example #1 
Poiščite število kombinacij iz skupno 5 elementov, pri čemer je vsaka kombinacija skupina 3 elementov.
```powerquery
Number.Combinations(5, 3)
```

Result: 
```powerquery
10
```




## Category
Number.Operations
