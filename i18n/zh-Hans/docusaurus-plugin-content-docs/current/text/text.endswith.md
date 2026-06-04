---
title: Text.EndsWith
---

# Text.EndsWith


指示文本是否以指定的值结尾。


## Syntax

```powerquery
Text.EndsWith(
    text as text,
    substring as text,
    optional comparer as function
) as logical
```


## Remarks

指示给定的文本 `text` 是否以指定值 `substring` 结尾。指示区分大小写。

`comparer`是用于控制比较的 `Comparer`。比较器可用于提供不区分大小写或区分区域性和区域设置的比较。

以下内置比较器以公式语言提供:

-   `Comparer.Ordinal`: 用于执行精确的序号比较
-   `Comparer.OrdinalIgnoreCase`: 用于执行不区分大小写的精确序号比较
-   `Comparer.FromCulture`: 用于执行区分区域性的比较


## Examples

### Example #1
检查 "Hello, World" 是否以 "world" 结尾。
```powerquery
Text.EndsWith("Hello, World", "world")
```

Result: 
```powerquery
false
```


### Example #2
检查 "Hello, World" 是否以 "World" 结尾。
```powerquery
Text.EndsWith("Hello, World", "World")
```

Result: 
```powerquery
true
```




## Category
Text.Membership
