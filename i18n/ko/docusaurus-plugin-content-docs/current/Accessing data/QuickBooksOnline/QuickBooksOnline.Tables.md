---
title: QuickBooksOnline.Tables
---

# QuickBooksOnline.Tables


## Description

QuickBooks Online에서 데이터를 가져옵니다.


## Syntax

```powerquery
QuickBooksOnline.Tables(
    optional options as record
) as table
```


## Details

      QuickBooks Online에서 사용 가능한 테이블이 나열된 테이블을 반환합니다. 선택적 레코드 매개 변수인 <code>options</code>를 지정하여 다음 옵션을 제어할 수도 있습니다.      <ul>        <li><code>ConnectionTimeout</code>: 서버 연결 시도를 포기하기 전에 대기하는 시간을 제어하는 기간입니다. 기본값은 ODBC Connection Timeout 값입니다.</li>        <li><code>CommandTimeout</code>: 서버 쪽 쿼리가 취소되기 전에 실행될 수 있는 시간을 제어하는 기간입니다.</li>          </ul>        레코드 매개 변수는 [option1 = value1, option2 = value2...]와 같이 지정됩니다.    


