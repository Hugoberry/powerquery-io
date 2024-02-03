---
title: AzureHiveLLAP.Database
---

# AzureHiveLLAP.Database


## Description

Importați date din interogarea interactivă HDInsight


## Syntax

```powerquery
AzureHiveLLAP.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Details

Returnează o listă de tabele din interogarea interactivă HDInsight specificată de <code>database</code> pe <code>server</code> de interogare interactivă HDInsight. Un număr de port poate fi specificat opțional împreună cu serverul, separat de două puncte. Un parametru opțional <code>options</code> poate fi specificat pentru a controla următoarele opțiuni:<ul>        <li><code>ConnectionTimeout</code>: o durată care controlează cât timp se așteaptă înainte de a abandona o încercare de a realiza o conexiune la server. Valoarea implicită depinde de driver.</li>        <li><code>CommandTimeout</code>: o durată care controlează cât timp se permite rularea interogării de partea serverului înainte de a fi anulată. Valoarea implicită depinde de driver.</li></ul>Parametrul <code>options</code> este specificat ca [opțiune1 = valoare1, opțiune2 = valoare2...].


