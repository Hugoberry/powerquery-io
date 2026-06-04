---
title: MailChimp.Instance
---

# MailChimp.Instance


Menghasilkan hasil respons mentah dari MailChimp API.


## Syntax

```powerquery
MailChimp.Instance(
    path as text
) as table
```


## Remarks

Melakukan panggilan ke API MailChimp dan menghasilkan respons mentah.


## Examples

### Example #1
Menghasilkan data mentah dari titik akhir API MailChimp reports/click-details untuk kampanye yang diberikan.
```powerquery
MailChimp.Instance("reports/{campaign_id}/click-details")
```

Result: 
```powerquery
Data detail klik mentah dari kampanye yang diberikan.
```



