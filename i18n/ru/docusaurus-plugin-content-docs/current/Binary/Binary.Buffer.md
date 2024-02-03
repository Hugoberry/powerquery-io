---
title: Binary.Buffer
---

# Binary.Buffer


## Description

Помещает двоичное значение в буфер в памяти.


## Syntax

```powerquery
Binary.Buffer(
    binary as binary
) as binary
```


## Details

Помещает двоичное значение в буфер в памяти.  Результат вызова - стабильное двоичное значение (то есть с детерминированной длиной и порядком байтов).


## Examples

### Example #1 
Создать стабильную версию двоичного значения.
```powerquery
Binary.Buffer(Binary.FromList({0..10}))
```

Result: 
```powerquery
#binary({0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10})
```




## Category
Binary
