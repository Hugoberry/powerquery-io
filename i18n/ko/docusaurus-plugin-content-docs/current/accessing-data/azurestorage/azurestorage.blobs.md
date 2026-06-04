---
title: AzureStorage.Blobs
---

# AzureStorage.Blobs


Azure 스토리지 자격 증명 모음에서 지정된 계정에 있는 컨테이너를 포함하는 탐색 테이블을 반환합니다.


## Syntax

```powerquery
AzureStorage.Blobs(
    account as text,
    optional options as record
) as table
```


## Remarks

Azure 스토리지 자격 증명 모음에서 계정 URL `account`에 있는 각 컨테이너에 대한 행을 포함하는 탐색 테이블을 반환합니다. 각 행에는 컨테이너 Blob에 대한 링크가 있습니다. 다음 옵션을 제어하기 위해 `options`이(가) 지정될 수 있습니다.

-   `BlockSize` : 데이터 소비자에서 대기하기 전 읽을 바이트 수입니다. 기본값은 4MB입니다.
-   `RequestSize` : 서버에 대한 단일 HTTP 요청에서 읽으려는 바이트 수입니다. 기본값은 4MB입니다.
-   `ConcurrentRequests` : ConcurrentRequests 옵션은 메모리 사용률 비용으로 동시에 수행되는 요청 수를 지정하여 더 빠른 데이터 다운로드를 지원합니다. 필요한 메모리는 (ConcurrentRequest \* RequestSize)입니다. 기본값은 16입니다.



## Category
Accessing data
