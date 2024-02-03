---
title: List.Mode
---

# List.Mode


## Description

返回列表中出现最多的值。


## Syntax

```powerquery
List.Mode(
    list as list,
    optional equationCriteria as any
) as any
```


## Details

返回列表 <code>list</code> 中出现最多的项。如果列表为空，将引发异常。如果出现最多的项有多个，则选择其中的最后一项。    可以指定可选的 <code>comparisonCriteria</code> 值 <code>equationCriteria</code> 来控制相等测试。 


## Examples

### Example #1 
查找列表 &lt;code&gt;\{&#34;A&#34;, 1, 2, 3, 3, 4, 5}&lt;/code&gt; 中出现最多的项。
```powerquery
List.Mode({"A", 1, 2, 3, 3, 4, 5})
```

Result: 
```powerquery
3
```


### Example #2 
查找列表 &lt;code&gt;\{&#34;A&#34;, 1, 2, 3, 3, 4, 5, 5}&lt;/code&gt; 中出现最多的项。
```powerquery
List.Mode({"A", 1, 2, 3, 3, 4, 5, 5})
```

Result: 
```powerquery
5
```




## Category
List.Averages
