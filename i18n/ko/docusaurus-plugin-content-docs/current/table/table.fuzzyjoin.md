---
title: Table.FuzzyJoin
---

# Table.FuzzyJoin


지정된 키를 기준으로 유사하게 일치하는 두 테이블의 행을 조인합니다.


## Syntax

```powerquery
Table.FuzzyJoin(
    table1 as table,
    key1 as any,
    table2 as table,
    key2 as any,
    optional joinKind as JoinKind.Type,
    optional joinOptions as record
) as table
```


## Remarks

`key1`(`table1`의 경우) 및 `key2`(`table2`의 경우)(으)로 선택된 키 열 값의 유사 일치 여부에 따라 `table1`의 행과 `table2`의 행을 조인합니다.

유사 일치는 텍스트의 같음이 아닌 텍스트의 유사성을 기반으로 하는 비교입니다.

기본적으로 내부 조인이 수행되지만 조인 유형을 지정하도록 선택적 `joinKind`을(를) 포함할 수도 있습니다. 옵션에는 다음이 포함됩니다.

-   `JoinKind.Inner`
-   `JoinKind.LeftOuter`
-   `JoinKind.RightOuter`
-   `JoinKind.FullOuter`
-   `JoinKind.LeftAnti`
-   `JoinKind.RightAnti`
-   `JoinKind.LeftSemi`
-   `JoinKind.RightSemi`

키 열을 비교하는 방법을 지정하는 데 `joinOptions`의 선택적 집합이 포함될 수 있습니다. 옵션에는 다음이 포함됩니다.

-   `ConcurrentRequests` : 유사 항목 일치에 사용할 병렬 스레드 수를 지정하는 1에서 8 사이의 숫자입니다. 기본값은 1입니다.
-   `Culture` : 문화권 관련 규칙을 기준으로 레코드를 일치시킬 수 있습니다. 유효한 문화권 이름일 수 있습니다. 예를 들어 "ja-jp" 그룹의 문화권 옵션은 일본어 문화권을 기반으로 레코드를 일치시킵니다. 기본값은 ""이며, 고정 영어 문화권을 기준으로 일치시킵니다.
-   `IgnoreCase` : 대/소문자를 구분하지 않는 키 일치를 허용하는 논리 값(true/false)입니다. 예를 들어 true인 경우 "Grapes"는 "grapes"와 일치하게 됩니다. 기본값은 true입니다.
-   `IgnoreSpace` : 일치 항목을 찾기 위해 텍스트 부분을 결합하는 것을 허용하는 논리 값(true/false)입니다. 예를 들어 true인 경우 "Gra pes"는 "Grapes"와 일치하게 됩니다. 기본값은 true입니다.
-   `NumberOfMatches` : 입력 행마다 반환할 수 있는 일치하는 행의 최대 수를 지정하는 정수입니다. 예를 들어 값이 1이면 각 입력 행에 대해 일치하는 행이 최대 하나만 반환됩니다. 이 옵션을 제공하지 않으면 일치하는 모든 행이 반환됩니다.
-   `SimilarityColumnName` : 입력 값과 해당 입력의 대표 값 간 유사성을 보여 주는 열 이름입니다. 기본값은 Null이며, 이 경우 새 유사성 열이 추가되지 않습니다.
-   `Threshold` : 두 값이 일치하는 유사성 점수를 지정하는 0.00에서 1.00 사이의 숫자입니다. 예를 들어, "Grapes" 및 "Graes"("p" 누락)는 이 옵션이 0.90 미만으로 설정된 경우에만 일치합니다. 임계값 1.00은 정확한 일치만 허용합니다. (모호한 "정확히 일치"는 대/소문자, 단어 순서 및 구두점과 같은 차이점을 무시할 수 있습니다.) 기본값은 0.80입니다.
-   `TransformationTable` : 사용자 지정 값 매핑에 따라 레코드를 일치시킬 수 있는 테이블입니다. "From" 및 "To" 열을 포함해야 합니다. 예를 들어 "From" 열에 "Grapes"가 포함되어 있고 "To" 열에 "Raisins"가 포함된 변환 테이블이 제공되는 경우 "Grapes"가 "Raisins"와 일치하게 됩니다. 변환은 변환 테이블에 있는 모든 텍스트에 적용됩니다. 위의 변환 테이블에서 "Grapes are sweet"은 "Raisins are sweet"과도 일치하게 됩니다.


## Examples

### Example #1
\[FirstName\]에 따라 두 테이블의 왼쪽 내부 유사 항목 조인
```powerquery
Table.FuzzyJoin(
    Table.FromRecords(
        {
            [CustomerID = 1, FirstName1 = "Bob", Phone = "555-1234"],
            [CustomerID = 2, FirstName1 = "Robert", Phone = "555-4567"]
        },
        type table [CustomerID = nullable number, FirstName1 = nullable text, Phone = nullable text]
    ),
    {"FirstName1"},
    Table.FromRecords(
        {
            [CustomerStateID = 1, FirstName2 = "Bob", State = "TX"],
            [CustomerStateID = 2, FirstName2 = "bOB", State = "CA"]
        },
        type table [CustomerStateID = nullable number, FirstName2 = nullable text, State = nullable text]
    ),
    {"FirstName2"},
    JoinKind.LeftOuter,
    [IgnoreCase = true, IgnoreSpace = false]
)
```

Result: 
```powerquery
Table.FromRecords({
    [
        CustomerID = 1,
        FirstName1 = "Bob",
        Phone = "555-1234",
        CustomerStateID = 1,
        FirstName2 = "Bob",
        State = "TX"
    ],
    [
        CustomerID = 1,
        FirstName1 = "Bob",
        Phone = "555-1234",
        CustomerStateID = 2,
        FirstName2 = "bOB",
        State = "CA"
    ],
    [
        CustomerID = 2,
        FirstName1 = "Robert",
        Phone = "555-4567",
        CustomerStateID = null,
        FirstName2 = null,
        State = null
    ]
})
```




## Category
Table.Transformation
