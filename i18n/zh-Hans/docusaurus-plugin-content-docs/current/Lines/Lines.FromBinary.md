---
title: Lines.FromBinary
---

# Lines.FromBinary


将二进制值转换成在换行符处拆分的文本值列表。如果指定的是引用样式，则引号内可能会出现换行符。如果 includeLineSeparators 为 true，则文本中可能会出现换行符。


## Syntax

```powerquery
Lines.FromBinary(
    binary as binary,
    optional quoteStyle as any,
    optional includeLineSeparators as logical,
    optional encoding as TextEncoding.Type
) as list
```


## Remarks

将二进制值转换为在换行符处拆分的文本值列表。

-   `binary`: 要转换为列表的二进制值。
-   `quoteStyle`: 指定如何处理换行符。`quoteStyle` 的值可以为 `null`。默认值为 `QuoteStyle.None`。
-   `includeLineSeparators`: 指定是否在文本中包含换行符。`includeLineSeparators` 的值可以为 `null`。默认值为 `false`。
-   `encoding`: 指定二进制值的文本编码。`encoding` 的值可以为 `null`。默认值为 `65001` (UTF-8)。

如果为 `quoteStyle` 指定了记录(并且 `includeLineSeparators` 和 `encoding` 为 `null`)，则可以提供以下记录字段:

-   `QuoteStyle`: 指定如何处理带引号的换行符。
    -   `QuoteStyle.Csv`: 将带引号的换行符视为数据的一部分，而不是当前行的末尾。
    -   `QuoteStyle.None`: 将所有换行符视为当前行的末尾，即使它们出现在带引号的值内也是如此。如果未指定 `CsvStyle` 选项，则此值为默认值。
-   `CsvStyle`: 指定引号的处理方式。不应与 `QuoteStyle.None` 一起使用。
    -   `CsvStyle.QuoteAfterDelimiter`: 字段中的引号仅在紧跟在 `Delimiter` 后面才起作用。
    -   `CsvStyle.QuoteAlways`: 字段中的引号始终是意义的，无论其位于何处。
-   `Delimiter`: 单个字符分隔符。应仅与 `CsvStyle.QuoteAfterDelimiter` 一起使用。
-   `IncludeLineSeparators`: 指定是否在文本中包含换行符。默认值为 `false`。
-   `Encoding`: 二进制值的文本编码。默认值为 `65001` (UTF-8)。



## Category
Lines
