---
title: Number.Combinations
---

# Number.Combinations


## Description

Vráti počet jedinečných kombinácií.


## Syntax

```powerquery
Number.Combinations(
    setSize as number,
    combinationSize as number
) as number
```


## Details

Vráti počet jedinečných kombinácií zo zoznamu položiek <code>setSize</code> so stanovenou veľkosťou kombinácie <code>combinationSize</code>.<ul>    <li><code>setSize</code>: Počet položiek v zozname.</li>    <li><code>combinationSize</code>: Počet položiek v každej kombinácii.</li></ul>


## Examples

### Example #1 
Nájdite počet kombinácií z celkového počtu 5 položiek, pričom každú kombináciu tvorí skupina 3 položiek.
```powerquery
Number.Combinations(5, 3)
```

Result: 
```powerquery
10
```




## Category
Number.Operations
