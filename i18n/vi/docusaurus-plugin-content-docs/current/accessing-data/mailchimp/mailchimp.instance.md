---
title: MailChimp.Instance
---

# MailChimp.Instance


Trả về kết quả phản hồi thô từ điểm cuối API MailChimp.


## Syntax

```powerquery
MailChimp.Instance(
    path as text
) as table
```


## Remarks

Thực hiện lệnh gọi đến API MailChimp và trả về phản hồi thô.


## Examples

### Example #1 
Trả về dữ liệu thô từ điểm cuối API MailChimp về báo cáo/lần bấm-chi tiết cho một chiến dịch đã cho.
```powerquery
MailChimp.Instance("báo cáo/{campaign_id}/lần bấm-chi tiết")
```

Result: 
```powerquery
Dữ liệu chi tiết thô về lần bấm từ chiến dịch đã cho.
```



