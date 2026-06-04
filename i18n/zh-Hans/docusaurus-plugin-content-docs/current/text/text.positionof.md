---
title: Text.PositionOf
---

# Text.PositionOf


返回值的第一个位置(如果找不到，则返回 -1)。


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

返回在 `text` 中找到的文本值 `substring` 的指定出现位置。 可选参数 `occurrence` 可用于指定要返回的出现位置(默认值为第一次出现)。 如果未找到 `substring`，则返回 -1。

`comparer` 是用于控制比较的 `Comparer`。比较器可用于提供不区分大小写的比较或区分区域性与区域设置的比较。

以下内置比较器以公式语言提供:

-   `Comparer.Ordinal`: 用于执行精确的序号比较
-   `Comparer.OrdinalIgnoreCase`: 用于执行不区分大小写的精确序号比较
-   `Comparer.FromCulture`: 用于执行区分区域性的比较


## Examples

### Example #1
获取 "World" 在文本 "Hello, World! Hello, World!" 中第一次出现的位置。
```powerquery
Text.PositionOf("Hello, World! Hello, World!", "World")
```

Result: 
```powerquery
7
```


### Example #2
获取 "World" 在 "Hello, World! Hello, World!" 中最后一次出现的位置。
```powerquery
Text.PositionOf("Hello, World! Hello, World!", "World", Occurrence.Last)
```

Result: 
```powerquery
21
```




## Category
Text.Membership
