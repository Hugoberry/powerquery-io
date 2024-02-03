---
title: AnalysisServices.Databases
---

# AnalysisServices.Databases


## Description

특정 호스트에서 Analysis Services 데이터베이스를 반환합니다.


## Syntax

```powerquery
AnalysisServices.Databases(
    server as text,
    optional options as record
) as table
```


## Details

Analysis Services 인스턴스 <code>server</code>에서 데이터베이스를 반환합니다. 선택적 레코드 매개 변수 <code>options</code>이(가) 추가 속성을 지정하기 위해 제공될 수 있습니다. 레코드에는 다음 필드가 포함될 수 있습니다.    <ul><li><code>TypedMeasureColumns</code> : 다차원 또는 테이블 형식 모델에 지정된 형식이 추가된 측정 열의 형식에 사용됨을 나타내는 논리 값입니다. false로 설정하면 모든 측정 열에 대해 형식 number가 사용됩니다. 이 옵션의 기본값은 false입니다.</li><li><code>Culture</code> : 데이터의 문화권을 지정하는 문화권 이름입니다. 이는 &#39;Locale Identifier&#39; 연결 문자열 속성에 해당합니다.</li><li><code>CommandTimeout</code> : 서버 쪽 쿼리를 취소하기 전에 실행할 수 있는 시간을 제어하는 기간입니다. 기본값은 드라이버에 따라 다릅니다.</li><li><code>ConnectionTimeout</code> : 서버에 대한 연결 시도를 포기하기 전에 대기할 시간을 제어하는 기간입니다. 기본값은 드라이버에 따라 다릅니다.</li><li><code>SubQueries</code> : 연결 문자열에서 &quot;SubQueries&quot; 속성 값을 설정하는 숫자(0, 1 또는 2)입니다. 이 숫자는 subselect 또는 subcute에 대한 계산 멤버의 동작의 제어합니다(기본값은 2임).</li><li><code>Implementation</code></li></ul>    



## Category
Accessing data