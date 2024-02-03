---
title: Web.BrowserContents
---

# Web.BrowserContents


## Description

Atgriež norādītā vietrāža URL HTML, kā to aplūko tīmekļa pārlūkprogramma.


## Syntax

```powerquery
Web.BrowserContents(
    url as text,
    optional options as record
) as text
```


## Details

Atgriež HTML norādītajam <code>url</code>, kā tas ir redzams tīmekļa pārlūkprogrammā. Lai norādītu papildu rekvizītus, var tikt norādīts papildu ieraksta parametrs <code>options</code>. Ierakstā var būt ietverti tālāk norādītie lauki.     <ul>        <li><code>ApiKeyName</code>: ja mērķa vietnē ir kāda informācija par API atslēgu, šo parametru var izmantot, lai norādītu vietrādī URL izmantojamās atslēgas nosaukumu (nevis vērtību). Faktiskā atslēgas vērtība tiek norādīta akreditācijas datos.</li>        <li><code>WaitFor</code>: norāda nosacījumu gaidīt pirms HTML lejupielādes papildus lapas ielādes gaidīšanai (kas notiek vienmēr). Var būt ieraksts, kurā ietverts lauks Timeout un/vai Selector. Ja ir norādīts tikai lauks Timeout, funkcija pirms HTML lejupielādes gaidīs norādīto laika periodu. Ja ir atlasīts gan lauks Selector, gan lauks Timeout un taimauta laiks paiet, pirms atlasītājs ir lapā, tiks parādīta kļūda. Ja ir norādīta atlasītāja vērtība bez taimauta, tiek lietota noklusējuma taimauta vērtība — 30 sekundes.</li>      </ul>    


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
Notiek piekļūšana datiem
