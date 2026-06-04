---
title: DateTimeZone.FromText
---

# DateTimeZone.FromText


Luo datetimezone-arvon paikallisista, yleisistä ja mukautetuista datetimezone-muodoista.


## Syntax

```powerquery
DateTimeZone.FromText(
    text as text,
    optional options as any
) as datetimezone
```


## Remarks

Luo `datetimezone`\-arvon tekstimuotoisesta esityksestä `text`. Lisäominaisuuksien määrittämiseksi voidaan antaa valinnainen `record`\-parametri `options`. Parametri `record` voi sisältää seuraavat kentät:

-   `Format`: `text` -arvo, joka ilmaisee käytettävän muodon. Lisätietoja on osoitteissa https://go.microsoft.com/fwlink/?linkid=2180104 ja https://go.microsoft.com/fwlink/?linkid=2180105. Kentän jättäminen pois tai arvon asettaminen arvoon `null` johtaa siihen, että päivämäärä jäsennetään parhaalla mahdollisella tavalla.
-   `Culture`: Kun `Format` ei ole tyhjäarvo, `Culture` ohjaa joitakin muodon määrittimiä. Esimerkiksi `"en-US"` `"MMM"` on `"Jan", "Feb", "Mar", ...` , kun olet `"ru-RU"` `"MMM"` on `"ррр", "ррр", "аар", ...` . Kun `Format` on `null`, `Culture` määrittää käytettävän oletusmuodon. Kun `Culture` on `tyhjäarvoinen` tai poistettu, `Culture.Current` on käytössä.

Vanhojen työnkulkujen tukemiseksi `options` voi olla myös tekstiarvo. Tämä toimii samalla tavalla kuin jos `options = [Format = null, Culture = options]`.


## Examples

### Example #1
Muunna `"2010-12-31T01:30:00-08:00"` `datetimezone`\-arvoksi.
```powerquery
DateTimeZone.FromText("2010-12-31T01:30:00-08:00")
```

Result: 
```powerquery
#datetimezone(2010, 12, 31, 1, 30, 0, -8, 0)
```


### Example #2
Muunna käyttämällä mukautettua muotoa ja saksalaista maa-asetusta.
```powerquery
DateTimeZone.FromText("30 Dez 2010 02:04:50.369730 +02:00", [Format="dd MMM yyyy HH:mm:ss.ffffff zzz", Culture="de-DE"])
```

Result: 
```powerquery
#datetimezone(2010, 12, 30, 2, 4, 50.36973, 2, 0)
```


### Example #3
Muunna ISO 8601:n avulla.
```powerquery
DateTimeZone.FromText("2009-06-15T13:45:30.0000000-07:00", [Format="O", Culture="en-US"])
```

Result: 
```powerquery
#datetimezone(2009, 6, 15, 13, 45, 30, -7, 0)
```




## Category
DateTimeZone
