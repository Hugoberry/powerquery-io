---
title: List.ReplaceValue
---

# List.ReplaceValue


搜尋清單中指定的值並取代它。


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

搜尋值清單 <code>list</code> 中的值 <code>oldValue</code>，並將出現的每一次以取代值 <code>newValue</code> 取代。


## Examples

### Example #1 
將清單 \{&#34;a&#34;, &#34;B&#34;, &#34;a&#34;, &#34;a&#34;} 中的所有 &#34;a&#34; 值以 &#34;A&#34; 取代。
```powerquery
List.ReplaceValue({"a", "B", "a", "a"}, "a", "A", Replacer.ReplaceText)
```

Result: 
```powerquery
{"A", "B", "A", "A"}
```




## Category
List.Transformation functions
