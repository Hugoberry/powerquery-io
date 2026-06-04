---
title: Salesforce.Data
---

# Salesforce.Data


Returnează obiectele din contul Salesforce.


## Syntax

```powerquery
Salesforce.Data(
    optional loginUrl as any,
    optional options as record
) as table
```


## Remarks

Returnează obiectele din contul Salesforce furnizat în acreditări. Contul va fi conectat prin intermediul mediului furnizat `loginUrl`. Dacă nu este furnizat niciun mediu, contul se va conecta la mediul de producție (https://login.salesforce.com). Poate fi furnizat un parametru de înregistrare opțional, `options`, pentru a specifica proprietăți suplimentare. Înregistrarea poate conține următoarele câmpuri:

-   `CreateNavigationProperties` : O valoare logică (true/false) care setează dacă se generează proprietăți de navigare pentru valorile returnate (valoarea implicită este false).
-   `ApiVersion` : Versiunea API-ului Salesforce de utilizat pentru această interogare. Atunci când nu este specificată, se utilizează versiunea API 29.0.
-   `Timeout` : O durată care controlează cât timp se așteaptă înainte de a abandona solicitarea pentru server. Valoarea implicită este specifică fiecărei surse.



## Category
Accessing data
