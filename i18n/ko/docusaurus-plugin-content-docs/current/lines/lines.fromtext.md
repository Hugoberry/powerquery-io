---
title: Lines.FromText
---

# Lines.FromText


텍스트 값을 줄 바꿈으로 분할된 텍스트 값 목록으로 변환합니다. includeLineSeparators가 true이면 줄 바꿈 문자가 텍스트에 포함됩니다.


## Syntax

```powerquery
Lines.FromText(
    text as text,
    optional quoteStyle as any,
    optional includeLineSeparators as logical
) as list
```


## Remarks

텍스트 값을 줄 바꿈으로 분할된 텍스트 값 목록으로 변환합니다.

-   `text`: 텍스트 값 목록으로 변환할 텍스트 값입니다.
-   `quoteStyle`: 줄 바꿈을 처리하는 방법을 지정합니다. `quoteStyle` 값은 `null`일 수 있습니다. 기본값은 `QuoteStyle.None`입니다.
-   `includeLineSeparators`: 텍스트에 줄 바꿈 문자를 포함할지 여부를 지정합니다. `includeLineSeparators` 값은 `null`일 수 있습니다. 기본값은 `false`입니다.

레코드가 `quoteStyle` 대해 지정되고 (`includeLineSeparators` `null`)인 경우 다음 레코드 필드를 제공할 수 있습니다.

-   `QuoteStyle`: 따옴표가 붙은 줄 바꿈 처리 방법을 지정합니다.
    -   `QuoteStyle.Csv`: 따옴표 붙은 줄 바꿈은 현재 행의 끝이 아니라 데이터의 일부로 처리됩니다.
    -   `QuoteStyle.None`: 모든 줄 바꿈은 따옴표로 묶인 값 안에 있는 경우에도 현재 행의 끝으로 처리됩니다. 이 값은 `CsvStyle` 옵션이 지정되지 않은 경우 기본값입니다.
-   `CsvStyle`: 따옴표 처리 방법을 지정합니다. `QuoteStyle.None`와(과) 함께 사용할 수없습니다.
    -   `CsvStyle.QuoteAfterDelimiter`: 필드의 따옴표는 `Delimiter` 바로 다음에만 중요합니다.
    -   `CsvStyle.QuoteAlways`: 필드의 따옴표는 표시되는 위치에 관계없이 항상 중요합니다.
-   `Delimiter`: 단일 문자 구분 기호입니다. `CsvStyle.QuoteAfterDelimiter`을(를) 사용해야 합니다.
-   `IncludeLineSeparators`: 텍스트에 줄 바꿈 문자를 포함할지 여부를 지정합니다. 기본값은 `false`입니다.



## Category
Lines
