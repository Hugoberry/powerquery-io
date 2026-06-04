---
title: Web.BrowserContents
---

# Web.BrowserContents


Atgriež norādītā vietrāža URL HTML, kā to aplūko tīmekļa pārlūkprogramma.


## Syntax

```powerquery
Web.BrowserContents(
    url as text,
    optional options as record
) as text
```


## Remarks

Atgriež HTML norādītajam `url`, kā tas ir redzams tīmekļa pārlūkprogrammā. Lai norādītu papildu rekvizītus, var tikt norādīts papildu ieraksta parametrs `options`. Ierakstā var būt ietverti tālāk norādītie lauki:

-   `ApiKeyName`: ja mērķa vietnē ir kāda informācija par API atslēgu, šo parametru var izmantot, lai norādītu vietrādī URL izmantojamā atslēgas parametra nosaukumu (nevis vērtību). Faktiskā atslēgas vērtība tiek norādīta akreditācijas datos.
-   `WaitFor`: norāda nosacījumu, kas jāsagaida pirms HTML lejupielādes, papildus lapas ielādes gaidīšanai (kas notiek vienmēr). Var būt ieraksts, kurā ietverts lauks Timeout un/vai Selector. Ja ir norādīts tikai lauks Timeout, funkcija pirms HTML lejupielādes gaidīs norādīto laika periodu. Ja ir norādīts gan lauks Selector, gan lauks Timeout un Timeout laiks paiet, pirms Selector ir lapā, tiks izraisīta kļūda. Ja ir norādīta vērtība Selector bez Timeout, tiek lietota noklusējuma Timeout vērtība — 30 sekundes.


## Examples

### Example #1
Atgriež HTML vietnei https://microsoft.com.
```powerquery
Web.BrowserContents("https://microsoft.com")
```

Result: 
```powerquery
"<!DOCTYPE html><html xmlns=..."
```


### Example #2
Atgriež HTML vietnei https://microsoft.com pēc tam, kad ir gaidīta CSS atlasītāja parādīšanās.
```powerquery
Web.BrowserContents("https://microsoft.com", [WaitFor = [Selector = "div.ready"]])
```

Result: 
```powerquery
"<!DOCTYPE html><html xmlns=..."
```


### Example #3
Atgriež HTML vietnei https://microsoft.com pēc desmit sekunžu gaidīšanas.
```powerquery
Web.BrowserContents("https://microsoft.com", [WaitFor = [Timeout = #duration(0,0,0,10)]])
```

Result: 
```powerquery
"<!DOCTYPE html><html xmlns=..."
```


### Example #4
Atgriež HTML vietnei https://microsoft.com pēc laika perioda līdz desmit sekundēm, gaidot CSS atlasītāja parādīšanos.
```powerquery
Web.BrowserContents("https://microsoft.com", [WaitFor = [Selector = "div.ready", Timeout = #duration(0,0,0,10)]])
```

Result: 
```powerquery
"<!DOCTYPE html><html xmlns=..."
```




## Category
Accessing data
