---
title: Lines.FromText
---

# Lines.FromText


将文本值转换为在换行符处拆分的文本值列表。如果 includeLineSeparators 为 true，则文本中将包括换行符。


## Syntax

```powerquery
Lines.FromText(
    text as text,
    optional quoteStyle as QuoteStyle.Type,
    optional includeLineSeparators as logical
) as list
```


## Remarks

将文本值转换为在换行符处拆分的文本值列表。如果 includeLineSeparators 为 true，则文本中将包括换行符。        <div>          <ul>            <li><code>QuoteStyle.None:</code> (默认值)无需任何加引号行为。</li>            <li><code>QuoteStyle.Csv:</code> 如何加引号按 CSV 的要求进行。使用一个双引号字符来界定这些区域，使用一对双引号来表示此区域中的单个双引号字符。</li>          </ul>        </div>    



## Category
Lines
