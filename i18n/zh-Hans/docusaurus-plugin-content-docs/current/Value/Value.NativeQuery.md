---
title: Value.NativeQuery
---

# Value.NativeQuery


对目标计算查询。


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

使用 `parameters` 中指定的参数和 `options` 中指定的选项对 `target` 计算 `query`。

`target` 定义查询的输出。

`target` 提供 `query` 所述运算的上下文。

`query` 描述了要对 `target` 执行的查询。`query` 以 `target` 的专用方式(例如 T-SQL 语句)进行表示。

可选的 `parameters` 值可能包含适用于提供 `query` 预期的参数值的列表或记录。

可选的 `options` 记录可能包含影响 `query` 对 `target` 的计算行为的选项。这些选项为 `target` 所特有。



## Category
Values
