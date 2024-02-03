---
title: List.ReplaceValue
---

# List.ReplaceValue


## Description

목록에서 지정된 값을 검색하여 바꿉니다.


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

값 목록 <code>list</code>에서 <code>oldValue</code> 값을 검색하여 찾은 각 값을 대체 값 <code>newValue</code>(으)로 바꿉니다.


## Examples

### Example #1 
\{&#34;a&#34;, &#34;B&#34;, &#34;a&#34;, &#34;a&#34;} 목록의 모든 &#34;a&#34; 값을 &#34;A&#34;로 바꿉니다.
```powerquery
List.ReplaceValue({"a", "B", "a", "a"}, "a", "A", Replacer.ReplaceText)
```

Result: 
```powerquery
{"A", "B", "A", "A"}
```




## Category
List.Transformation functions
