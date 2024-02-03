---
title: Lines.FromText
---

# Lines.FromText


## Description

Перетворює текстове значення на список текстових значень, розділених розривами рядків. Якщо параметр includeLineSeparators має значення &#34;Істина&#34;, то символи розривів рядків включаються в текст.


## Syntax

```powerquery
Lines.FromText(
    text as text,
    optional quoteStyle as QuoteStyle.Type,
    optional includeLineSeparators as logical
) as list
```


## Details

Перетворює текстове значення на список текстових значень, розділених розривами рядків. Якщо параметр includeLineSeparators має значення "Істина", то символи розривів рядків включаються в текст.        <div>          <ul>            <li><code>QuoteStyle.None:</code> (за замовчуванням) використовувати лапки не потрібно.</li>            <li><code>QuoteStyle.Csv:</code> лапки використовуються відповідно до файлу CSV. Подвійні лапки використовуються для розмежування відповідних областей. Пара подвійних лапок позначає один символ подвійних лапок у межах такої області. </li>          </ul>        </div>    



## Category
Lines
