---
title: AzureStorage.Tables
---

# AzureStorage.Tables


Tiek atgriezta navigācijas tabula, kurā ir ietverti norādītajā Azure krātuves kontā atrastās tabulas.


## Syntax

```powerquery
AzureStorage.Tables(
    account as text,
    optional options as record
) as table
```


## Remarks

Atgriež navigācijas tabulu, kurā ir rinda katrai tabulai, kas atrasta konta vietrādī URL `account` no Azure krātuves seifa. Katrā rindā ir saite uz Azure tabulu. Lai norādītu papildu rekvizītus, var tikt nodrošināts neobligāts ieraksta parametrs `options`. Ierakstā var būt šādi lauki:

-   `Timeout` : Ilgums, kurš tiek izmantots, lai noteiktu, cik ilgi gaidīt, pirms pamest servera pieprasījumu. Noklusējuma vērtība ir atkarīga no avota.



## Category
Accessing data
