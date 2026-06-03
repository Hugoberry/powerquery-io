---
title: Text.StartsWith
---

# Text.StartsWith


指出文字是否以指定的值為開頭。


## Syntax

```powerquery
Text.StartsWith(
    text as text,
    substring as text,
    optional comparer as function
) as logical
```


## Remarks

如果文字值 `text` 開頭為 `substring`，則會傳回 True。

-   `text`: 一個會被搜尋的 `text` 值。
-   `substring`: 一個 `text` 值，是要在 `text` 中被搜尋的子字符。
-   `comparer`: *(選用)* 一個會用於控制比較的 `Comparer`。例如，可能會使用 `Comparer.OrdinalIgnoreCase` 來執行不區分大小寫的搜尋。

`comparer` 是一個 `Comparer` ，會用來控制比較。比較子可用來提供不區分大小寫或文化特性與地區設定感知的比較。

公式語言中提供下列內建比較子:

-   `Comparer.Ordinal`: 用來執行區確切的序數比較。
-   `Comparer.OrdinalIgnoreCase`: 用來執行不區分大小寫確切的序數比較。
-   `Comparer.FromCulture`: 用來執行文化特性感知的比較。


## Examples

### Example #1
檢查文字 "Hello, World" 是否以文字 "hello" 為開頭。
```powerquery
Text.StartsWith("Hello, World", "hello")
```

Result: 
```powerquery
false
```


### Example #2
檢查文字 "Hello, World" 是否以文字 "Hello" 為開頭。
```powerquery
Text.StartsWith("Hello, World", "Hello")
```

Result: 
```powerquery
true
```


### Example #3
忽略大小寫，檢查文字「Hello, World」是否以文字「hello」為開頭。
```powerquery
Text.StartsWith("Hello, World", "hello", Comparer.OrdinalIgnoreCase)
```

Result: 
```powerquery
true
```




## Category
Text.Membership
