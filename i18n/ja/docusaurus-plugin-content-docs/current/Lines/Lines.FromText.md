---
title: Lines.FromText
---

# Lines.FromText


テキスト値を、改行で分割されたテキスト値のリストに変換します。includeLineSeparators が true の場合、改行文字はテキストに含まれます。


## Syntax

```powerquery
Lines.FromText(
    text as text,
    optional quoteStyle as QuoteStyle.Type,
    optional includeLineSeparators as logical
) as list
```


## Remarks

テキスト値を、改行で分割されたテキスト値のリストに変換します。includeLineSeparators が true の場合、改行文字はテキストに含まれます。        <div>          <ul>            <li><code>QuoteStyle.None:</code> (既定値) 引用符の動作は必要ありません。</li>            <li><code>QuoteStyle.Csv:</code> 引用符は CSV に従います。二重引用符文字は、該当の領域を囲むために使用されます。また、二重引用符文字のペアは、該当する地域内で 1 つの二重引用符文字を囲むために使用します。</li>          </ul>        </div>    



## Category
Lines
