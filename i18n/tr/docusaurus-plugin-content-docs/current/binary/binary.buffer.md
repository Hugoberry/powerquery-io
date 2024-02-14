---
title: Binary.Buffer
---

# Binary.Buffer


İkili değeri arabelleğe alır.


## Syntax

```powerquery
Binary.Buffer(
    binary as binary
) as binary
```


## Remarks

İkili değeri arabelleğe alır. Bu çağrının sonucu kararlı bir ikili değerdir; böylece belirleyici bir uzunluk ve bayt sırasına sahip olur.


## Examples

### Example #1 
İkili değerin kararlı sürümünü oluşturur.
```powerquery
Binary.Buffer(Binary.FromList({0..10}))
```

Result: 
```powerquery
#binary({0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10})
```




## Category
Binary
