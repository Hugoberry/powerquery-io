---
title: QuickBooksOnline.Tables
---

# QuickBooksOnline.Tables


## Description

Importér data fra QuickBooks Online.


## Syntax

```powerquery
QuickBooksOnline.Tables(
    optional options as record
) as table
```


## Details

        Returnerer en tabel med de tilgængelige tabeller i QuickBooks Online. Der kan angives en valgfri postparameter, <code>options</code>, for at styre følgende indstillinger:      <ul>        <li><code>ConnectionTimeout</code>: En varighed, der styrer, hvor længe der skal ventes, før forsøget på at oprette forbindelse til serveren opgives.</li>        <li><code>CommandTimeout</code>: En varighed, der bestemmer, hvor længe forespørgslen får lov til at køre på serversiden, før den annulleres.</li>        </ul>    Postparameteren angives som [parameter1 = værdi1, parameter2 = værdi2...].    


