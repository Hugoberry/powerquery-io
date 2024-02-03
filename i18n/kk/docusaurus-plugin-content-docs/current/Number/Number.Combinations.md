---
title: Number.Combinations
---

# Number.Combinations


## Description

Бірегей тіркесімдер санын қайтарады.


## Syntax

```powerquery
Number.Combinations(
    setSize as number,
    combinationSize as number
) as number
```


## Details

<code>setSize</code> элементтер тізімінен <code>combinationSize</code> көрсетілген тіркесім өлшемімен бірегей тіркесімдер санын қайтарады.<ul>    <li><code>setSize</code>: тізімдегі элементтер саны.</li>    <li><code>combinationSize</code>: әр тіркесімдегі элементтер саны.</li></ul>


## Examples

### Example #1 
Әр тіркесім 3 элементтен тұратын топ болғанда жалпы 5 элементтен тіркесімдер санын анықтау.
```powerquery
Number.Combinations(5, 3)
```

Result: 
```powerquery
10
```




## Category
Number.Operations
