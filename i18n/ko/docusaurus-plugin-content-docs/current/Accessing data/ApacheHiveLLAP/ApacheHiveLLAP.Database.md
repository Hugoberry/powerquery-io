---
title: ApacheHiveLLAP.Database
---

# ApacheHiveLLAP.Database


## Description

하이브 LLAP에서 데이터 가져오기


## Syntax

```powerquery
ApacheHiveLLAP.Database(
    server as text,
    database as text,
    thriftTransport as number,
    optional options as record
) as table
```


## Details

선택한 <code>protocol</code>을 사용하여 Hive LLAP <code>server</code>의 <code>database</code>에 지정된 Hive LLAP에서 테이블 목록을 반환합니다. 포트 번호는 필요한 경우 콜론으로 구분하여 서버와 함께 지정할 수도 있습니다. Thrift 전송 프로토콜은 값이 "Standard", "HTTP"인 열거 유형입니다. 다음 옵션을 제어하도록 선택적 <code>options</code> 매개 변수를 지정할 수도 있습니다.<ul>        <li><code>ConnectionTimeout</code>: 서버에 대한 연결 시도를 포기하기 전에 대기할 시간을 제어하는 지속 시간입니다. 기본값은 드라이버에 따라 다릅니다.</li>        <li><code>CommandTimeout</code>: 서버 측 쿼리를 취소하기 전에 실행할 수 있는 시간을 제어하는 지속 시간입니다. 기본값은 드라이버에 따라 다릅니다.</li></ul><code>options</code> 매개 변수는 [option1 = value1, option2 = value2...]와 같이 지정됩니다.


