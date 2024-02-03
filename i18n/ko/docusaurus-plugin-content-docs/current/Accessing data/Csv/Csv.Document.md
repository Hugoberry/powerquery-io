---
title: Csv.Document
---

# Csv.Document


## Description

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


## Details

CSV 문서의 내용을 테이블로 반환합니다.    <ul>      <li>        <code>columns</code>은(는) null, 열 수, 열 이름 목록, 테이블 유형 또는 옵션 레코드가 될 수 있습니다.      </li>      <li>        <code>delimiter</code>은(는) 단일 문자, 문자 목록 또는 <code>""</code> 값(행이 연속 공백 문자로 분할되어야 함을 나타냄)일 수 있습니다. 기본값: <code>","</code>.      </li>      <li>        <code>extraValues</code>에 대해 지원되는 값은 <code>ExtraValues.Type</code>을 참조하세요.      </li>      <li>        <code>encoding</code>은(는) 텍스트 인코딩 유형을 지정합니다.      </li>    </ul>    <code>columns</code>(<code>delimiter</code>, <code>extraValues</code> 및 <code>encoding</code>은(는) null임)에 대해 레코드가 지정된 경우 다음 레코드 필드가 제공될 수 있습니다.    <ul>      <li>        <code>Delimiter</code>: 열 구분 기호입니다. 기본값: <code>","</code>.      </li>      <li>        <code>Columns</code>: null, 열 수, 열 이름 목록 또는 테이블 유형일 수 있습니다. 열 수가 입력에서 찾은 수보다 적으면 추가 열이 무시됩니다. 열 수가 입력에서 찾은 수보다 크면 추가 열은 null이 됩니다. 지정하지 않으면 열 수는 입력에서 찾은 항목에 따라 결정됩니다.      </li>      <li>        <code>Encoding</code>: 파일의 텍스트 인코딩입니다. 기본값: 65001 (UTF-8).      </li>      <li>        <code>CsvStyle</code>: 따옴표 처리 방법을 지정합니다.        <ul>          <li>            <code>CsvStyle.QuoteAfterDelimiter</code> (default): 필드의 따옴표는 구분 기호 바로 다음에 오는 경우에만 중요합니다.          </li>          <li>            <code>CsvStyle.QuoteAlways</code>: 필드의 따옴표는 나타나는 위치에 관계없이 항상 중요합니다.          </li>        </ul>      </li>      <li>        <code>QuoteStyle</code>: 따옴표로 묶인 줄 바꿈을 처리하는 방법을 지정합니다.        <ul>          <li>            <code>QuoteStyle.Csv</code> (default): 따옴표로 묶인 줄 바꿈은 현재 행의 끝이 아니라 데이터의 일부로 처리됩니다.          </li>          <li>            <code>QuoteStyle.None</code>: 모든 줄 바꿈은 따옴표로 묶인 값 내에서 발생하는 경우에도 현재 행의 끝으로 처리됩니다.          </li>        </ul>      </li>    </ul>  


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




## Category
Accessing data
