---
title: MailChimp.Instance
---

# MailChimp.Instance


## Description

Gibt unverarbeitete Antwortergebnisse von einem MailChimp-API-Endpunkt zurück.


## Syntax

```powerquery
MailChimp.Instance(
    path as text
) as table
```


## Details

Sendet einen Aufruf an die MailChimp-API und gibt die unverarbeitete Antwort zurück.


## Examples

### Example #1 
Gibt unverarbeitete Daten für eine vorgegebene Kampagne vom Endpunkt &#34;reports/click-details&#34; der MailChimp-API zurück.
```powerquery
MailChimp.Instance("reports/{campaign_id}/click-details")
```

Result: 
```powerquery
Unverarbeitete Detaildaten zu Klicks für die vorgegebene Kampagne.
```



