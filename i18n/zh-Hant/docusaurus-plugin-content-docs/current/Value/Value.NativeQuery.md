---
title: Value.NativeQuery
---

# Value.NativeQuery


依據目標來評估查詢。


## Syntax

```powerquery
Value.NativeQuery(
    target as any,
    query as text,
    optional parameters as any,
    optional options as record
) as any
```


## Remarks

使用 <code>parameters</code> 中指定的參數與 <code>options</code> 中指定的選項，依據 <code>target</code> 來評估 <code>query</code>。<br />查詢的輸出由 <code>target</code> 定義。<br /><code>target</code> 可為 <code>query</code> 描述的作業提供內容。<br /><code>query</code> 描述要對 <code>target</code> 執行的查詢。<code>query</code> 會以 <code>target</code> 特有的方式表示 (例如 T-SQL 陳述式)。<br />選用的 <code>parameters</code> 值會因情況不同而包含清單或記錄，以提供 <code>query</code> 所需要的參數值。<br />選用的 <code>options</code> 記錄包含的選項可能會影響依據 <code>target</code> 來評估 <code>query</code> 的行為。這些選項為 <code>target</code> 專用的選項。<br />



## Category
Values
