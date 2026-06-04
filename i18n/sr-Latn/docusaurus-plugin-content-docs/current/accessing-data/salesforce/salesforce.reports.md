---
title: Salesforce.Reports
---

# Salesforce.Reports


Vraća izveštaje iz Salesforce naloga.


## Syntax

```powerquery
Salesforce.Reports(
    optional loginUrl as text,
    optional options as record
) as table
```


## Remarks

Vraća izveštaje u Salesforce nalogu obezbeđenom u akreditivima. Nalog će biti povezan putem obezbeđenog okruženja `loginUrl`. Ako se ne obezbedi nijedno okruženje, nalog će se povezati sa proizvodnjom (https://login.salesforce.com). Opcionalni parametar zapisa, `options`, može da se obezbedi da bi se navela dodatna svojstva. Zapis može da sadrži sledeća polja:

-   `ApiVersion` : Verzija Salesforce API-ja koja se koristi za ovaj upit. Kada verzija API-ja nije navedena, koristi se 29.0.
-   `Timeout` : Vremenski period pomoću kojeg se određuje koliko dugo treba čekati pre odustajanja od zahteva upućenog serveru. Podrazumevana vrednost zavisi od izvora.



## Category
Accessing data
