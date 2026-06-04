---
title: DocumentDB.Contents
---

# DocumentDB.Contents


Azure Cosmos DB 계정의 URL을 입력합니다.


## Syntax

```powerquery
DocumentDB.Contents(
    url as text,
    optional database as text,
    optional collection as text,
    optional options as record
) as table
```


## Remarks

`url`에 있는 Azure Cosmos DB 데이터베이스의 테이블을 반환합니다. `database`가 지정된 경우 컬렉션의 테이블이 대신 반환됩니다. 또한 `Query` 필드가 `options` 레코드에 지정된 경우 지정된 데이터베이스 및/또는 컬렉션에서 실행되는 쿼리의 결과가 반환됩니다.


