---
title: Number.Sign
---

# Number.Sign


Mengembalikan 1 jika nombor positif, -1 jika ia negatif dan 0 jika ia sifar.


## Syntax

```powerquery
Number.Sign(
    number as number
) as number
```


## Remarks

Mengembalikan 1 untuk jika `number` ialah nombor positif, -1 jika ialah nombor negatif dan 0 jika ia sifar. Jika `number` adalah nol, `Number.Sign` mengembalikan nol.


## Examples

### Example #1
Tentukan tanda bagi 182.
```powerquery
Number.Sign(182)
```

Result: 
```powerquery
1
```


### Example #2
Tentukan tanda bagi -182.
```powerquery
Number.Sign(-182)
```

Result: 
```powerquery
-1
```


### Example #3
Tentukan tanda bagi 0.
```powerquery
Number.Sign(0)
```

Result: 
```powerquery
0
```




## Category
Number.Operations
