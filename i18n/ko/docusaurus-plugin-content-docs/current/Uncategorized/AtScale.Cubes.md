---
title: AtScale.Cubes
---

# AtScale.Cubes


## Description

AtScale의 가져오기/DirectQuery 큐브 데이터입니다.


## Syntax

```powerquery
AtScale.Cubes(
    server as Uri.Type,
    optional options as record
) as table
```


## Details

서버 <code>server</code>의 AtScale에서 큐브 데이터를 반환합니다. 선택적 레코드 매개 변수 <code>options</code>를 지정하여 다음 옵션을 제어할 수도 있습니다.<ul>        <li><code>TypedMeasureColumns</code>: 다차원 또는 테이블 형식 모델에 지정된 유형을 추가된 측정값 열 유형에 사용할지 여부를 나타내는 논리적 값입니다. false로 설정할 경우 "number" 유형이 모든 측정값 열에 사용됩니다. 이 옵션의 기본값은 false입니다.</li>        <li><code>CommandTimeout</code>: 서버 쪽 쿼리를 취소 전까지 얼마나 오랫동안 실행할 수 있는지를 제어하는 기간(초)입니다. 기본값은 드라이버에 따라 다릅니다. </li>        <li><code>ConnectionTimeout</code>: 서버에 대한 연결 시도를 중단하기 전까지 얼마나 오랫동안 대기할지를 제어하는 기간(초)입니다. 기본값은 드라이버에 따라 다릅니다. </li></ul>레코드 매개 변수는 [option1 = value1, option2 = value2...]로 지정됩니다.


