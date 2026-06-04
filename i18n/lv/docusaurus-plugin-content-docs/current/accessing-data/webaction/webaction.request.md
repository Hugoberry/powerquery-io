---
title: WebAction.Request
---

# WebAction.Request


Tiek izveidota darbība, kuras izpilde atgriež HTTP pieprasījuma izpildes rezultātus kā bināru vērtību.


## Syntax

```powerquery
WebAction.Request(
    method as text,
    url as text,
    optional options as record
) as action
```


## Remarks

Izveido darbību, kas, to izpildot, atgriezīs pieprasījuma `method` izpildes attiecībā pret `url` rezultātus, izmantojot HTTP kā bināru vērtību. Lai norādītu papildu rekvizītus, `options`, var norādīt neobligātu ieraksta parametru. Ieraksts var saturēt tālāk norādītos laukus:

-   `Query` : Programmiski pievienojiet vaicājuma parametrus vietrādim URL, neraizējoties par atkāpi.
-   `ApiKeyName` : Ja mērķa vietnei ir priekšstats par API atslēgu, šo parametru var izmantot, lai norādītu vietrādī URL izmantojamo atslēgas parametra nosaukumu (nevis vērtību). Faktiskā atslēgas vērtība ir norādīta akreditācijas datos.
-   `Headers` : Norādot šo vērtību kā ierakstu, HTTP pieprasījumam tiks nodrošinātas papildu galvenes.
-   `Timeout` : Norādot šo vērtību kā ilgumu, tiks mainīts HTTP pieprasījuma taimauts. Noklusējuma vērtība ir 100 sekundes.
-   `ExcludedFromCacheKey` : Norādot šo vērtību kā sarakstu, šīs HTTP galvenes atslēgas tiks izslēgtas no datu kešdarbes aprēķina daļas.
-   `IsRetry` : Ja norādīsit šo loģisko vērtību kā true (patiess), ienesot datus, tiks ignorētas visas kešatmiņā esošās atbildes.
-   `ManualStatusHandling` : Norādot šo vērtību kā sarakstu, netiks pieļauta jebkāda iebūvētā apstrāde tiem HTTP pieprasījumiem, kuru atbilde ir viens no šiem statusa kodiem.
-   `RelativePath` : Norādot šo vērtību kā tekstu, pirms pieprasījuma veikšanas tas tiek pievienots pamata vietrādim URL.
-   `Content` : Norādot šo vērtību, tās saturs kļūs par HTTP pieprasījuma pamattekstu.

Ņemiet vērā, ka šī funkcija ir atspējota lielākajā daļā kontekstu. Tā vietā apsveriet izmantot Web.Contents vai Web.Headers.


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
