---
title: WebAction.Request
---

# WebAction.Request


## Description

Tiek izveidota darbība, kuras izpilde atgriež HTTP pieprasījuma izpildes rezultātus kā bināru vērtību.


## Syntax

```powerquery
WebAction.Request(
    method as text,
    url as text,
    optional options as record
) as action
```


## Details

Izveido darbību, kas, to izpildot, atgriezīs pieprasījuma <code>method</code> izpildes attiecībā pret <code>url</code> rezultātus, izmantojot HTTP kā bināru vērtību.   Lai norādītu papildu rekvizītus, <code>options</code>, var norādīt neobligātu ieraksta parametru. Ierakstā var būt šādi lauki:    <ul><li><code>Query</code> : Programmiski pievienojiet vaicājuma parametrus vietrādim URL, neraizējoties par atkāpi.</li><li><code>ApiKeyName</code> : Ja mērķa vietnei ir priekšstats par API atslēgu, šo parametru var izmantot, lai norādītu vietrādī URL izmantojamo atslēgas parametra nosaukumu (nevis vērtību). Faktiskā atslēgas vērtība ir norādīta akreditācijas datos.</li><li><code>Headers</code> : Norādot šo vērtību kā ierakstu, HTTP pieprasījumam tiks nodrošinātas papildu galvenes.</li><li><code>Timeout</code> : Norādot šo vērtību kā ilgumu, tiks mainīts HTTP pieprasījuma taimauts. Noklusējuma vērtība ir 100 sekundes.</li><li><code>ExcludedFromCacheKey</code> : Norādot šo vērtību kā sarakstu, šīs HTTP galvenes atslēgas tiks izslēgtas no datu kešdarbes aprēķina daļas.</li><li><code>IsRetry</code> : Ja norādīsit šo loģisko vērtību kā true (patiess), ienesot datus, tiks ignorētas visas kešatmiņā esošās atbildes.</li><li><code>ManualStatusHandling</code> : Norādot šo vērtību kā sarakstu, netiks pieļauta jebkāda iebūvētā apstrāde tiem HTTP pieprasījumiem, kuru atbilde ir viens no šiem statusa kodiem.</li><li><code>RelativePath</code> : Norādot šo vērtību kā tekstu, pirms pieprasījuma veikšanas tas tiek pievienots pamata vietrādim URL.</li><li><code>Content</code> : Norādot šo vērtību, tās saturs kļūs par HTTP pieprasījuma pamattekstu.</li></ul>    <br />    Ņemiet vērā, ka šī funkcija ir atspējota lielākajā daļā kontekstu. Tā vietā apsveriet izmantot Web.Contents vai Web.Headers.    


## Examples

### Example #1 
Veiciet GET pieprasījumu attiecībā uz Bing.
```powerquery
WebAction.Request(WebMethod.Get, "https://bing.com")
```

Result: 
```powerquery
Action
```




## Category
Action
