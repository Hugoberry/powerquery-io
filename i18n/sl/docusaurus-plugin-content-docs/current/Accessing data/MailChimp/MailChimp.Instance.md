---
title: MailChimp.Instance
---

# MailChimp.Instance


## Description

Vrne odgovor z neobdelanimi rezultati iz končne točke vmesnika storitve MailChimp.


## Syntax

```powerquery
MailChimp.Instance(
    path as text
) as table
```


## Details

Pokliče vmesnik API storitve MailChimp API in vrne neobdelan odgovor.


## Examples

### Example #1 
Vrne neobdelane podatke iz poročil/podrobnosti o klikih iz končne točke vmesnika API storitve MailChimp za navedeno akcijo.
```powerquery
MailChimp.Instance("poročila/{campaign_id}/podrobnosti o klikih")
```

Result: 
```powerquery
Neobdelani podatki s podrobnostmi o klikih iz navedene akcije.
```



