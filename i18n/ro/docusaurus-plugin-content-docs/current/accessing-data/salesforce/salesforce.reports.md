---
title: Salesforce.Reports
---

# Salesforce.Reports


Returnează rapoartele din contul Salesforce.


## Syntax

```powerquery
Salesforce.Reports(
    optional loginUrl as text,
    optional options as record
) as table
```


## Remarks

Returnează rapoartele din contul Salesforce furnizat în acreditări. Contul va fi conectat prin intermediul mediului furnizat `loginUrl`. Dacă nu este furnizat niciun mediu, contul se va conecta la mediul de producție (https://login.salesforce.com). Poate fi furnizat un parametru de înregistrare opțional, `options`, pentru a specifica proprietăți suplimentare. Înregistrarea poate conține următoarele câmpuri:

-   `ApiVersion` : Versiunea API-ului Salesforce de utilizat pentru această interogare. Atunci când nu este specificată, se utilizează versiunea API 29.0.
-   `Timeout` : O durată care controlează cât timp se așteaptă înainte de a abandona solicitarea pentru server. Valoarea implicită este specifică fiecărei surse.



## Category
Accessing data
