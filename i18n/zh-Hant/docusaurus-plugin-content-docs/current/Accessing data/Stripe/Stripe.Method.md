---
title: Stripe.Method
---

# Stripe.Method


呼叫 Stripe API。


## Syntax

```powerquery
Stripe.Method(
    method as text,
    additionalParameters as record,
    ColumnNames as list
) as table
```


## Remarks

在 https://api.stripe.com/v1/<code>method</code> 呼叫 Stripe API。您可以選擇是否要使用其他參數傳遞記錄 <code>additionalParameters</code>，以及是否要使用清單 <code>ColumnNames</code> 傳遞所需的資料行名稱。將使用 Stripe 2015-10-16 版。


## Examples

### Example #1 
傳回包含自 2015 年 11 月 1 日起所建立之事件的資料表
```powerquery
Stripe.Method("events", [#"created[gte]"=1446374329], {"id", "livemode", "created", "type", "data", "object", "pending_webhooks", "request", "api_version"})
```

Result: 
```powerquery
此資料表包含目前 Stripe 帳戶的指定事件
```


### Example #2 
傳回包含所有 SKU 的資料表。
```powerquery
Stripe.Method("skus", [], {"id", "created", "updated", "object", "livemode", "product", "image", "active", "price", "currency", "inventory", "attributes", "metadata", "package_dimensions"})
```

Result: 
```powerquery
此資料表包含目前 Stripe 帳戶的所有 SKU
```



