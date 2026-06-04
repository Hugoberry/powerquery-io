---
title: AzureHiveLLAP.Database
---

# AzureHiveLLAP.Database


HDInsight Interactive Query에서 데이터 가져오기


## Syntax

```powerquery
AzureHiveLLAP.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

HDInsight Interactive Query `server`를 사용하여 `database`에 지정된 HDInsight Interactive Query에서 테이블 목록을 반환합니다. 포트 번호는 필요한 경우 콜론으로 구분하여 서버와 함께 지정할 수도 있습니다. 다음 옵션을 제어하도록 선택적 매개 변수 `options`를 지정할 수도 있습니다.

-   `ConnectionTimeout`: 서버에 대한 연결 시도를 포기하기 전에 대기할 시간을 제어하는 지속 시간입니다. 기본값은 드라이버에 따라 다릅니다.
-   `CommandTimeout`: 서버 측 쿼리를 취소하기 전에 실행할 수 있는 시간을 제어하는 지속 시간입니다. 기본값은 드라이버에 따라 다릅니다.

`options` 매개 변수는 \[option1 = value1, option2 = value2...\]와 같이 지정됩니다.


