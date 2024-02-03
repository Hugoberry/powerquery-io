---
title: Stripe.Contents
---

# Stripe.Contents


## Description

Gọi tới API Stripe, với tùy chọn giới hạn số lệnh gọi API được thực hiện.


## Syntax

```powerquery
Stripe.Contents(
    method as text,
    optional query as record,
    optional pageLimit as number
) as table
```


## Details

Gọi tới API Stripe tại https://api.stripe.com/v1/<code>method</code>, với bản ghi tùy chọn <code>query</code> được chấp nhận làm tham số bổ sung và <code>pageLimit</code> tùy chọn làm giới hạn về số lượng yêu cầu API. Các dữ liệu mới nhất được trả về trước. Nếu <code>pageLimit</code> không được chỉ định, tất cả dữ liệu sẽ được trả về. Stripe Phiên bản 2015-10-16 được sử dụng.


## Examples

### Example #1 
Trả về tất cả dữ liệu phí
```powerquery
Stripe.Contents("charges")
```

Result: 
```powerquery
Một bảng có tất cả dữ liệu phí cho tài khoản Stripe hiện tại
```


### Example #2 
Trả về một trang dữ liệu phí
```powerquery
Stripe.Contents("charges", [], 1)
```

Result: 
```powerquery
Một bảng có dữ liệu phí mới nhất cho tài khoản Stripe hiện tại
```



