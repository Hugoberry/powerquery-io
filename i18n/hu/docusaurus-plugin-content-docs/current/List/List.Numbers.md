---
title: List.Numbers
---

# List.Numbers


## Description

Egy számokból álló listát ad vissza egy kezdeti érték, egy elemszám és egy nem kötelező növekményérték megadása után.


## Syntax

```powerquery
List.Numbers(
    start as number,
    count as number,
    optional increment as number
) as list
```


## Details

Egy számokból álló listát ad vissza egy kezdeti érték, egy elemszám és egy nem kötelező növekményérték megadása után. Az alapértelmezett növekményérték 1.<ul>   <li><code>start</code>: A lista kezdőértéke</li>   <li><code>count</code>: A létrehozni kívánt értékek száma</li>   <li><code>increment</code>: <i>[Nem kötelező]</i> Az értékek növeléséhez használt növekményérték. Ha nincs megadva, az értékek növekménye 1 lesz.</li></ul>


## Examples

### Example #1 
10 egymást követő számból álló, 1-től kezdődő lista létrehozása
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
10 számból álló, 1-től kezdődő lista létrehozása, ahol az egymást követő számok közötti növekmény 2
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
