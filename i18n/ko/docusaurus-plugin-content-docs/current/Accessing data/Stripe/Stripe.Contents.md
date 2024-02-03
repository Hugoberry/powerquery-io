---
title: Stripe.Contents
---

# Stripe.Contents


## Description

API 호출 수를 제한하는 옵션과 함께 Stripe API를 호출합니다.


## Syntax

```powerquery
Stripe.Contents(
    method as text,
    optional query as record,
    optional pageLimit as number
) as table
```


## Details

추가 매개 변수로 전달된 선택적 레코드 <code>query</code>와 API 요청 수에 대한 제한으로 선택적 <code>pageLimit</code>를 포함하여 https://api.stripe.com/v1/<code>method</code>에서 Stripe API를 호출합니다. 최근 데이터가 먼저 반환됩니다. <code>pageLimit</code>가 지정되지 않은 경우 모든 데이터가 반환됩니다. Stripe Version 2015-10-16이 사용됩니다.


## Examples

### Example #1 
모든 요금 데이터 반환
```powerquery
Stripe.Contents("charges")
```

Result: 
```powerquery
현재 Stripe 계정에 대한 모든 요금 데이터를 포함하는 테이블
```


### Example #2 
요금 데이터의 한 페이지 반환
```powerquery
Stripe.Contents("charges", [], 1)
```

Result: 
```powerquery
현재 Stripe 계정에 대한 최근 요금 데이터를 포함하는 테이블
```



