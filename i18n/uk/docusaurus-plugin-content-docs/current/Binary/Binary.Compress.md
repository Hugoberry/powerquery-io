---
title: Binary.Compress
---

# Binary.Compress


## Description

Стискає двійкове значення за допомогою заданого типу стискання.


## Syntax

```powerquery
Binary.Compress(
    binary as binary,
    compressionType as Compression.Type
) as binary
```


## Details

Стискає двійкове значення за допомогою заданого типу стискання. Результатом цього виклику є стиснута копія введених даних. Нижче вказано типи стискання.  <ul>        <li><code>Compression.GZip</code></li>        <li><code>Compression.Deflate</code></li>      </ul>


## Examples

### Example #1 
Стиснути двійкове значення.
```powerquery
Binary.Compress(Binary.FromList(List.Repeat({10}, 1000)), Compression.Deflate)
```

Result: 
```powerquery
#binary({227, 226, 26, 5, 163, 96, 20, 12, 119, 0, 0})
```




## Category
Binary
