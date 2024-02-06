---
title: List.ReplaceValue
---

# List.ReplaceValue


Tìm kiếm giá trị cụ thể trong một danh sách và thay thế giá trị đó.


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

Trong danh sách giá trị <code>list</code>, tìm giá trị <code>oldValue</code> và thay thế mỗi lần xuất hiện bằng giá trị thay thế <code>newValue</code>.


## Examples

### Example #1 
Thay thế tất cả giá trị &#34;a&#34; trong danh sách \{&#34;a&#34;, &#34;B&#34;, &#34;a&#34;, &#34;a&#34;} bằng &#34;A&#34;.
```powerquery
List.ReplaceValue({"a", "B", "a", "a"}, "a", "A", Replacer.ReplaceText)
```

Result: 
```powerquery
{"A", "B", "A", "A"}
```




## Category
List.Transformation functions
