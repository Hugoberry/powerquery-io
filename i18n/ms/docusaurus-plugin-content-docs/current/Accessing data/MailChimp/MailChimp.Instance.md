---
title: MailChimp.Instance
---

# MailChimp.Instance


## Description

Mengembalikan respons mentah yang terhasil daripada titik akhir API MailChimp.


## Syntax

```powerquery
MailChimp.Instance(
    path as text
) as table
```


## Details

Membuat panggilan ke API MailChimp dan mengembalikan respons mentah.


## Examples

### Example #1 
Mengembalikan data mentah daripada titik akhir API MailChimp laporan/butiran klik untuk kempen yang diberikan.
```powerquery
MailChimp.Instance("reports/{campaign_id}/click-details")
```

Result: 
```powerquery
Data butiran klik mentah daripada kempen yang diberikan.
```



