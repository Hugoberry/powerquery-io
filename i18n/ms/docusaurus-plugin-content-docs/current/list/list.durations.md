---
title: List.Durations
---

# List.Durations


Menjana senarai nilai tempoh jika nilai asal, kiraan dan nilai tempoh tokokan diberikan.


## Syntax

```powerquery
List.Durations(
    start as duration,
    count as number,
    step as duration
) as list
```


## Remarks

Mengembalikan senarai nilai `count` `duration`, yang bermula di `start` dan ditokok oleh `duration` `step` yang ditentukan.


## Examples

### Example #1
Cipta senarai 5 nilai yang bermula dengan 1 jam dan menokok dengan satu jam.
```powerquery
List.Durations(#duration(0, 1, 0, 0), 5, #duration(0, 1, 0, 0))
```

Result: 
```powerquery
{
    #duration(0, 1, 0, 0),
    #duration(0, 2, 0, 0),
    #duration(0, 3, 0, 0),
    #duration(0, 4, 0, 0),
    #duration(0, 5, 0, 0)
}
```




## Category
List.Generators
