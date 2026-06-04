---
title: Date.FromText
---

# Date.FromText


Luo päivämäärän paikallisista, yleisistä ja mukautetuista päivämäärämuodoista.


## Syntax

```powerquery
Date.FromText(
    text as text,
    optional options as any
) as date
```


## Remarks

Luo vahvaa tyyppiä käyttävän arvon tekstiesityksestä.

-   `text`: Päivämääräksi muutettava tekstiarvo.
-   `options`: Valinnainen tietueparametri, `record` voidaan antaa lisäominaisuuksien määrittämistä varten. `record` voi sisältää seuraavat kentät:
    -   `Format`: `text` -arvo, joka ilmaisee käytettävän muodon. Lisätietoja on osoitteessa https://go.microsoft.com/fwlink/?linkid=2180104 ja https://go.microsoft.com/fwlink/?linkid=2180105. Tämän kentän jättäminen pois tai `null`\-arvon antaminen johtaa päivämäärän jäsentämiseen parhaalla mahdollisella tavalla.
    -   `Culture`: Kun `Format` ei ole tyhjäarvo, `Culture` ohjaa joitakin muotoilumääritintä. Esimerkiksi `"en-US"` `"MMM"` on `"Jan", "Feb", "Mar", ...` , kun olet `"ru-RU"` `"MMM"` on `"ррр", "ррр", "аар", ...` . Kun `Format` on `null`, `Culture` määrittää käytettävän oletusmuodon. Kun `Culture` on `null` tai jätetty pois, käytetään `Culture.Current`.

Vanhojen työnkulkujen tukemiseksi `options` voi olla myös tekstiarvo. Tämä toimii samalla tavalla kuin jos `options = [Format = null, Culture = options]`.


## Examples

### Example #1
Muunna `"2010-12-31"` `date`\-arvoksi.
```powerquery
Date.FromText("2010-12-31")
```

Result: 
```powerquery
#date(2010, 12, 31)
```


### Example #2
Muunna käyttämällä mukautettua muotoa ja saksalaista maa-asetusta.
```powerquery
Date.FromText("30 Dez 2010", [Format="dd MMM yyyy", Culture="de-DE"])
```

Result: 
```powerquery
#date(2010, 12, 30)
```


### Example #3
Etsi gregoriaanisen kalenterin päivämäärä, joka vastaa vuoden 1400 alkua Islamilaisessa kalenterissa.
```powerquery
Date.FromText("1400", [Format="yyyy", Culture="ar-SA"])
```

Result: 
```powerquery
#date(1979, 11, 20)
```


### Example #4
Muunna italian tekstin päivämäärät lyhennetyillä kuukausilla Julkaistu päivämäärä -sarakkeessa päivämääräarvoiksi.
```powerquery
let
    Source = #table(type table [Account Code = text, Posted Date = text, Sales = number],
    {
        {"US-2004", "20 gen. 2023", 580},
        {"CA-8843", "18 lug. 2024", 280},
        {"PA-1274", "12 gen. 2023", 90},
        {"PA-4323", "14 apr. 2023", 187},
        {"US-1200", "14 dic. 2023", 350},
        {"PTY-507", "4 giu. 2024", 110}
    }),
    #"Converted Date" = Table.TransformColumns(
        Source,
        {"Posted Date", each Date.FromText(_, [Culture = "it-IT"]), type date}
    )
in
    #"Converted Date"
```

Result: 
```powerquery
#table(type table [Account Code = text, Posted Date = date, Sales = number],
{
    {"US-2004", #date(2023, 1, 20), 580},
    {"CA-8843", #date(2024, 7, 18), 280},
    {"PA-1274", #date(2023, 1, 12), 90},
    {"PA-4323", #date(2023, 4, 14), 187},
    {"US-1200", #date(2023, 12, 14), 350},
    {"PTY-507", #date(2024, 6, 4), 110}
})
```




## Category
Date
