---
title: AzureDataExplorer.Contents
---

# AzureDataExplorer.Contents


## Description

Azure Data Explorer(Kusto)에서 데이터를 가져옵니다.


## Syntax

```powerquery
AzureDataExplorer.Contents(
    cluster as text,
    optional database as text,
    optional tableOrQuery as text,
    optional options as record
) as table
```


## Details

Azure Data Explorer(Kusto) 인스턴스에서 데이터를 가져옵니다.


## Examples

### Example #1 
Storm Events 정보 테이블을 반환합니다.
```powerquery
Kusto.Contents("help", "Samples", "StormEvents", [])
```

Result: 
```powerquery
"도움말" 클러스터에 있는 "Samples" 데이터베이스의 Storm Events가 포함된 테이블
```



