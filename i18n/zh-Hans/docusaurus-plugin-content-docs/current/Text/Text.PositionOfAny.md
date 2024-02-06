---
title: Text.PositionOfAny
---

# Text.PositionOfAny


返回文本值中任何所列字符的第一个位置(如果找不到，则返回 -1)。


## Syntax

```powerquery
Text.PositionOfAny(
    text as text,
    characters as list,
    optional occurrence as Occurrence.Type
) as any
```


## Remarks

返回在 <code>text</code> 中找到的列表 <code>characters</code>中任何字符的第一个位置。   可选参数 <code>occurrence</code> 可用于指定要返回的出现位置。


## Examples

### Example #1 
查找 &#34;W&#34; 或 &#34;H&#34; 在文本 &#34;Hello, World!&#34; 中的第一个位置。
```powerquery
Text.PositionOfAny("Hello, World!", {"H", "W"})
```

Result: 
```powerquery
0
```


### Example #2 
查找 &#34;W&#34; 或 &#34;H&#34; 在文本 &#34;Hello, World!&#34; 中的位置。
```powerquery
Text.PositionOfAny("Hello, World!", {"H", "W"}, Occurrence.All)
```

Result: 
```powerquery
{0, 7}
```




## Category
Text.Membership
