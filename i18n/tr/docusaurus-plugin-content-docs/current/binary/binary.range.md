---
title: Binary.Range
---

# Binary.Range


İkili değerin bir uzaklıktan başlayan bir alt kümesini döndürür.


## Syntax

```powerquery
Binary.Range(
    binary as binary,
    offset as number,
    optional count as number
) as binary
```


## Remarks

<code>binary</code> uzaklığından başlayarak ikili değerin bir alt kümesini döndürür. <code>offset</code> isteğe bağlı parametresi, alt kümenin maksimum uzunluğunu belirler.


## Examples

### Example #1 
İkili değerin 6 uzaklığından başlayan bir alt kümesini döndürür.
```powerquery
Binary.Range(#binary({0..10}), 6)
```

Result: 
```powerquery
#binary({6, 7, 8, 9, 10})
```


### Example #2 
İkili değerin 6 uzaklığından 2 uzunluklu bir alt kümesini döndürür.
```powerquery
Binary.Range(#binary({0..10}), 6, 2)
```

Result: 
```powerquery
#binary({6, 7})
```




## Category
Binary
