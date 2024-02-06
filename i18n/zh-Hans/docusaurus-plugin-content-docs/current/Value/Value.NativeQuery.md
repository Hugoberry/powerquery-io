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

使用 <code>parameters</code> 中指定的参数和 <code>options</code> 中指定的选项对 <code>target</code> 计算 <code>query</code>。<br /><code>target</code> 定义查询的输出。<br /><code>target</code> 提供 <code>query</code> 所述运算的上下文。<br /><code>query</code> 描述了要对 <code>target</code> 执行的查询。<code>query</code> 以 <code>target</code> 的专用方式(例如 T-SQL 语句)进行表示。<br />可选的 <code>parameters</code> 值可能包含适用于提供 <code>query</code> 预期的参数值的列表或记录。<br />可选的 <code>options</code> 记录可能包含影响 <code>query</code> 对 <code>target</code> 的计算行为的选项。这些选项为 <code>target</code> 所特有。<br />



## Category
Values
