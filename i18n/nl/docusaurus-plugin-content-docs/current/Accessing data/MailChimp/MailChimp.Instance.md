---
title: MailChimp.Instance
---

# MailChimp.Instance


## Description

Hiermee worden onbewerkte antwoordresultaten geretourneerd van een MailChimp-API-eindpunt.


## Syntax

```powerquery
MailChimp.Instance(
    path as text
) as table
```


## Details

Hiermee wordt een aanroep uitgevoerd naar de MailChimp-API en wordt het onbewerkte antwoord geretourneerd.


## Examples

### Example #1 
Hiermee worden onbewerkte gegevens van het MailChimp-API-eindpunt voor rapporten/klikgegevens geretourneerd voor een bepaalde campagne.
```powerquery
MailChimp.Instance(rapporten/{campaign_id}/klikgegevens)
```

Result: 
```powerquery
Onbewerkte klikgegevens van een bepaalde campagne.
```



