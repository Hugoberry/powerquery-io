---
title: Text.BetweenDelimiters
---

# Text.BetweenDelimiters


Text.BetweenDelimiters


## Syntax

```powerquery
Text.BetweenDelimiters(
    text as text,
    startDelimiter as text,
    endDelimiter as text,
    optional startIndex as any,
    optional endIndex as any
) as any
```


## Remarks

傳回 <code>text</code> 在指定的 <code>startDelimiter</code> 和 <code>endDelimiter</code> 之間的部分。    選擇性的數字 <code>startIndex</code>，表示應考量哪些 <code>startDelimiter</code> 的出現處。    選擇性的清單 <code>startIndex</code>，表示應考量哪些 <code>startDelimiter</code> 的出現處，以及編製索引時應從輸入的開頭或結尾開始進行。    <code>endIndex</code> 也很類似，但會以相對於 <code>startIndex</code> 的方式編製索引。


## Examples

### Example #1 
取得 &#34;111 (222) 333 (444)&#34; 介於 (第一個) 左括弧與其後 (第一個) 右括弧之間的部分。
```powerquery
Text.BetweenDelimiters("111 (222) 333 (444)", "(", ")")
```

Result: 
```powerquery
"222"
```


### Example #2 
取得 &#34;111 (222) 333 (444)&#34; 介於第二個左括弧與其後第一個右括弧之間的部分。
```powerquery
Text.BetweenDelimiters("111 (222) 333 (444)", "(", ")", 1, 0)
```

Result: 
```powerquery
"444"
```


### Example #3 
取得 &#34;111 (222) 333 (444)&#34; 從結尾開始，介於第二個左括弧與其後第二個右括弧之間的部分。
```powerquery
Text.BetweenDelimiters("111 (222) 333 (444)", "(", ")", {1, RelativePosition.FromEnd}, {1, RelativePosition.FromStart})
```

Result: 
```powerquery
"222) 333 (444"
```




## Category
Text.Transformations
