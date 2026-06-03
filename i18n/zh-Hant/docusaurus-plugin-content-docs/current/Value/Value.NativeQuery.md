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

使用 `parameters` 中指定的參數與 `options` 中指定的選項，依據 `target` 來評估 `query`。

查詢的輸出由 `target` 定義。

`target` 可為 `query` 描述的作業提供內容。

`query` 描述要對 `target` 執行的查詢。`query` 會以 `target` 特有的方式表示 (例如 T-SQL 陳述式)。

選用的 `parameters` 值會因情況不同而包含清單或記錄，以提供 `query` 所需要的參數值。

選用的 `options` 記錄包含的選項可能會影響依據 `target` 來評估 `query` 的行為。這些選項為 `target` 專用的選項。



## Category
Values
