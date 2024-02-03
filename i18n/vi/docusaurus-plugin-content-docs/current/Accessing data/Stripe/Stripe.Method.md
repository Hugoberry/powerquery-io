---
title: Stripe.Method
---

# Stripe.Method


## Description

Gọi tới API Stripe.


## Syntax

```powerquery
Stripe.Method(
    method as text,
    additionalParameters as record,
    ColumnNames as list
) as table
```


## Details

Gọi tới API Stripe tại https://api.stripe.com/v1/<code>method</code>, với bản ghi <code>additionalParameters</code> được chấp nhận làm tham số bổ sung và danh sách <code>ColumnNames</code> gồm các tên cột dự kiến. Stripe Phiên bản 2015-10-16 được sử dụng.


## Examples

### Example #1 
Trả về bảng có các sự kiện được tạo sau ngày 1 tháng 11 năm 2015
```powerquery
Stripe.Method("events", [#"created[gte]"=1446374329], {"id", "livemode", "created", "type", "data", "object", "pending_webhooks", "request", "api_version"})
```

Result: 
```powerquery
Một bảng có các sự kiện đã chỉ định cho tài khoản Stripe hiện tại
```


### Example #2 
Trả về bảng có tất cả SKU
```powerquery
Stripe.Method("skus", [], {"id", "created", "updated", "object", "livemode", "product", "image", "active", "price", "currency", "inventory", "attributes", "metadata", "package_dimensions"})
```

Result: 
```powerquery
Một bảng có tất cả SKU cho tài khoản Stripe hiện tại
```



