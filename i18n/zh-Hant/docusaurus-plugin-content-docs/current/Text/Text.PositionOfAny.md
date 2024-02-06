---
title: Text.PositionOfAny
---

# Text.PositionOfAny


傳回文字值中任何列出字元的第一個位置 (如果找不到，則傳回 -1)。


## Syntax

```powerquery
Text.PositionOfAny(
    text as text,
    characters as list,
    optional occurrence as Occurrence.Type
) as any
```


## Remarks

傳回清單 <code>characters</code> 中在 <code>text</code> 中找到的任何字元的第一個位置。    選擇性參數 <code>occurrence</code> 可用於指定要傳回的發生位置。


## Examples

### Example #1 
在文字「Hello, World!」中尋找「W」或「H」的第一個位置。
```powerquery
Text.PositionOfAny("Hello, World!", {"H", "W"})
```

Result: 
```powerquery
0
```


### Example #2 
在文字「Hello World!」中尋找「W」或「H」的所有位置。
```powerquery
Text.PositionOfAny("Hello, World!", {"H", "W"}, Occurrence.All)
```

Result: 
```powerquery
{0, 7}
```




## Category
Text.Membership
