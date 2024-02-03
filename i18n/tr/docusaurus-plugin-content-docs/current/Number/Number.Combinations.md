---
title: Number.Combinations
---

# Number.Combinations


## Description

Benzersiz birleşim sayısını döndürür.


## Syntax

```powerquery
Number.Combinations(
    setSize as number,
    combinationSize as number
) as number
```


## Details

<code>setSize</code> öğe listesinden <code>combinationSize</code> belirtilen birleşim boyutuna sahip benzersiz birleşim sayısını döndürür.<ul>    <li><code>setSize</code>: Listedeki öğe sayısı.</li>    <li><code>combinationSize</code>: Her birleşimdeki öğe sayısı.</li></ul>


## Examples

### Example #1 
5 öğe ile oluşturulan ve her birleşimin 3&#39;lü grup olduğu birleşimlerin sayısını bulur.
```powerquery
Number.Combinations(5, 3)
```

Result: 
```powerquery
10
```




## Category
Number.Operations
