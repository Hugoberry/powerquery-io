---
title: Web.Contents
---

# Web.Contents


Tiek atgriezts saturs, kas lejupielādēts no vietrāža URL kā binārs.


## Syntax

```powerquery
Web.Contents(
    url as text,
    optional options as record
) as binary
```


## Remarks

Tiek atgriezts saturs, kas lejupielādēts no `url` binārā formātā. Lai norādītu papildu rekvizītus, var tikt norādīts papildu ieraksta parametrs `options`. Ierakstā var būt ietverti tālāk norādītie lauki:

-   `Query` : Programmiski pievienojiet vaicājuma parametrus vietrādim URL, neraizējoties par atkāpi.
-   `ApiKeyName` : Ja mērķa vietnei ir priekšstats par API atslēgu, šo parametru var izmantot, lai norādītu vietrādī URL izmantojamo atslēgas parametra nosaukumu (nevis vērtību). Faktiskā atslēgas vērtība ir norādīta akreditācijas datos.
-   `Headers` : Norādot šo vērtību kā ierakstu, HTTP pieprasījumam tiks nodrošinātas papildu galvenes.
-   `Timeout` : Norādot šo vērtību kā ilgumu, tiks mainīts HTTP pieprasījuma taimauts. Noklusējuma vērtība ir 100 sekundes.
-   `ExcludedFromCacheKey` : Norādot šo vērtību kā sarakstu, šīs HTTP galvenes atslēgas tiks izslēgtas no datu kešdarbes aprēķina daļas.
-   `IsRetry` : Ja norādīsit šo loģisko vērtību kā true (patiess), ienesot datus, tiks ignorētas visas kešatmiņā esošās atbildes.
-   `ManualStatusHandling` : Norādot šo vērtību kā sarakstu, netiks pieļauta jebkāda iebūvētā apstrāde tiem HTTP pieprasījumiem, kuru atbilde ir viens no šiem statusa kodiem.
-   `RelativePath` : Norādot šo vērtību kā tekstu, pirms pieprasījuma veikšanas tas tiek pievienots pamata vietrādim URL.
-   `Content` : Norādot šo vērtību, tiek mainīts tīmekļa pieprasījums no GET uz POST, opcijas vērtību izmantojot kā POST saturu.

pieprasījums tiek veikts kā GET (ja nav norādīts saturs) vai POST (ja ir saturs). POST pieprasījumus var veikt tikai anonīmi.  
  
HTTP atbildes galvenes ir pieejamas binārā rezultāta metadatos. Ārpus pielāgota datu savienotāja konteksta ir pieejama tikai atbildes galveņu apakškopa (drošības apsvērumu dēļ).


## Examples

### Example #1
Izgūstiet `"https://bing.com/search?q=Power+Query"` saturu, izmantojot opcijas RelativePath Query. Šīs opcijas var izmantot, lai dinamiski izpildītu statiska bāzes URL vaicājumu.
```powerquery
let
    searchText = "Power Query"
in
    Web.Contents(
        "https://www.bing.com",
        [
            RelativePath = "search",
            Query = [q = searchText]
        ]
    )
```

Result: 
```powerquery
binary
```


### Example #2
Izpildiet POST attiecībā uz URL, nododot bināru JSON vērtumu un parsējot atbildi kā JSON.
```powerquery
let
    url = ...,
    headers = [#"Content-Type" = "application/json"],
    postData = Json.FromValue([x = 235.7, y = 41.53]),
    response = Web.Contents(
        url,
        [
            Headers = headers,
            Content = postData
        ]
    ),
    jsonResponse = Json.Document(response)
in
    jsonResponse
```

Result: 
```powerquery
table
```


### Example #3
Izveidojiet savienojumu ar drošu vietrādi URL, kas kā vaicājuma virknes daļu akceptē autentifikācijas atslēgu. Tā vietā, lai stingri kodētu slepeno atslēgu M (kas varētu radīt drošības risku), atslēgu var droši norādīt, norādot tās nosaukumu (nevis tās vērtību) M, izvēloties tīmekļa API autentifikāciju un ievadot atslēgas vērtību kā tīmekļa API akreditācijas datu daļu. Šādi izmantojot, tiks ģenerēts pieprasījums `"https://contoso.com/api/customers/get?api_key=******"`.
```powerquery
Web.Contents("https://contoso.com/api/customers/get", [ApiKeyName="api_key"])
```

Result: 
```powerquery
binary
```




## Category
Accessing data
