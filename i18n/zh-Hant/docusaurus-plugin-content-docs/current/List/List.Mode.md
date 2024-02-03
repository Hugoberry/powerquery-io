---
title: List.Mode
---

# List.Mode


## Description

傳回清單中最常出現的值。


## Syntax

```powerquery
List.Mode(
    list as list,
    optional equationCriteria as any
) as any
```


## Details

傳回清單 <code>list</code> 中最常出現的項目。如果清單是空的，則擲回例外狀況。如果多個項目的最大出現頻率相同，則選擇最後一個。    可指定選擇性的 <code>comparisonCriteria</code> 值 <code>equationCriteria</code>，以控制等號比較測試。 


## Examples

### Example #1 
找出清單 &lt;code&gt;\{&#34;A&#34;, 1, 2, 3, 3, 4, 5}&lt;/code&gt; 中最常出現的項目。
```powerquery
List.Mode({"A", 1, 2, 3, 3, 4, 5})
```

Result: 
```powerquery
3
```


### Example #2 
找出清單 &lt;code&gt;\{&#34;A&#34;, 1, 2, 3, 3, 4, 5, 5}&lt;/code&gt; 中最常出現的項目。
```powerquery
List.Mode({"A", 1, 2, 3, 3, 4, 5, 5})
```

Result: 
```powerquery
5
```




## Category
List.Averages
