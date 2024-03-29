---
title: Binary.Decompress
---

# Binary.Decompress


Sıkıştırılmış bir ikili değeri belirtilen sıkıştırma türünü kullanarak genişletir.


## Syntax

```powerquery
Binary.Decompress(
    binary as binary,
    compressionType as Compression.Type
) as binary
```


## Remarks

Bir ikili değerin sıkıştırmasını belirtilen sıkıştırma türünü kullanarak açar. Bu çağrının sonucu girdinin sıkıştırılmamış bir kopyasıdır. Sıkıştırma türleri şunları kapsar:  <ul>        <li><code>Compression.GZip</code></li>        <li><code>Compression.Deflate</code></li>      </ul>


## Examples

### Example #1 
Sıkıştırılmış ikili değeri açar.
```powerquery
Binary.Decompress(#binary({115, 103, 200, 7, 194, 20, 134, 36, 134, 74, 134, 84, 6, 0}), Compression.Deflate)
```

Result: 
```powerquery
#binary({71, 0, 111, 0, 111, 0, 100, 0, 98, 0, 121, 0, 101, 0})
```




## Category
Binary
