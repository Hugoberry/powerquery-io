---
title: MailChimp.Instance
---

# MailChimp.Instance


## Description

Nyers válaszeredményeket ad vissza egy MailChimp API-végpontból.


## Syntax

```powerquery
MailChimp.Instance(
    path as text
) as table
```


## Details

Hívást küld a MailChimp API-ra, és a nyers választ adja vissza.


## Examples

### Example #1 
Nyers adatokat ad vissza egy adott kampány jelentésekkel/kattintási információkkal kapcsolatos MailChimp API-végpontjából.
```powerquery
MailChimp.Instance("reports/{campaign_id}/click-details")
```

Result: 
```powerquery
Nyers kattintási adatok az adott kampányból.
```



