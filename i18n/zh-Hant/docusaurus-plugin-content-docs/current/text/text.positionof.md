---
title: Text.PositionOf
---

# Text.PositionOf


傳回值的第一個位置 (如果找不到，則傳回 -1)。


## Syntax

```powerquery
Text.PositionOf(
    text as text,
    substring as text,
    optional occurrence as Occurrence.Type,
    optional comparer as function
) as any
```


## Remarks

傳回在 `text` 中，指定的文字值 `substring` 出現位置。 選用參數 `occurrence` 可用來指定要傳回的出現位置 (預設是第一次出現的位置)。 如果找不到 `substring`，則傳回 -1。

`comparer` 是 `Comparer`，可用來控制比較。比較子可用來提供不區分大小寫或文化特性與地區設定感知的比較。

公式語言中提供下列內建比較子:

-   `Comparer.Ordinal`: 用來執行精確序數比較
-   `Comparer.OrdinalIgnoreCase`: 用來執行不區分大小寫的精確序數比較
-   `Comparer.FromCulture`: 用來執行文化特性感知的比較


## Examples

### Example #1
取得文字 "Hello, World! Hello, World!" 中第一次出現 "World" 的位置。
```powerquery
Text.PositionOf("Hello, World! Hello, World!", "World")
```

Result: 
```powerquery
7
```


### Example #2
取得 "Hello, World! Hello, World!"中最後一次出現 "World" 的位置。
```powerquery
Text.PositionOf("Hello, World! Hello, World!", "World", Occurrence.Last)
```

Result: 
```powerquery
21
```




## Category
Text.Membership
