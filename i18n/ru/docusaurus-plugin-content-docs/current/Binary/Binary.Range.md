---
title: Binary.Range
---

# Binary.Range


Возвращает подмножество двоичного значения, начиная со смещения.


## Syntax

```powerquery
Binary.Range(
    binary as binary,
    offset as number,
    optional count as number
) as binary
```


## Remarks

Возвращает подмножество двоичного значения, начиная со смещения <code>binary</code>. Необязательный параметр <code>offset</code> устанавливает максимальную длину подмножества.


## Examples

### Example #1 
Возвращает подмножество двоичного значения, начиная со смещения 6.
```powerquery
Binary.Range(#binary({0..10}), 6)
```

Result: 
```powerquery
#binary({6, 7, 8, 9, 10})
```


### Example #2 
Возвращает подмножество длиной 2 из смещения 6 двоичного значения.
```powerquery
Binary.Range(#binary({0..10}), 6, 2)
```

Result: 
```powerquery
#binary({6, 7})
```




## Category
Binary
