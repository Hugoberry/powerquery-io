---
title: Function.ScalarVector
---

# Function.ScalarVector


## Description

벡터 함수 위에 스칼라 함수를 만들어 다중 호출을 일괄 처리합니다.


## Syntax

```powerquery
Function.ScalarVector(
    scalarFunctionType as type,
    vectorFunction as function
) as function
```


## Details

단일 인수 행과 <code>vectorFunction</code>을(를) 함께 호출하고 단일 출력을 반환하는 <code>scalarFunctionType</code> 유형의 스칼라 함수를 반환합니다. 또한 Table.AddColumn에서처럼 입력 테이블의 각 행에 대해 스칼라 함수가 반복해서 적용되는 경우 대신 모든 입력에 대해 <code>vectorFunction</code>이(가) 한 번만 적용됩니다.<br /><code>vectorFunction</code>은(는) 해당 열이 이름이 일치하고 <code>scalarFunctionType</code>의 매개 변수를 배치하는 테이블에 전달됩니다. 이 테이블의 각 행에는 스칼라 함수의 1회 호출에 대한 인수와 함께 <code>scalarFunctionType</code>의 매개 변수에 해당하는 열이 포함되어 있습니다.<br /><code>vectorFunction</code>은(는) 입력 테이블과 길이가 동일한 목록을 반환해야 하며, 각 위치에 있는 해당 테이블의 항목은 동일한 위치의 입력 행에서 스칼라 함수를 평가한 결과와 같아야 합니다.<br />입력 테이블은 스트리밍해야 하므로 <code>vectorFunction</code>은(는) 입력이 들어올 때 해당 출력을 스트리밍하여 한 번에 하나의 입력 청크와만 작동해야 합니다. 특히, <code>vectorFunction</code>은(는) 입력 테이블을 두 번 이상 열거해서는 안 됩니다.<br />



## Category
Function
