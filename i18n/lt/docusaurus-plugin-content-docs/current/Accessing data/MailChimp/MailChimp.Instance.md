---
title: MailChimp.Instance
---

# MailChimp.Instance


## Description

Pateikiami neapdoroti atsako rezultatai iš „MailChimp“ API galinio punkto.


## Syntax

```powerquery
MailChimp.Instance(
    path as text
) as table
```


## Details

Kreipiamasi į „MailChimp“ API ir pateikiamas neapdorotas atsakas.


## Examples

### Example #1 
Pateikiami neapdoroti duomenys iš nurodytos kampanijos kelio reports/click-details „MailChimp“ API galinio punkto.
```powerquery
MailChimp.Instance("reports/{campaign_id}/click-details")
```

Result: 
```powerquery
Neapdoroti spustelėjimų duomenys iš nurodytos kampanijos.
```



