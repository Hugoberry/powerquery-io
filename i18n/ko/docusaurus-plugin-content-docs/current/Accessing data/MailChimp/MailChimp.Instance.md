---
title: MailChimp.Instance
---

# MailChimp.Instance


## Description

MailChimp API 엔드포인트의 원시 응답 결과를 반환합니다.


## Syntax

```powerquery
MailChimp.Instance(
    path as text
) as table
```


## Details

MailChimp API에 호출하고 원시 응답을 반환합니다.


## Examples

### Example #1 
지정된 캠페인에 대해 보고서/세부 정보 클릭 MailChimp API 엔드포인트에서 원시 데이터를 반환합니다.
```powerquery
MailChimp.Instance("보고서/{campaign_id}/세부 정보 클릭")
```

Result: 
```powerquery
지정된 캠페인의 원시 세부 정보 클릭 데이터입니다.
```



