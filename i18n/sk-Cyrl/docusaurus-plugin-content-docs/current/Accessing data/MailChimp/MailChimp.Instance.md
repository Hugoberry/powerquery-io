---
title: MailChimp.Instance
---

# MailChimp.Instance


## Description

Vráti výsledky s nespracovanými odpoveďami z koncového bodu rozhrania API služby MailChimp.


## Syntax

```powerquery
MailChimp.Instance(
    path as text
) as table
```


## Details

Uskutoční volanie do rozhrania API služby MailChimp a vráti nespracovanú odpoveď.


## Examples

### Example #1 
Vráti nespracované údaje zistené metódou reports/click-details použitou v koncovom bode rozhrania API služby MailChimp pre určitú kampaň.
```powerquery
MailChimp.Instance("reports/{campaign_id}/click-details")
```

Result: 
```powerquery
Nespracované údaje zistené metódou click details z určitej kampane.
```



