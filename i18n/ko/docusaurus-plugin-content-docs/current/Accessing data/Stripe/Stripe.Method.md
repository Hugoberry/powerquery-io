---
title: Stripe.Method
---

# Stripe.Method


## Description

Stripe API를 호출합니다.


## Syntax

```powerquery
Stripe.Method(
    method as text,
    additionalParameters as record,
    ColumnNames as list
) as table
```


## Details

추가 매개 변수로 전달된 레코드 <code>additionalParameters</code>와 예상되는 열 이름 <code>ColumnNames</code> 목록을 포함하여 https://api.stripe.com/v1/<code>method</code>에서 Stripe API를 호출합니다. Stripe Version 2015-10-16이 사용됩니다.


## Examples

### Example #1 
2015년 11월 1일 이후 만든 이벤트가 있는 테이블을 반환합니다.
```powerquery
Stripe.Method("events", [#"created[gte]"=1446374329], {"id", "livemode", "created", "type", "data", "object", "pending_webhooks", "request", "api_version"})
```

Result: 
```powerquery
현재 Stripe 계정에 대해 지정된 이벤트를 포함하는 테이블
```


### Example #2 
모든 SKU가 있는 테이블을 반환합니다.
```powerquery
Stripe.Method("skus", [], {"id", "created", "updated", "object", "livemode", "product", "image", "active", "price", "currency", "inventory", "attributes", "metadata", "package_dimensions"})
```

Result: 
```powerquery
현재 Stripe 계정에 대한 모든 SKU가 있는 테이블
```



