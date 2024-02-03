---
title: Binary.Buffer
---

# Binary.Buffer


## Description

Bufferlagrer den binære værdi i hukommelsen.


## Syntax

```powerquery
Binary.Buffer(
    binary as binary
) as binary
```


## Details

Bufferlagrer den binære værdi i hukommelsen. Resultatet af dette kald er en stabil binær værdi, hvilket betyder, at den vil have en deterministisk længde og byterækkefølge.


## Examples

### Example #1 
Opret en stabil version af den binære værdi.
```powerquery
Binary.Buffer(Binary.FromList({0..10}))
```

Result: 
```powerquery
#binary({0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10})
```




## Category
Binary
