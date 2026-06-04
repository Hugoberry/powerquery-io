---
title: Number.Combinations
---

# Number.Combinations


Бірегей тіркесімдер санын қайтарады.


## Syntax

```powerquery
Number.Combinations(
    setSize as number,
    combinationSize as number
) as number
```


## Remarks

`setSize` элементтер тізімінен `combinationSize` көрсетілген тіркесім өлшемімен бірегей тіркесімдер санын қайтарады.

-   `setSize`: тізімдегі элементтер саны.
-   `combinationSize`: әр тіркесімдегі элементтер саны.


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
