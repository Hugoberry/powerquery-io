---
title: List.Sum
---

# List.Sum


Returnerar summan av objekten i listan.


## Syntax

```powerquery
List.Sum(
    list as list,
    optional precision as Precision.Type
) as any
```


## Remarks

Returnerar summan av värdena i listan, <code>list</code>, som inte är null. Returnerar null om det inte finns några värden som inte är null i listan.


## Examples

### Example #1 
Hitta summan av talen i listan &lt;code&gt;\{1, 2, 3}&lt;/code&gt;.
```powerquery
List.Sum({1, 2, 3})
```

Result: 
```powerquery
6
```




## Category
List.Addition
