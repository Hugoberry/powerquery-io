---
title: Binary.Range
---

# Binary.Range


## Description

Повертає підмножину бінарного значення, починаючи зі зсуву.


## Syntax

```powerquery
Binary.Range(
    binary as binary,
    offset as number,
    optional count as number
) as binary
```


## Details

Повертає підмножину бінарного значення, починаючи з <code>binary</code> зсуву. Додатковий параметр <code>offset</code> дає змогу встановити максимальну довжину підмножини.


## Examples

### Example #1 
Повертає підмножину бінарного значення, починаючи з 6 зсуву.
```powerquery
Binary.Range(#binary({0..10}), 6)
```

Result: 
```powerquery
#binary({6, 7, 8, 9, 10})
```


### Example #2 
Повертає підмножину з довжиною 2, починаючи з 6 зсуву бінарного значення.
```powerquery
Binary.Range(#binary({0..10}), 6, 2)
```

Result: 
```powerquery
#binary({6, 7})
```




## Category
Binary
