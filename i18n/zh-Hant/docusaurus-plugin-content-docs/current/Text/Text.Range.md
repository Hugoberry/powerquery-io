---
title: Text.Range
---

# Text.Range


傳回在位移處找到的子字串。


## Syntax

```powerquery
Text.Range(
    text as text,
    offset as number,
    optional count as number
) as text
```


## Remarks

傳回在位移 <code>offset</code> 處從文字 <code>text</code> 找到的子字串。    可包含選擇性參數 <code>count</code> 以指定要傳回的字元數。若沒有足夠的字元，則會擲回錯誤。


## Examples

### Example #1 
從索引 6 開始，尋找文字 &#34;Hello World&#34; 中的子字串。
```powerquery
Text.Range("Hello World", 6)
```

Result: 
```powerquery
"World"
```


### Example #2 
從索引 6 開始橫跨 5 個字元，尋找文字 &#34;Hello World Hello&#34; 中的子字串。
```powerquery
Text.Range("Hello World Hello", 6, 5)
```

Result: 
```powerquery
"World"
```




## Category
Text.Extraction
