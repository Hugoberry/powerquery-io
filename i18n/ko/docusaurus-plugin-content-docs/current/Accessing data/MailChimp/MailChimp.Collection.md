---
title: MailChimp.Collection
---

# MailChimp.Collection


## Description

MailChimp 엔드포인트의 데이터가 있는 테이블을 반환합니다.


## Syntax

```powerquery
MailChimp.Collection(
    path as text,
    optional entityName as text
) as table
```


## Details

MailChimp API에 호출하고 결과 데이터 세트를 테이블로 반환합니다. 모든 결과를 통해 자동으로 호출합니다. JSON 응답의 주 entityName과 루트 엔드포인트가 일치하지 않는 API 엔드포인트의 경우 옵션 entityName 매개 변수를 사용할 수 있습니다.


## Examples

### Example #1 
MailChimp API의 목록 엔드포인트에서 데이터 테이블을 가져옵니다.
```powerquery
MailChimp.Collection("목록")
```

Result: 
```powerquery
목록 데이터가 있는 테이블입니다.
```


### Example #2 
MailChimp API의 캠페인 폴더 엔드포인트에서 데이터 테이블을 가져옵니다.
```powerquery
MailChimp.Collection("캠페인 폴더", "폴더")
```

Result: 
```powerquery
캠페인 폴더 데이터가 있는 테이블입니다.
```



