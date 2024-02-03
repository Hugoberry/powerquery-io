---
title: Number.Permutations
---

# Number.Permutations


## Description

Permütasyon sayısını döndürür.


## Syntax

```powerquery
Number.Permutations(
    setSize as number,
    permutationSize as number
) as number
```


## Details

<code>setSize</code> öğe sayısından <code>permutationSize</code> permütasyon boyutuna sahip oluşturulabilecek permütasyon sayısını döndürür.


## Examples

### Example #1 
5 öğeden 3&#39;lü gruplarda oluşturulabilecek permütasyon sayısını bulur.
```powerquery
Number.Permutations(5, 3)
```

Result: 
```powerquery
60
```




## Category
Number.Operations
