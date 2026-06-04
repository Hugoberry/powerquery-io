---
title: AzureStorage.DataLake
---

# AzureStorage.DataLake


Azure Data Lake Storage에서 지정한 컨테이너 및 해당 하위 폴더에 있는 문서가 포함된 탐색 테이블을 반환합니다.


## Syntax

```powerquery
AzureStorage.DataLake(
    endpoint as text,
    optional options as record
) as table
```


## Remarks

Azure Data Lake Storage 파일 시스템의 계정 URL(`endpoint`)에서 지정한 컨테이너 및 해당 하위 폴더에 있는 문서가 포함된 탐색 테이블을 반환합니다. 다음 옵션을 제어하기 위해 `options`이(가) 지정될 수 있습니다.

-   `BlockSize` : 데이터 소비자에서 대기하기 전 읽을 바이트 수입니다. 기본값은 4MB입니다.
-   `RequestSize` : 서버에 대한 단일 HTTP 요청에서 읽으려는 바이트 수입니다. 기본값은 4MB입니다.
-   `ConcurrentRequests` : ConcurrentRequests 옵션은 메모리 사용률 비용으로 동시에 수행되는 요청 수를 지정하여 더 빠른 데이터 다운로드를 지원합니다. 필요한 메모리는 (ConcurrentRequest \* RequestSize)입니다. 기본값은 16입니다.
-   `HierarchicalNavigation` : 파일이 트리 형식 디렉터리 보기 또는 단순 목록에 반환되는지 여부를 제어하는 논리(true/false)입니다. 기본값은 false입니다.



## Category
Accessing data
