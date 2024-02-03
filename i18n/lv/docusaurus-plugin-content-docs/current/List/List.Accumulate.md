---
title: List.Accumulate
---

# List.Accumulate


## Description

Tiek apkopota saraksta vienumu kopsavilkuma vērtība.


## Syntax

```powerquery
List.Accumulate(
    list as list,
    seed as any,
    accumulator as function
) as any
```


## Details

Tiek apkopota saraksta <code>list</code> vienumu kopsavilkuma vērtība, izmantojot <code>accumulator</code>.    Varat iestatīt papildu sākotnējās vērtības parametru <code>seed</code>.


## Examples

### Example #1 
Tiek apkopota saraksta \{1, 2, 3, 4, 5} vienumu kopsavilkuma vērtība, izmantojot izteiksmi ((state, current) =&gt; state + current).
```powerquery
List.Accumulate({1, 2, 3, 4, 5}, 0, (state, current) => state + current)
```

Result: 
```powerquery
15
```




## Category
List.Transformation functions
