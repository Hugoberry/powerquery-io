---
title: Salesforce.Reports
---

# Salesforce.Reports


## Description

Returnează rapoartele din contul Salesforce.


## Syntax

```powerquery
Salesforce.Reports(
    optional loginUrl as text,
    optional options as record
) as table
```


## Details

Returnează rapoartele din contul Salesforce furnizat în acreditări. Contul va fi conectat prin intermediul mediului furnizat <code>loginUrl</code>. Dacă nu este furnizat niciun mediu, contul se va conecta la mediul de producție (https://login.salesforce.com). Poate fi furnizat un parametru de înregistrare opțional, <code>options</code>, pentru a specifica proprietăți suplimentare. Înregistrarea poate conține următoarele câmpuri:    <ul><li><code>ApiVersion</code> : Versiunea API-ului Salesforce de utilizat pentru această interogare. Atunci c&#226;nd nu este specificată, se utilizează versiunea API 29.0.</li><li><code>Timeout</code> : O durată care controlează c&#226;t timp se așteaptă &#238;nainte de a abandona solicitarea pentru server. Valoarea implicită este specifică fiecărei surse.</li></ul>    



## Category
Accessing data
