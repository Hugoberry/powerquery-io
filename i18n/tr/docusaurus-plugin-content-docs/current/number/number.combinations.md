---
title: Number.Combinations
---

# Number.Combinations


Benzersiz birleşim sayısını döndürür.


## Syntax

```powerquery
Number.Combinations(
    setSize as number,
    combinationSize as number
) as number
```


## Remarks

`setSize` öğe listesinden `combinationSize` belirtilen birleşim boyutuna sahip benzersiz birleşim sayısını döndürür.

-   `setSize`: Listedeki öğe sayısı.
-   `combinationSize`: Her birleşimdeki öğe sayısı.


## Examples

### Example #1
5 öğe ile oluşturulan ve her birleşimin 3'lü grup olduğu birleşimlerin sayısını bulur.
```powerquery
Number.Combinations(5, 3)
```

Result: 
```powerquery
10
```




## Category
Number.Operations
