---
title: Text.StartsWith
---

# Text.StartsWith


指示文本是否以指定的值开头。


## Syntax

```powerquery
Text.StartsWith(
    text as text,
    substring as text,
    optional comparer as function
) as logical
```


## Remarks

如果文本值 `text` 以文本值 `substring` 开头，则返回 true。

-   `text`: 要搜索的 `text` 值。
-   `substring`: 一个 `text` 值，即要在 `text` 中搜索的 substring。
-   `comparer`: *(可选)*用于控制比较的 `Comparer`。例如，`Comparer.OrdinalIgnoreCase` 可用于执行不区分大小写的搜索。

`comparer` 是用于控制比较的 `Comparer`。比较器可用于提供不区分大小写的比较或区域性和区域设置感知比较。

以下内置比较器以公式语言提供:

-   `Comparer.Ordinal`: 用于执行精确的序号比较。
-   `Comparer.OrdinalIgnoreCase`: 用于执行不区分大小写的精确序号比较。
-   `Comparer.FromCulture`: 用于执行区域性感知比较。


## Examples

### Example #1
检查文本 "Hello, World" 是否以文本 "hello" 开头。
```powerquery
Text.StartsWith("Hello, World", "hello")
```

Result: 
```powerquery
false
```


### Example #2
检查文本 "Hello, World" 是否以文本 "Hello" 开头。
```powerquery
Text.StartsWith("Hello, World", "Hello")
```

Result: 
```powerquery
true
```


### Example #3
忽略大小写，检查文本 "Hello, World" 是否以文本 "hello" 开头。
```powerquery
Text.StartsWith("Hello, World", "hello", Comparer.OrdinalIgnoreCase)
```

Result: 
```powerquery
true
```




## Category
Text.Membership
