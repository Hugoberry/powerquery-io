---
title: Table.AddFuzzyClusterColumn
---

# Table.AddFuzzyClusterColumn


## Description

테이블에 지정된 열의 유사 항목 그룹화 값으로 얻은 대표 값을 사용하여 새 열을 추가합니다.


## Syntax

```powerquery
Table.AddFuzzyClusterColumn(
    table as table,
    columnName as text,
    newColumnName as text,
    optional options as record
) as table
```


## Details

대표 값 <code>columnName</code>을(를) 사용하여 <code>table</code>에 새 열 <code>newColumnName</code>을(를) 추가합니다. 대표 값은 <code>columnName</code>에서 각 행에 대해 값을 유사하게 일치시켜 얻습니다.    선택적 <code>options</code> 집합을 포함하여 키 열을 비교하는 방법을 지정할 수도 있습니다. 옵션은 다음과 같습니다.    <ul><li><code>Culture</code> : 문화권 관련 규칙을 기준으로 레코드를 그룹화할 수 있습니다. 유효한 문화권 이름일 수 있습니다. 예를 들어 &quot;ja-jp&quot; 그룹의 문화권 옵션은 일본어 문화권을 기반으로 레코드를 그룹화합니다. 기본값은 &quot;&quot;이며, 고정 영어 문화권을 기준으로 그룹화합니다.</li><li><code>IgnoreCase</code> : 대/소문자를 구분하지 않는 키 그룹화를 허용하는 논리 값(true/false)입니다. 예를 들어 true인 경우 &quot;Grapes&quot;는 &quot;grapes&quot;와 함께 그룹화됩니다. 기본값은 true입니다.</li><li><code>IgnoreSpace</code> : 그룹을 찾기 위해 텍스트 부분을 결합하는 것을 허용하는 논리 값(true/false)입니다. 예를 들어 true인 경우 &quot;Gra pes&quot;는 &quot;Grapes&quot;와 함께 그룹화됩니다. 기본값은 true입니다.</li><li><code>SimilarityColumnName</code> : 입력 값과 해당 입력의 대표 값 간 유사성을 보여 주는 열 이름입니다. 기본값은 Null이며, 이 경우 새 유사성 열이 추가되지 않습니다.</li><li><code>Threshold</code> : 두 값을 그룹화할 유사성 점수를 지정하는 0.00에서 1.00 사이의 숫자입니다.    예를 들어, &quot;포도&quot; 및 &quot;그레이&quot;(&quot;p&quot; 누락)는 이 옵션이 0.90 미만으로 설정된 경우에만 함께 그룹화됩니다.    임계값 1.00은 정확한 일치만 허용합니다.    (유사 항목 &quot;정확한 일치&quot;는 대/소문자, 단어 순서 및 구두점과 같은 차이점을 무시할 수 있습니다.)    기본값은 0.80입니다.</li><li><code>TransformationTable</code> : 사용자 지정 값 매핑에 따라 레코드를 그룹화할 수 있는 테이블입니다. &quot;From&quot; 및 &quot;To&quot; 열을 포함해야 합니다. 예를 들어 &quot;From&quot; 열에 &quot;Grapes&quot;가 포함되어 있고 &quot;To&quot; 열에 &quot;Raisins&quot;가 포함된 변환 테이블이 제공되는 경우 &quot;Grapes&quot;가 &quot;Raisins&quot;와 함께 그룹화됩니다. 변환은 변환 테이블에 있는 모든 텍스트에 적용됩니다. 위의 변환 테이블에서 &quot;Grapes are sweet&quot;은 &quot;Raisins are sweet&quot;과도 그룹화됩니다.</li></ul><br />    


## Examples

### Example #1 
직원 위치에 대한 대표 값을 찾습니다.
```powerquery
Table.AddFuzzyClusterColumn(
    Table.FromRecords(
        {
            [EmployeeID = 1, Location = "Seattle"],
            [EmployeeID = 2, Location = "seattl"],
            [EmployeeID = 3, Location = "Vancouver"],
            [EmployeeID = 4, Location = "Seatle"],
            [EmployeeID = 5, Location = "vancover"],
            [EmployeeID = 6, Location = "Seattle"],
            [EmployeeID = 7, Location = "Vancouver"]
        },
        type table [EmployeeID = nullable number, Location = nullable text]
    ),
    "Location",
    "Location_Cleaned",
    [IgnoreCase = true, IgnoreSpace = true]
)
```

Result: 
```powerquery
Table.FromRecords(
    {
        [EmployeeID = 1, Location = "Seattle", Location_Cleaned = "Seattle"],
        [EmployeeID = 2, Location = "seattl", Location_Cleaned = "Seattle"],
        [EmployeeID = 3, Location = "Vancouver", Location_Cleaned = "Vancouver"],
        [EmployeeID = 4, Location = "Seatle", Location_Cleaned = "Seattle"],
        [EmployeeID = 5, Location = "vancover", Location_Cleaned = "Vancouver"],
        [EmployeeID = 6, Location = "Seattle", Location_Cleaned = "Seattle"],
        [EmployeeID = 7, Location = "Vancouver", Location_Cleaned = "Vancouver"]
    },
    type table [EmployeeID = nullable number, Location = nullable text, Location_Cleaned = nullable text]
)
```




## Category
Table.Transformation
