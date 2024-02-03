---
title: Odbc.DataSource
---

# Odbc.DataSource


## Description

ODBC 데이터 원본의 SQL 테이블과 뷰에 대한 테이블을 반환합니다.


## Syntax

```powerquery
Odbc.DataSource(
    connectionString as any,
    optional options as record
) as table
```


## Details

연결 문자열 <code>connectionString</code>에 지정된 ODBC 데이터 소스의 SQL 테이블과 뷰에 대한 테이블을 반환합니다. <code>connectionString</code>은(는) 텍스트이거나 속성 값 쌍의 레코드일 수 있습니다. 속성 값은 텍스트 또는 숫자일 수 있습니다. 선택적 레코드 매개 변수 <code>options</code>을(를) 제공하여 추가 속성을 지정할 수 있습니다. 레코드에는 다음 필드가 포함될 수 있습니다.    <ul><li><code>CreateNavigationProperties</code> : 반환된 값에서 탐색 속성을 생성할지 여부를 설정하는 논리(true/false)입니다(기본값은 true임).</li><li><code>HierarchicalNavigation</code> : 스키마 이름으로 그룹화된 테이블을 볼지 여부를 설정하는 논리(true/false)입니다(기본값은 false임).</li><li><code>ConnectionTimeout</code> : 서버에 대한 연결 시도를 포기하기 전에 대기할 시간을 제어하는 기간입니다. 기본값은 15초입니다.</li><li><code>CommandTimeout</code> : 서버 쪽 쿼리를 취소하기 전에 실행할 수 있는 시간을 제어하는 기간입니다. 기본값은 10분입니다.</li><li><code>SqlCompatibleWindowsAuth</code> : Windows 인증에 사용할 SQL Server 호환 연결 문자열 옵션을 생성할지 여부를 결정하는 논리값(true/false)입니다. 기본값은 true입니다.</li></ul>


## Examples

### Example #1 
제공된 연결 문자열에서 SQL 테이블 및 뷰를 반환합니다.
```powerquery
Odbc.DataSource("dsn=your_dsn")
```

Result: 
```powerquery
table
```




## Category
Accessing data
