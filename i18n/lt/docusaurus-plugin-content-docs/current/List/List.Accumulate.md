---
title: List.Accumulate
---

# List.Accumulate


## Description

Iš sąrašo elementų sudaroma sumos reikšmė.


## Syntax

```powerquery
List.Accumulate(
    list as list,
    seed as any,
    accumulator as function
) as any
```


## Details

Iš sąrašo elementų <code>list</code> sudaroma sumos reikšmė naudojant <code>accumulator</code>.    Galima nustatyti pasirinktinį pirminį parametrą, <code>seed</code>.


## Examples

### Example #1 
Iš sąrašo elementų \{1, 2, 3, 4, 5} sudaroma suvestinė reikšmė naudojant ((būsena, dabartinė) =&gt; būsena + dabartinė ).
```powerquery
List.Accumulate({1, 2, 3, 4, 5}, 0, (state, current) => state + current)
```

Result: 
```powerquery
15
```




## Category
List.Transformation functions
