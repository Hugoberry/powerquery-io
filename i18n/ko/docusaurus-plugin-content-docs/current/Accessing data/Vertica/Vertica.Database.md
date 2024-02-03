---
title: Vertica.Database
---

# Vertica.Database


## Description

Vertica에서 데이터를 가져옵니다.


## Syntax

```powerquery
Vertica.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Details

<code>database</code> 매개 변수로 이름이 지정된 데이터베이스에 있는 <code>server</code> 매개 변수로 이름이 지정된 서버에서 사용 가능한 스키마 테이블을 반환합니다.선택적 레코드 매개 변수인 <code>options</code>를 제공하여 추가 속성을 지정할 수도 있습니다. 레코드에는 다음 필드가 포함될 수 있습니다.<ul>    <li><code>ConnectionTimeout</code>: 서버에 대한 연결 시도를 포기하기 전에 대기할 시간을 제어하는 기간입니다. 기본값은 드라이버에 따라 다릅니다.</li>    <li><code>CommandTimeout </code>: 서버 측 쿼리가 취소되기 전에 실행될 수 있는 시간을 제어하는 기간입니다. 기본값은 드라이버에 따라 다릅니다.</li></ul>


## Examples

### Example #1 
Vertica에서 테이블을 나열합니다.
```powerquery

```



