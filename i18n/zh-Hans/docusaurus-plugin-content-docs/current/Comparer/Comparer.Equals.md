---
title: Comparer.Equals
---

# Comparer.Equals


在对两个给定值进行同等性检查的基础上返回一个逻辑值。


## Syntax

```powerquery
Comparer.Equals(
    comparer as function,
    x as any,
    y as any
) as logical
```


## Remarks

使用提供的 `comparer` 基于对两个给定值 `x` 和 `y` 的相等性检查返回 `logical` 值。

`comparer` 是用于控制比较的 `Comparer`。 比较器是接受两个参数并根据第一个值是小于、等于还是大于第二个值返回 -1、0 或 1 的函数。 比较器可用于提供不区分大小写或区分区域性和区域设置的比较。

以下内置比较器以公式语言提供:

-   `Comparer.Ordinal`: 用于执行精确的序号比较
-   `Comparer.OrdinalIgnoreCase`: 用于执行精确的不区分大小写序号比较
-   `Comparer.FromCulture`: 用于执行区分区域性的比较


## Examples

### Example #1
使用 "en-US" 区域设置比较 "1" 和 "A" 以确定这些值是否相等。
```powerquery
Comparer.Equals(Comparer.FromCulture("en-US"), "1", "A")
```

Result: 
```powerquery
false
```




## Category
Comparer
