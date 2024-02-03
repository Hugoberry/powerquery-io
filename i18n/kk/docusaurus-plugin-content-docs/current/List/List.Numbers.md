---
title: List.Numbers
---

# List.Numbers


## Description

Бастапқы мән, саны және міндетті емес арту мәні берілген болса, сандар тізімін қайтарады.


## Syntax

```powerquery
List.Numbers(
    start as number,
    count as number,
    optional increment as number
) as list
```


## Details

Бастапқы мән, саны және міндетті емес арту мәні берілген болса, сандар тізімін қайтарады. Әдепкі арту мәні — 1.<ul>   <li><code>start</code>: тізімдегі бастапқы мән.</li>   <li><code>count</code>: жасалатын мәндер саны.</li>   <li><code>increment</code>: <i>[Міндетті емес]</i> артудың мәні. Егер өткізіп жіберілсе, мәндер 1 санына арттырылады.</li></ul>


## Examples

### Example #1 
1-ден басталатын 10 ретті сандар тізімін жасау.
```powerquery
List.Numbers(1, 10)
```

Result: 
```powerquery
{
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10
}
```


### Example #2 
Әр келесі сан үшін 2 артуымен 1-ден басталатын 10 санның тізімін жасау.
```powerquery
List.Numbers(1, 10, 2)
```

Result: 
```powerquery
{
    1,
    3,
    5,
    7,
    9,
    11,
    13,
    15,
    17,
    19
}
```




## Category
List.Generators
