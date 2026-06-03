---
title: Csv.Document
---

# Csv.Document


返回 CSV 文档的内容作为表。


## Syntax

```powerquery
Csv.Document(
    source as any,
    optional columns as any,
    optional delimiter as any,
    optional extraValues as number,
    optional encoding as TextEncoding.Type
) as table
```


## Remarks

以表格形式返回 CSV 文档的内容。

-   `columns` 可以为 null、列数、列名列表、表类型或选项记录。
-   `delimiter` 可以是单个字符、字符列表，或表示行应由连续空格字符拆分的值 `""`。默认值: `","`。
-   请参阅 `ExtraValues.Type` 以了解 `extraValues` 的支持值。
-   `encoding` 指定文本编码类型。

如果为 `columns` 指定了记录(并且 `delimiter`、`extraValues` 和 `encoding` 为 null)，则可能会提供以下记录字段:

-   `Delimiter`: 单个字符列分隔符。默认值: `","`。
-   `Columns`: 可以为 null、列数、列名列表或表格类型。如果列数小于输入中发现的数字，则忽略其他列。如果列数大于输入中发现的数字，则其他列将为 null。如果未指定，则列数将由输入中发现的数字决定。
-   `Encoding`: 文件的文本编码。默认值: 65001 (UTF-8)。
-   `CsvStyle`: 指定引号的处理方式。
    -   `CsvStyle.QuoteAfterDelimiter` (默认值): 字段中的引号仅在紧跟分隔符后才起作用。
    -   `CsvStyle.QuoteAlways`: 不论在何处出现，字段中的引号始终有意义。
-   `QuoteStyle`: 指定如何处理带引号的换行符。
    -   `QuoteStyle.Csv` (默认值): 将带引号的换行符视为数据的一部分，而不是当前行的末尾。
    -   `QuoteStyle.None`: 将所有换行符视为当前行的末尾，即使它们出现在带引号的值内也是如此。
-   `IncludeByteOrderMark`: 一个逻辑值，指示是否在 CSV 输出的开头包含字节顺序标记 (BOM)。设置为 true 时，将写入 BOM (例如，UTF-8 BOM: `0xEF 0xBB 0xBF`)；如果设置为 false，则不包含 BOM。此选项仅适用于输出应用场景。默认值为 `false`。
-   `ExtraValues`: 请参阅 `ExtraValues.Type` 了解支持的 ExtraValue 值。


## Examples

### Example #1
处理包含列标题的 CSV 文本。
```powerquery
let
    csv = Text.Combine({"OrderID,Item", "1,Fishing rod", "2,1 lb. worms"}, "#(cr)#(lf)")
in
    Table.PromoteHeaders(Csv.Document(csv))
```

Result: 
```powerquery
Table.FromRecords({
    [OrderID = "1", Item = "Fishing rod"],
    [OrderID = "2", Item = "1 lb. worms"]
})
```


### Example #2
Process CSV text with multiple delimiter characters. In this example, the third parameter specifies the delimiter pattern `#|#` to use instead of the default.
```powerquery
let
    csv = Text.Combine({"OrderID#|#Color", "1#|#Red", "2#|#Blue"}, "#(cr)#(lf)")
in
    Table.PromoteHeaders(Csv.Document(csv, null, "#|#"))
```

Result: 
```powerquery
Table.FromRecords({
    [OrderID = "1", Color = "Red"],
    [OrderID = "2", Color = "Blue"]
})
```




## Category
Accessing data
