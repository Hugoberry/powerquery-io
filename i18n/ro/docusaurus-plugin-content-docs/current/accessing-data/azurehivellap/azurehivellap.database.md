---
title: AzureHiveLLAP.Database
---

# AzureHiveLLAP.Database


Importați date din interogarea interactivă HDInsight


## Syntax

```powerquery
AzureHiveLLAP.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

Returnează o listă de tabele din interogarea interactivă HDInsight specificată de `database` pe `server` de interogare interactivă HDInsight. Un număr de port poate fi specificat opțional împreună cu serverul, separat de două puncte. Un parametru opțional `options` poate fi specificat pentru a controla următoarele opțiuni:

-   `ConnectionTimeout`: o durată care controlează cât timp se așteaptă înainte de a abandona o încercare de a realiza o conexiune la server. Valoarea implicită depinde de driver.
-   `CommandTimeout`: o durată care controlează cât timp se permite rularea interogării de partea serverului înainte de a fi anulată. Valoarea implicită depinde de driver.

Parametrul `options` este specificat ca \[opțiune1 = valoare1, opțiune2 = valoare2...\].


