---
title: Lines.FromText
---

# Lines.FromText


將文字值轉換成在分行符號處折行的文字值清單。如果 includeLineSeparators 為 True，則分行符號字元會包含在文字中。


## Syntax

```powerquery
Lines.FromText(
    text as text,
    optional quoteStyle as any,
    optional includeLineSeparators as logical
) as list
```


## Remarks

將文字值轉換成按換行符號分割的文字值清單。

-   `text`: 要轉換成文字值清單的文字值。
-   `quoteStyle`: 指定如何處理換行符號。`quoteStyle` 的值可以是 `null`。預設值為 `QuoteStyle.None`。
-   `includeLineSeparators`: 指定是否要在文字中包括換行符號。`includeLineSeparators` 的值可以是 `null`。預設值為 `false`。

如果針對 `quoteStyle` 指定一筆記錄 (且 `includeLineSeparators` 為 `null`)，則可能會提供下列記錄欄位:

-   `QuoteStyle`: 指定如何處理帶引號的換行符號。
    -   `QuoteStyle.Csv`: 將帶引號的換行符號視為資料的一部分，而不是目前資料列的結尾。
    -   `QuoteStyle.None`: 將所有換行符號視為目前資料列的結尾，即使它們出現在帶有引號的值裡。如果未指定 `CsvStyle` 選項，則此值為預設值。
-   `CsvStyle`: 指定如何處理引號。不應與 `QuoteStyle.None` 一起使用。
    -   `CsvStyle.QuoteAfterDelimiter`: 欄位中的引號必須緊跟在 `Delimiter` 之後才有效。
    -   `CsvStyle.QuoteAlways`: 欄位中的引號無論出現在何處一律有效。
-   `Delimiter`: 單一字元分隔符號。只能與 `CsvStyle.QuoteAfterDelimiter` 一起使用。
-   `IncludeLineSeparators`: 指定是否要在文字中包括換行符號。預設值為 `false`。



## Category
Lines
