---
title: Value.NativeQuery
---

# Value.NativeQuery


## Description

대상에 대해 쿼리를 평가합니다.


## Syntax

```powerquery
Value.NativeQuery(
    target as any,
    query as text,
    optional parameters as any,
    optional options as record
) as any
```


## Details

<code>parameters</code>에 지정된 매개 변수 및 <code>options</code>에 지정된 옵션을 사용하여 <code>target</code>에 대해 <code>query</code>을(를) 평가합니다.<br />쿼리의 출력은 <code>target</code>에서 정의됩니다.<br /><code>target</code>에서는 <code>query</code>에서 설명한 작업에 대해 컨텍스트를 제공합니다.<br /><code>query</code>에서는 <code>target</code>에 대해 실행할 쿼리를 설명합니다. <code>query</code>은(는) <code>target</code>과(와) 관련된 방식으로 표현됩니다(예: T-SQL 문).<br />선택적 <code>parameters</code> 값에는 <code>query</code>에서 예상된 매개 변수 값을 공급하는 데 적합한 목록 또는 레코드가 포함되어 있을 수 있습니다.<br />선택적 <code>options</code> 레코드에는 <code>query</code>에 대한 <code>target</code>의 평가 동작에 영향을 주는 옵션이 포함되어 있을 수 있습니다. 이러한 옵션은 <code>target</code>과(와) 관련이 있습니다.<br />



## Category
Values
