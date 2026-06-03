---
title: Comparer.Equals
---

# Comparer.Equals


依兩個指定的值為基礎進行的相等比較檢查傳回邏輯錯誤。


## Syntax

```powerquery
Comparer.Equals(
    comparer as function,
    x as any,
    y as any
) as logical
```


## Remarks

使用提供的 `comparer` 對兩個指定值 `x` 和 `y` 進行相等比較檢查，據以傳回 `logical` 值。

`comparer` 是 `Comparer`，可用來控制比較。 比較子函數接受兩個引數，並根據第一個值小於、等於或大於秒數，傳回 -1、0 或 1。 比較子可用來提供不區分大小寫或文化特性與地區設定感知的比較。

公式語言中提供下列內建比較子:

-   `Comparer.Ordinal`: 用來執行精確序數比較
-   `Comparer.OrdinalIgnoreCase`: 用來執行不區分大小寫的精確序數比較
-   `Comparer.FromCulture`: 用來執行文化特性感知的比較


## Examples

### Example #1
使用 "en-US" 地區比較 "1" 和 "A" 以判斷值是否相等。
```powerquery
Comparer.Equals(Comparer.FromCulture("en-US"), "1", "A")
```

Result: 
```powerquery
false
```




## Category
Comparer
