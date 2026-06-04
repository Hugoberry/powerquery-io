---
title: Csv.Document
---

# Csv.Document


CSV 문서의 내용을 테이블로 반환합니다.


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

CSV 문서의 목차를 테이블로 반환합니다.

-   `columns`은(는) null, 열 수, 열 이름 목록, 테이블 형식 또는 옵션 레코드일 수 있습니다.
-   `delimiter`은(는) 단일 문자, 문자 목록 또는 행이 연속 공백 문자로 분할되어야 함을 나타내는 `""` 값일 수 있습니다. 기본값: `","`.
-   `extraValues`의 지원되는 값은 `ExtraValues.Type`을 참조하세요.
-   `encoding`은(는) 텍스트 인코딩 형식을 지정합니다.

`columns`(`delimiter`, `extraValues` 및 `encoding`은(는) null임)에 대해 레코드가 지정된 경우, 다음 레코드 필드가 제공될 수 있습니다.

-   `구분 기호`: 단일 문자 열 구분 기호입니다. 기본값: `","`.
-   `열`: null, 열 수, 열 이름 목록 또는 테이블 형식일 수 있습니다. 열 수가 입력에서 확인되는 수보다 작은 경우 추가 열이 무시됩니다. 열 수가 입력에서 확인되는 수보다 큰 경우 추가 열은 null이 됩니다. 지정하지 않으면 열 수는 입력에서 확인되는 항목에 따라 결정됩니다.
-   `인코딩`: 파일의 텍스트 인코딩입니다. 기본값: 65001(UTF-8).
-   `CsvStyle`: 따옴표 처리 방법을 지정합니다.
    -   `CsvStyle.QuoteAfterDelimiter`(기본값): 필드의 따옴표가 구분 기호 바로 뒤에 있을 때만 중요합니다.
    -   `CsvStyle.QuoteAlways`: 필드의 따옴표가 표시되는 위치에 관계없이 항상 중요합니다.
-   `QuoteStyle`: 따옴표가 붙은 줄 바꿈 처리 방법을 지정합니다.
    -   `QuoteStyle.Csv`(기본값): 따옴표가 붙은 줄 바꿈은 현재 행의 끝이 아니라 데이터의 일부로 처리됩니다.
    -   `QuoteStyle.None`: 모든 줄 바꿈은 따옴표 붙은 값 내에서 발생하는 경우에도 현재 행의 끝으로 처리됩니다.
-   `IncludeByteOrderMark`: CSV 출력의 시작 부분에 BOM(바이트 순서 표시)을 포함할지 여부를 나타내는 논리 값입니다. true로 설정하면 BOM이 작성됩니다(예: UTF-8 BOM: `0xEF 0xBB 0xBF`). false로 설정하면 BOM이 포함되지 않습니다. 이 옵션은 출력 시나리오에만 적용됩니다. 기본값은 `false`입니다.
-   `ExtraValues`: 지원되는 ExtraValues 값은 `ExtraValues.Type`을 참조하세요.


## Examples

### Example #1
열 머리글이 있는 CSV 텍스트 처리
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
