---
title: Lines.FromText
---

# Lines.FromText


## Description

텍스트 값을 줄 바꿈으로 분할된 텍스트 값 목록으로 변환합니다. includeLineSeparators가 true이면 줄 바꿈 문자가 텍스트에 포함됩니다.


## Syntax

```powerquery
Lines.FromText(
    text as text,
    optional quoteStyle as QuoteStyle.Type,
    optional includeLineSeparators as logical
) as list
```


## Details

텍스트 값을 줄 바꿈으로 분할된 텍스트 값 목록으로 변환합니다. includeLineSeparators가 true이면 줄 바꿈 문자가 텍스트에 포함됩니다.        <div>          <ul>            <li><code>QuoteStyle.None:</code> (default) 따옴표로 묶는 동작이 필요하지 않습니다.</li>            <li><code>QuoteStyle.Csv:</code> CSV에 따라 따옴표로 묶습니다. 큰따옴표는 이러한 영역의 경계를 정하는 데 사용되며, 큰따옴표 쌍은 이러한 영역 내에서 단일 큰따옴표를 나타내는 데 사용됩니다. </li>          </ul>        </div>    



## Category
Lines
