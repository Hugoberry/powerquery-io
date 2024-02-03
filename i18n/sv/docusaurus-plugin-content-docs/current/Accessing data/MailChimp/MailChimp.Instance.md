---
title: MailChimp.Instance
---

# MailChimp.Instance


## Description

Returnerar rå-resultat från en MailChimp API-slutpunkt.


## Syntax

```powerquery
MailChimp.Instance(
    path as text
) as table
```


## Details

Anropar MailChimp API:n och returnerar råsvaret.


## Examples

### Example #1 
Returnerar rådata från MailChimps API-slutpunkt rapporter/klickinformation för en given kampanj.
```powerquery
MailChimp.Instance("rapporter/{campaign_id}/klickinformation")
```

Result: 
```powerquery
Rå-klickinformationsdata från den givna kampanjen.
```



