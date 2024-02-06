---
title: List.Random
---

# List.Random


傳回亂數清單。


## Syntax

```powerquery
List.Random(
    count as number,
    optional seed as number
) as list
```


## Remarks

已知要產生的值數目和選擇性的種子值，據此傳回 0 到 1 之間的亂數清單。<ul>   <li><code>count</code>: 要產生的亂數值數目。</li>   <li><code>seed</code>:  [選擇性]<i></i> 用來作為亂數產生器種子的數值。如果省略，每次呼叫函數時都會產生唯一的亂數清單。如果以數字指定種子值，則每次呼叫函數會產生相同的亂數清單。</li></ul>


## Examples

### Example #1 
建立 3 個亂數的清單。
```powerquery
List.Random(3)
```

Result: 
```powerquery
{0.992332, 0.132334, 0.023592}
```


### Example #2 
指定種子值建立 3 個亂數的清單。
```powerquery
List.Random(3, 2)
```

Result: 
```powerquery
{0.883002, 0.245344, 0.723212}
```




## Category
List.Generators
