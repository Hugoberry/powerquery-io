---
title: MailChimp.Instance
---

# MailChimp.Instance


## Description

MailChimp API соңғы нүктесінен өңделмеген жауап нәтижелерін қайтарады.


## Syntax

```powerquery
MailChimp.Instance(
    path as text
) as table
```


## Details

MailChimp API қызметін шақырады және өңделмеген жауапты қайтарады.


## Examples

### Example #1 
Берілген науқан үшін есептер/басу-мәліметтер MailChimp API соңғы нүктесінен өңделмеген деректерді қайтарады.
```powerquery
MailChimp.Instance("есептер/{campaign_id}/басу-мәліметтер")
```

Result: 
```powerquery
Берілген науқанның өңделмеген басу мәліметтер деректері.
```



