---
title: Salesforce.Data
---

# Salesforce.Data


## Description

Vraća objekte iz Salesforce naloga.


## Syntax

```powerquery
Salesforce.Data(
    optional loginUrl as any,
    optional options as record
) as table
```


## Details

Vraća objekte u Salesforce nalog obezbeđen u akreditivima. Nalog će biti povezan putem obezbeđenog okruženja <code>loginUrl</code>. Ako se ne obezbedi nijedno okruženje, nalog će se povezati sa proizvodnjom (https://login.salesforce.com). Opcionalni parametar zapisa, <code>options</code>, može da se obezbedi da bi se navela dodatna svojstva. Zapis može da sadrži sledeća polja:    <ul><li><code>CreateNavigationProperties</code> : Logička vrednost (true/false) koja određuje da li će se generisati svojstva navigacije za vraćene vrednosti (podrazumevana vrednost je true).</li><li><code>ApiVersion</code> : Verzija Salesforce API-ja koja se koristi za ovaj upit. Kada verzija API-ja nije navedena, koristi se 29.0.</li><li><code>Timeout</code> : Vremenski period pomoću kojeg se određuje koliko dugo treba čekati pre odustajanja od zahteva upućenog serveru. Podrazumevana vrednost zavisi od izvora.</li></ul>    



## Category
Accessing data
