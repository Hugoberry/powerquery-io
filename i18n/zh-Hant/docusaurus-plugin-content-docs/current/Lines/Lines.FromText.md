---
title: Lines.FromText
---

# Lines.FromText


將文字值轉換成在分行符號處折行的文字值清單。如果 includeLineSeparators 為 True，則分行符號字元會包含在文字中。


## Syntax

```powerquery
Lines.FromText(
    text as text,
    optional quoteStyle as QuoteStyle.Type,
    optional includeLineSeparators as logical
) as list
```


## Remarks

將文字值轉換成在分行符號分隔處折行的文字值清單。當 includeLineSeparators 為 true 時，分行符號字元會包含在文字中。        <div>          <ul>            <li><code>QuoteStyle.None:</code> (預設值) 無須執行加括引號動作。</li>            <li><code>QuoteStyle.Csv:</code> 引號用法比照 CSV。單一雙引號字元可用於區分這些區域，而成對的雙引號字元則可用在這些區域中指定單一雙引號字元。</li>          </ul>        </div>    



## Category
Lines
