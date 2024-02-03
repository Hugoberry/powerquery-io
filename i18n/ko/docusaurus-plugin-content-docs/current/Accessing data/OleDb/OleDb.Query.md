---
title: OleDb.Query
---

# OleDb.Query


## Description

OLE DB 데이터 원본에서 원시 쿼리를 실행한 결과를 반환합니다.


## Syntax

```powerquery
OleDb.Query(
    connectionString as any,
    query as text,
    optional options as record
) as table
```


## Details

OLE DB를 사용하여 연결 문자열 <code>connectionString</code>과(와) 함께 <code>query</code>을(를) 실행한 결과를 반환합니다. <code>connectionString</code>은(는) 텍스트이거나 속성 값 쌍의 레코드일 수 있습니다. 속성 값은 텍스트 또는 숫자일 수 있습니다. 선택적 레코드 매개 변수 <code>options</code>을(를) 제공하여 추가 속성을 지정할 수 있습니다. 레코드에는 다음 필드가 포함될 수 있습니다.    <ul><li><code>ConnectionTimeout</code> : 서버에 대한 연결 시도를 포기하기 전에 대기할 시간을 제어하는 기간입니다. 기본값은 드라이버에 따라 다릅니다.</li><li><code>CommandTimeout</code> : 서버 쪽 쿼리를 취소하기 전에 실행할 수 있는 시간을 제어하는 기간입니다. 기본값은 10분입니다.</li><li><code>SqlCompatibleWindowsAuth</code> : Windows 인증에 사용할 SQL Server 호환 연결 문자열 옵션을 생성할지 여부를 결정하는 논리값(true/false)입니다. 기본값은 true입니다.</li></ul>



## Category
Accessing data
