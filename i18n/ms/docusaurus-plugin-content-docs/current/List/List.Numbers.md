---
title: List.Numbers
---

# List.Numbers


## Description

Mengembalikan senarai nombor yang diberi nilai asal, kiraan dan nilai tokokan pilihan.


## Syntax

```powerquery
List.Numbers(
    start as number,
    count as number,
    optional increment as number
) as list
```


## Details

Mengembalikan senarai nombor yang diberi nilai asal, kiraan dan nilai tokokan pilihan. Nilai tokokan lalai ialah 1.<ul>   <li><code>start</code>: Nilai awal dalam senarai.</li>   <li><code>count</code>: Bilangan nilai untuk dicipta.</li>   <li><code>increment</code>: <i>[Pilihan]</i> Nilai untuk ditokok. Jika nilai dikecualikan ditokok sebanyak 1.</li></ul>


## Examples

### Example #1 
Jana senarai 10 nombor berturutan yang bermula pada 1.
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
Jana senarai 10 nombor yang bermula pada 1, dengan tokokan 2 untuk setiap nombor seterusnya.
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
