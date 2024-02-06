---
title: Stripe.Contents
---

# Stripe.Contents


呼叫 Stripe API。您可選擇是否要限制 API 的呼叫數。


## Syntax

```powerquery
Stripe.Contents(
    method as text,
    optional query as record,
    optional pageLimit as number
) as table
```


## Remarks

在 https://api.stripe.com/v1/<code>method</code> 呼叫 Stripe API。您可以選擇是否要使用其他參數傳遞記錄 <code>query</code>，以及是否要使用 <code>pageLimit</code> 限制 API 要求數。最新的資料會優先傳回。若未指定 <code>pageLimit</code>，將會傳回所有資料。將使用 Stripe 2015-10-16 版。


## Examples

### Example #1 
傳回所有費用資料
```powerquery
Stripe.Contents("charges")
```

Result: 
```powerquery
此資料表包含目前 Stripe 帳戶的所有費用資料
```


### Example #2 
傳回一頁費用資料
```powerquery
Stripe.Contents("charges", [], 1)
```

Result: 
```powerquery
此資料表包含目前 Stripe 帳戶的最新費用資料
```



