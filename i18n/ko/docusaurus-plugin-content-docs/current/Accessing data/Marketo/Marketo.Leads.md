---
title: Marketo.Leads
---

# Marketo.Leads


## Description

잠재 고객 세부 정보가 있는 테이블을 반환합니다.


## Syntax

```powerquery
Marketo.Leads(
    url as text,
    leadIds as list,
    optional options as any
) as table
```


## Details

<code>url</code>/rest/v1/leads.json에서 Marketo REST API 엔드포인트를 호출합니다. 목록 <code>leadIds</code>의 모든 잠재 고객이 반환됩니다.


## Examples

### Example #1 
세 잠재 고객에 대한 세부 정보를 가져옵니다.
```powerquery
Marketo.Leads("https://100-AAA-999.mktorest.com/rest", {50, 2343, 88498})
```

Result: 
```powerquery
제공된 잠재 고객에 대한 세부 정보가 있는 테이블
```



