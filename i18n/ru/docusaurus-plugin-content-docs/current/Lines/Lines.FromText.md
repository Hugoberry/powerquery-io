---
title: Lines.FromText
---

# Lines.FromText


## Description

Преобразует текстовое значение в список текстовых значений, разделенных разрывами строк. Если значение includeLineSeparators равно true, то символы разрыва строки включаются в текст.


## Syntax

```powerquery
Lines.FromText(
    text as text,
    optional quoteStyle as QuoteStyle.Type,
    optional includeLineSeparators as logical
) as list
```


## Details

Преобразует текстовое значение в список текстовых значений, разделенных разрывами строк. Если значение includeLineSeparators равно true, то символы разрыва строки включаются в текст.        <div>          <ul>            <li><code>QuoteStyle.None:</code> (по умолчанию) обработка специальных символов не требуется.</li>            <li><code>QuoteStyle.Csv:</code> обработка специальных символов как для формата CSV. Символ двойной кавычки используется для разграничения таких областей, пара символов двойной кавычки используется для представления одного символа двойной кавычки в пределах такой области. </li>          </ul>        </div>    



## Category
Lines
