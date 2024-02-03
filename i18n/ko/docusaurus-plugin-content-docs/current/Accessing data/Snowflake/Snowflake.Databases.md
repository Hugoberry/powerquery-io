---
title: Snowflake.Databases
---

# Snowflake.Databases


## Description

Snowflake 컴퓨팅 웨어하우스에서 데이터를 가져옵니다.


## Syntax

```powerquery
Snowflake.Databases(
    server as text,
    warehouse as text,
    optional options as record
) as table
```


## Details

<code>server</code>에 있는 Snowflake Computing <code>warehouse</code>의 테이블을 나열하는 테이블을 반환합니다. 다음 옵션을 제어하기 위해 선택적 레코드 매개 변수인 <code>options</code>를 지정할 수 있습니다.<ul><li><code>Role</code>: 연결에 대한 역할 이름으로 사용할 텍스트 값입니다.</li><li><code>CreateNavigationProperties</code>: 반환되는 값에 탐색 속성을 생성할지 여부를 설정하는 논리 값(true/false)입니다(기본값: true).</li><li><code>ConnectionTimeout</code>: Snowflake로부터의 네트워크 응답을 기다리는 시간(초)입니다.</li><li><code>CommandTimeout</code>: 쿼리가 실행되기를 기다리는 시간(초)입니다.</li></ul>    


## Examples

### Example #1 
Snowflake 웨어하우스의 테이블을 나열합니다.
```powerquery
Snowflake.Databases("contoso.snowflakecomputing.com", "CONTOSO_WH")
```



