---
title: Date.ToText
---

# Date.ToText


Palauttaa päivämääräarvon tekstiesityksen.


## Syntax

```powerquery
Date.ToText(
    date as date,
    optional options as any,
    optional culture as text
) as text
```


## Remarks

Palauttaa tekstimuotoisen esityksen kohteesta `date`. Lisäominaisuuksien määrittämiseksi voidaan antaa valinnainen `record`\-parametri `options`. `culture` käytetään vain vanhoissa työnkuluissa. Parametri `record` voi sisältää seuraavat kentät:

-   `Format`: `text` -arvo, joka ilmaisee käytettävän muodon. Siirry kohtaan https://go.microsoft.com/fwlink/?linkid=2180104 ja https://go.microsoft.com/fwlink/?linkid=2180105. Jos jätät tämän kentän pois tai annat `tyhjäarvoisen` päivämäärän, se johtaa päivämäärän oletusarvoiseen muotoiluun, jonka määrittää `Culture`.
-   `Culture`: Kun `Format` ei ole tyhjäarvo, `Culture` ohjaa joitakin muodon määrittimiä. Esimerkiksi `"en-US"` `"MMM"` on `"Jan", "Feb", "Mar", ...` , kun olet `"ru-RU"` `"MMM"` on `"ррр", "ррр", "аар", ...` . Kun `Format` on `null`, `Culture` määrittää käytettävän oletusmuodon. Kun `Culture` on `tyhjäarvoinen` tai poistettu, `Culture.Current` on käytössä.

Vanhojen työnkulkujen tukemiseksi `options` ja `culture` voivat olla myös tekstiarvoja. Tämä toimii samalla tavalla kuin jos `options = [Format = options, Culture = culture]`.


## Examples

### Example #1
Muunna `#date(2010, 12, 31)` `text`\-arvoksi. *Tulos voi vaihdella nykyisen maa-asetuksen mukaan.*
```powerquery
Date.ToText(#date(2010, 12, 31))
```

Result: 
```powerquery
"12/31/2010"
```


### Example #2
Muunna käyttämällä mukautettua muotoa ja saksalaista maa-asetusta.
```powerquery
Date.ToText(#date(2010, 12, 31), [Format="dd MMM yyyy", Culture="de-DE"])
```

Result: 
```powerquery
"31 Dez 2010"
```


### Example #3
Etsi Hijri-kalenterin vuosi, joka vastaa Gregoriaanisen kalenterin päivää 1. tammikuuta 2000.
```powerquery
Date.ToText(#date(2000, 1, 1), [Format="yyyy", Culture="ar-SA"])
```

Result: 
```powerquery
"1420"
```




## Category
Date
