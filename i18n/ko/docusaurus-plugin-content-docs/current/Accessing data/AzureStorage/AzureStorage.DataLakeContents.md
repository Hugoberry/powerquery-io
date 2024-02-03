---
title: AzureStorage.DataLakeContents
---

# AzureStorage.DataLakeContents


## Description

Azure Data Lake Storage 파일 시스템에서 지정된 파일의 콘텐츠를 반환합니다.


## Syntax

```powerquery
AzureStorage.DataLakeContents(
    url as text,
    optional options as record
) as binary
```


## Details

Azure Data Lake Storage 파일 시스템에서 URL <code>url</code>에 있는 파일의 콘텐츠를 반환합니다. 다음 옵션을 제어하기 위해 <code>options</code>이(가) 지정될 수 있습니다.    <ul><li><code>BlockSize</code> : 데이터 소비자에서 대기하기 전 읽을 바이트 수입니다. 기본값은 4MB입니다.</li><li><code>RequestSize</code> : 서버에 대한 단일 HTTP 요청에서 읽으려는 바이트 수입니다. 기본값은 4MB입니다.</li><li><code>ConcurrentRequests</code> : ConcurrentRequests 옵션은 메모리 사용률 비용으로 동시에 수행되는 요청 수를 지정하여 더 빠른 데이터 다운로드를 지원합니다. 필요한 메모리는 (ConcurrentRequest \* RequestSize)입니다. 기본값은 16입니다.</li></ul>



## Category
Accessing data
