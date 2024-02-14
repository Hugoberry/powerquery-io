---
title: MailChimp.Instance
---

# MailChimp.Instance


MailChimp API uç noktasına ait ham yanıt sonuçlarını döndürür.


## Syntax

```powerquery
MailChimp.Instance(
    path as text
) as table
```


## Remarks

MailChimp API'sine çağrıda bulunur ve ham yanıtı döndürür.


## Examples

### Example #1 
Belirli bir kampanya için reports/click-details MailChimp API uç noktasından ham verileri döndürür.
```powerquery
MailChimp.Instance("reports/{campaign_id}/click-details")
```

Result: 
```powerquery
Belirli kampanyaya ait tıklama ayrıntıları ham verileri.
```



