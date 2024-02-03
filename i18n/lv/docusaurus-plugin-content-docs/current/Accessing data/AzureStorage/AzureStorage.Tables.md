---
title: AzureStorage.Tables
---

# AzureStorage.Tables


## Description

Tiek atgriezta navigācijas tabula, kurā ir ietverti norādītajā Azure krātuves kontā atrastās tabulas.


## Syntax

```powerquery
AzureStorage.Tables(
    account as text,
    optional options as record
) as table
```


## Details

Atgriež navigācijas tabulu, kurā ir rinda katrai tabulai, kas atrasta konta vietrādī URL <code>account</code> no Azure krātuves seifa. Katrā rindā ir saite uz Azure tabulu. Lai norādītu papildu rekvizītus, var tikt nodrošināts neobligāts ieraksta parametrs <code>options</code>. Ierakstā var būt šādi lauki:    <ul><li><code>Timeout</code> : Ilgums, kurš tiek izmantots, lai noteiktu, cik ilgi gaidīt, pirms pamest servera pieprasījumu. Noklusējuma vērtība ir atkarīga no avota.</li></ul>



## Category
Accessing data
