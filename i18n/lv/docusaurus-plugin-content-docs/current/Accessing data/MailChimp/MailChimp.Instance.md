---
title: MailChimp.Instance
---

# MailChimp.Instance


## Description

Atgriež neapstrādātu atbildi ar rezultātiem no MailChimp API galapunkta.


## Syntax

```powerquery
MailChimp.Instance(
    path as text
) as table
```


## Details

Izsauc MailChimp API un atgriež neapstrādātu atbildi.


## Examples

### Example #1 
Attiecīgai kampaņai atgriež neapstrādātus datus no atskaitēm/datiem par klikšķiem no MailChimp API galapunkta.
```powerquery
MailChimp.Instance("atskaites/{campaign_id}/dati par klikšķiem")
```

Result: 
```powerquery
Attiecīgās kampaņas neapstrādāti dati par klikšķiem.
```



