---
title: Stripe.Method
---

# Stripe.Method


## Description

调用 Stripe API。


## Syntax

```powerquery
Stripe.Method(
    method as text,
    additionalParameters as record,
    ColumnNames as list
) as table
```


## Details

在 https://api.stripe.com/v1/<code>method</code> 上调用 Stripe API，将记录 <code>additionalParameters</code> 传递为其他参数和预期列名的列表 <code>ColumnNames</code>。使用的是 Stripe 2015-10-16 版本。


## Examples

### Example #1 
返回包含 2015 年 11 月 1 日之后创建的事件的表
```powerquery
Stripe.Method("events", [#"created[gte]"=1446374329], {"id", "livemode", "created", "type", "data", "object", "pending_webhooks", "request", "api_version"})
```

Result: 
```powerquery
包含当前 Stripe 帐户指定事件的表
```


### Example #2 
返回包含全部 SKU 的表
```powerquery
Stripe.Method("skus", [], {"id", "created", "updated", "object", "livemode", "product", "image", "active", "price", "currency", "inventory", "attributes", "metadata", "package_dimensions"})
```

Result: 
```powerquery
包含当前 Stripe 帐户全部 SKU 的表
```



