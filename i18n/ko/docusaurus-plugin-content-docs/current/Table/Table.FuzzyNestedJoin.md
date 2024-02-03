---
title: Table.FuzzyNestedJoin
---

# Table.FuzzyNestedJoin


## Description

지정된 열에서 테이블 간 유사 조인을 수행하고 조인 결과를 새 열에 생성합니다.


## Syntax

```powerquery
Table.FuzzyNestedJoin(
    table1 as table,
    key1 as any,
    table2 as table,
    key2 as any,
    newColumnName as text,
    optional joinKind as JoinKind.Type,
    optional joinOptions as record
) as table
```


## Details

<code>key1</code>(<code>table1</code>의 경우) 및 <code>key2</code>(<code>table2</code>의 경우)(으)로 선택된 키 열 값의 유사 일치 여부에 따라 <code>table1</code>의 행과 <code>table2</code>의 행을 조인합니다. 결과는 이름이 <code>newColumnName</code>인 열에 반환됩니다.<br />유사 일치는 텍스트의 같음이 아닌 텍스트의 유사성을 기반으로 하는 비교입니다.<br />선택적 <code>joinKind</code>은(는) 수행할 조인의 종류를 지정합니다. 기본적으로 <code>joinKind</code>을(를) 지정하지 않으면 왼쪽 우선 외부 조인이 수행됩니다. 옵션에는 다음이 포함됩니다.    <ul><li><code>JoinKind.Inner</code></li>
<li><code>JoinKind.LeftOuter</code></li>
<li><code>JoinKind.RightOuter</code></li>
<li><code>JoinKind.FullOuter</code></li>
<li><code>JoinKind.LeftAnti</code></li>
<li><code>JoinKind.RightAnti</code></li>
</ul><br /><code>joinOptions</code>의 선택적 집합을 포함하여 키 열을 비교하는 방법을 지정할 될 수 있습니다. 옵션에는 다음이 포함됩니다.    <ul><li><code>ConcurrentRequests</code> : 유사 항목 일치에 사용할 병렬 스레드 수를 지정하는 1에서 8 사이의 숫자입니다. 기본값은 1입니다.</li><li><code>Culture</code> : 문화권 관련 규칙을 기준으로 레코드를 일치시킬 수 있습니다. 유효한 문화권 이름일 수 있습니다. 예를 들어 &quot;ja-jp&quot; 그룹의 문화권 옵션은 일본어 문화권을 기반으로 레코드를 일치시킵니다. 기본값은 &quot;&quot;이며, 고정 영어 문화권을 기준으로 일치시킵니다.</li><li><code>IgnoreCase</code> : 대/소문자를 구분하지 않는 키 일치를 허용하는 논리 값(true/false)입니다. 예를 들어 true인 경우 &quot;Grapes&quot;는 &quot;grapes&quot;와 일치하게 됩니다. 기본값은 true입니다.</li><li><code>IgnoreSpace</code> : 일치 항목을 찾기 위해 텍스트 부분을 결합하는 것을 허용하는 논리 값(true/false)입니다. 예를 들어 true인 경우 &quot;Gra pes&quot;는 &quot;Grapes&quot;와 일치하게 됩니다. 기본값은 true입니다.</li><li><code>NumberOfMatches</code> : 입력 행마다 반환할 수 있는 일치하는 행의 최대 수를 지정하는 정수입니다. 예를 들어 값이 1이면 각 입력 행에 대해 일치하는 행이 최대 하나만 반환됩니다. 이 옵션을 제공하지 않으면 일치하는 모든 행이 반환됩니다.</li><li><code>SimilarityColumnName</code> : 입력 값과 해당 입력의 대표 값 간 유사성을 보여 주는 열 이름입니다. 기본값은 Null이며, 이 경우 새 유사성 열이 추가되지 않습니다.</li><li><code>Threshold</code> : 두 값이 일치하는 유사성 점수를 지정하는 0.00에서 1.00 사이의 숫자입니다.    예를 들어, &quot;Grapes&quot; 및 &quot;Graes&quot;(&quot;p&quot; 누락)는 이 옵션이 0.90 미만으로 설정된 경우에만 일치합니다.    임계값 1.00은 정확한 일치만 허용합니다.    (모호한 &quot;정확히 일치&quot;는 대/소문자, 단어 순서 및 구두점과 같은 차이점을 무시할 수 있습니다.)    기본값은 0.80입니다.</li><li><code>TransformationTable</code> : 사용자 지정 값 매핑에 따라 레코드를 일치시킬 수 있는 테이블입니다. &quot;From&quot; 및 &quot;To&quot; 열을 포함해야 합니다. 예를 들어 &quot;From&quot; 열에 &quot;Grapes&quot;가 포함되어 있고 &quot;To&quot; 열에 &quot;Raisins&quot;가 포함된 변환 테이블이 제공되는 경우 &quot;Grapes&quot;가 &quot;Raisins&quot;와 일치하게 됩니다. 변환은 변환 테이블에 있는 모든 텍스트에 적용됩니다. 위의 변환 테이블에서 &quot;Grapes are sweet&quot;은 &quot;Raisins are sweet&quot;과도 일치하게 됩니다.</li></ul><br />


## Examples

### Example #1 
[FirstName]에 따라 두 테이블의 왼쪽 내부 유사 항목 조인
```powerquery
Table.FuzzyNestedJoin(
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
	  "NestedTable",
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
		    NestedTable = Table.FromRecords({
            [
				      CustomerStateID = 1,
				      FirstName2 = "Bob",
				      State = "TX"
			      ],
            [
				      CustomerStateID = 2,
				      FirstName2 = "bOB",
				      State = "CA"
			      ]
		    })
	  ],
    [
		  CustomerID = 2,
		  FirstName1 = "Robert",
		  Phone = "555-4567",
		  NestedTable = Table.FromRecords({})
	  ]
})
```




## Category
Table.Transformation
