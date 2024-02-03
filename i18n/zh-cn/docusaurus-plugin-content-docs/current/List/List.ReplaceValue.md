---
title: List.ReplaceValue
---

# List.ReplaceValue


## Description

在列表中搜索指定的值并替换它。


## Syntax

```powerquery
List.ReplaceValue(
    list as list,
    oldValue as any,
    newValue as any,
    replacer as function
) as list
```


## Details

在值列表 <code>list</code> 中搜索值 <code>oldValue</code>，每次找到后使用替换值 <code>newValue</code> 替换它。


## Examples

### Example #1 
使用 &#34;A&#34; 替换列表 \{&#34;a&#34;, &#34;B&#34;, &#34;a&#34;, &#34;a&#34;} 中的所有 &#34;a&#34; 值。
```powerquery
List.ReplaceValue({"a", "B", "a", "a"}, "a", "A", Replacer.ReplaceText)
```

Result: 
```powerquery
{"A", "B", "A", "A"}
```




## Category
List.Transformation functions
