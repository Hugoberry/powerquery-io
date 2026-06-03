---
title: Comparer.FromCulture
---

# Comparer.FromCulture


根據指定的文化特性和區分大小寫傳回比較子函數。


## Syntax

```powerquery
Comparer.FromCulture(
    culture as text,
    optional ignoreCase as logical
) as function
```


## Remarks

傳回比較子函數，該函數會使用 `ignoreCase` 指定的 `culture` 和區分大小寫來執行比較。  
  
比較子函數會接受兩個引數，並根據第一個值小於、等於或大於秒而傳回 -1、0 或 1。  
  
`ignoreCase` 的預設值為 false。`culture` 應為 .NET framework 支援的其中一個地區設定 (例如 「en-US」)。


## Examples

### Example #1
使用 "en-US" 地區比較 "a" 和 "A" 以判斷值是否相等。
```powerquery
Comparer.FromCulture("en-US")("a", "A")
```

Result: 
```powerquery
-1
```


### Example #2
使用 "en-US" 地區比較 "a" 和 "A"，忽略大小寫，以判斷值是否相等。
```powerquery
Comparer.FromCulture("en-US", true)("a", "A")
```

Result: 
```powerquery
0
```




## Category
Comparer
