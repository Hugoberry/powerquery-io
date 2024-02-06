---
title: List.Modes
---

# List.Modes


傳回清單中最常出現的值清單。


## Syntax

```powerquery
List.Modes(
    list as list,
    optional equationCriteria as any
) as list
```


## Remarks

傳回清單 <code>list</code> 中最常出現的項目。如果清單是空的，則擲回例外狀況。如果多個項目的最大出現頻率相同，則選擇最後一個。    可指定選擇性的 <code>comparisonCriteria</code> 值 <code>equationCriteria</code>，以控制等號比較測試。 


## Examples

### Example #1 
找出清單 &lt;code&gt;\{&#34;A&#34;, 1, 2, 3, 3, 4, 5, 5}&lt;/code&gt; 中最常出現的幾個項目。
```powerquery
List.Modes({"A", 1, 2, 3, 3, 4, 5, 5})
```

Result: 
```powerquery
{3, 5}
```




## Category
List.Averages
