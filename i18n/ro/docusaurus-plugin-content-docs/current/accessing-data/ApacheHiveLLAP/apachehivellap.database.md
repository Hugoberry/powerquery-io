---
title: ApacheHiveLLAP.Database
---

# ApacheHiveLLAP.Database


Importați date dintr-un Hive LLAP


## Syntax

```powerquery
ApacheHiveLLAP.Database(
    server as text,
    database as text,
    thriftTransport as number,
    optional options as record
) as table
```


## Remarks

Returnează o listă de tabele de la Hive LLAP specificate de `database` de pe un `server` Hive LLAP folosind un `protocol` selectat. Poate fi specificat, opțional, un număr de port împreună cu serverul, separat de două puncte. Protocolul de transport Thrift este un tip enumerat cu valorile „Standard” și „HTTP”. Un parametru opțional `options` poate fi specificat pentru a controla următoarele opțiuni:

-   `ConnectionTimeout`: O durată care controlează cât timp se așteaptă până la abandonarea unei încercări de a realiza o conexiune la server. Valoarea implicită depinde de driver.
-   `CommandTimeout`: O durată ce controlează cât timp poate rula interogarea de partea serverului înainte de a fi anulată. Valoarea implicită depinde de driver.

Parametrul `options` este specificat ca \[opțiune1 = valoare1, opțiune2 = valoare2...\].


