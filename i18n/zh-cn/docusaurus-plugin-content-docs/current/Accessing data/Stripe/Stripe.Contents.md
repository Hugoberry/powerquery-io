---
title: Stripe.Contents
---

# Stripe.Contents


## Description

使用限制 API 调用次数的选项来调用 Stripe API。


## Syntax

```powerquery
Stripe.Contents(
    method as text,
    optional query as record,
    optional pageLimit as number
) as table
```


## Details

在 https://api.stripe.com/v1/<code>method</code> 上调用 Stripe API，将可选记录 <code>query</code> 传递为其他参数，并将可选 <code>pageLimit</code> 传递为对 API 请求次数的限制。先返回最近的数据。如果未指定 <code>pageLimit</code>，将返回所有数据。使用的是 Stripe 2015-10-16 版本。


## Examples

### Example #1 
返回所有费用数据
```powerquery
Stripe.Contents("charges")
```

Result: 
```powerquery
包含当前 Stripe 帐户所有费用数据的表
```


### Example #2 
返回一页费用数据
```powerquery
Stripe.Contents("charges", [], 1)
```

Result: 
```powerquery
包含当前 Stripe 帐户最近费用数据的表
```



