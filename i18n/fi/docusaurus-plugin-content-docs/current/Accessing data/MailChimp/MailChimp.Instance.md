---
title: MailChimp.Instance
---

# MailChimp.Instance


## Description

Palauttaa raakavastaustulokset MailChimpin ohjelmointirajapinnan päätepisteestä.


## Syntax

```powerquery
MailChimp.Instance(
    path as text
) as table
```


## Details

Tekee kutsun MailChimpin ohjelmointirajapinnalle ja palauttaa raakavastauksen.


## Examples

### Example #1 
Palauttaa raakadataa määritetyn kampanjan raporteista/napsautustiedoista MailChimpin ohjelmointirajapinnan päätepisteestä.
```powerquery
MailChimp.Instance("raportit/{campaign_id}/napsautustiedot")
```

Result: 
```powerquery
Raakadataa tietyn kampanjan napsautustiedoista.
```



