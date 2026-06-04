---
title: List.Numbers
---

# List.Numbers


Mengembalikan senarai nombor yang diberi nilai asal, kiraan dan nilai tokokan pilihan.


## Syntax

```powerquery
List.Numbers(
    start as number,
    count as number,
    optional increment as number
) as list
```


## Remarks

Mengembalikan senarai nombor yang diberi nilai asal, kiraan dan nilai tokokan pilihan. Nilai tokokan lalai ialah 1.

-   `start`: Nilai awal dalam senarai.
-   `count`: Bilangan nilai untuk dicipta.
-   `increment`: *(Pilihan)* Nilai untuk dinaikkan. Jika nilai dikecualikan, nilai akan ditokok sebanyak 1.


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
