---
title: Excel.Workbook
---

# Excel.Workbook


## Description

Excel 통합 문서의 내용을 반환합니다.


## Syntax

```powerquery
Excel.Workbook(
    workbook as binary,
    optional useHeaders as any,
    optional delayTypes as logical
) as table
```


## Details

Excel 통합 문서의 내용을 반환합니다.     <ul>     <li> <code>useHeaders</code>은(는) Null일 수 있으며, 이는 반환된 각 테이블의 첫 번째 행을 헤더로 처리할지, 아니면 옵션 레코드로 처리할지를 나타내는 논리 값(true/false)입니다. 기본값: false.</li>     <li> <code>delayTypes</code>은(는) Null일 수도 있고, 반환된 각 테이블의 열을 형식화되지 않은 상태로 유지해야 하는지 여부를 나타내는 논리 값(true/false) 값일 수도 있습니다. 기본값: false.</li>    </ul>    <code>useHeaders</code>에 대한 레코드가 지정되어 있고 <code>delayTypes</code>이(가) Null인 경우 다음 레코드 필드가 제공될 수 있습니다.    <ul>     <li> <code>UseHeaders</code>: Null일 수도 있고, 반환된 각 테이블의 첫 번째 행을 헤더로 처리할지 여부를 나타내는 논리 값(true/false) 값일 수도 있습니다. 기본값: false.</li>     <li> <code>DelayTypes</code>: Null일 수도 있고, 반환된 각 테이블의 열을 형식화되지 않은 상태로 유지해야 하는지 여부를 나타내는 논리 값(true/false)일 수도 있습니다. 기본값: false.</li>     <li> <code>InferSheetDimensions</code>: Null일 수도 있고, 파일에서 차원 메타데이터를 읽는 대신 워크시트 자체를 읽어 데이터가 포함된 워크시트의 영역을 유추해야 하는지 여부를 나타내는 논리 값(true/false)일 수도 있습니다. 이는 차원 메타데이터가 올바르지 않은 경우 유용할 수 있습니다. 이 옵션은 Open XML Excel 파일에 대해서만 지원되며 레거시 Excel 파일에는 지원되지 않습니다. 기본값: false.</li>    </ul>    


## Examples

### Example #1 
Excel 통합 문서에서 시트 1의 내용을 반환합니다.
```powerquery
Excel.Workbook(File.Contents("C:\Book1.xlsx"), null, true){[Item="Sheet1"]}[Data]
```

Result: 
```powerquery
Table.FromRecords({
    [Column1 = "ID", Column2 = "Name", Column3 = "Phone"],
    [Column1 = 1, Column2 = "Bob", Column3 = "123-4567"],
    [Column1 = 3, Column2 = "Pam", Column3 = "543-7890"],
    [Column1 = 2, Column2 = "Jim", Column3 = "987-6543"]
})
```




## Category
Accessing data
