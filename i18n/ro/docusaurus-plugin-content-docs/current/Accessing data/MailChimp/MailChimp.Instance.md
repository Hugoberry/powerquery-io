---
title: MailChimp.Instance
---

# MailChimp.Instance


## Description

Returnează rezultatele brute de răspuns de la un punct final din API-ul MailChimp.


## Syntax

```powerquery
MailChimp.Instance(
    path as text
) as table
```


## Details

Face un apel la API-ul MailChimp și returnează răspunsul brut.


## Examples

### Example #1 
Returnează datele brute de la punctul final reports/click-details din API-ul MailChimp pentru o campanie dată.
```powerquery
MailChimp.Instance("reports/{campaign_id}/click-details")
```

Result: 
```powerquery
Date brute cu detalii despre clicuri din campania dată.
```



