---
title: List.ReplaceValue
---

# List.ReplaceValue


リスト内で指定された値を検索し、置き換えます。


## Syntax

```powerquery
List.ReplaceValue(
    list as list,
    oldValue as any,
    newValue as any,
    replacer as function
) as list
```


## Remarks

値のリスト <code>list</code> 内で値 <code>oldValue</code> を検索し、それぞれの出現を置換値 <code>newValue</code> に置き換えます。


## Examples

### Example #1 
リスト \{&#34;a&#34;, &#34;B&#34;, &#34;a&#34;, &#34;a&#34;} 内のすべての &#34;a&#34; 値を &#34;A&#34; に置き換えます。
```powerquery
List.ReplaceValue({"a", "B", "a", "a"}, "a", "A", Replacer.ReplaceText)
```

Result: 
```powerquery
{"A", "B", "A", "A"}
```




## Category
List.Transformation functions
