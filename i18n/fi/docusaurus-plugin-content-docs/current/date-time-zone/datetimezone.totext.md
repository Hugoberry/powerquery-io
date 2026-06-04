---
title: DateTimeZone.ToText
---

# DateTimeZone.ToText


Palauttaa datetimezone-arvon tekstiesityksen.


## Syntax

```powerquery
DateTimeZone.ToText(
    dateTimeZone as datetimezone,
    optional options as any,
    optional culture as text
) as text
```


## Remarks

Palauttaa tekstimuotoisen esityksen kohteesta `dateTimeZone`. Lisäominaisuuksien määrittämiseksi voidaan antaa valinnainen `record`\-parametri `options`. `culture` käytetään vain vanhoissa työnkuluissa. Parametri `record` voi sisältää seuraavat kentät:

-   `Format`: `text` -arvo, joka ilmaisee käytettävän muodon. Siirry kohtaan https://go.microsoft.com/fwlink/?linkid=2180104 ja https://go.microsoft.com/fwlink/?linkid=2180105. Jos jätät tämän kentän pois tai annat `tyhjäarvoisen` päivämäärän, se johtaa päivämäärän oletusarvoiseen muotoiluun, jonka määrittää `Culture`.
-   `Culture`: Kun `Format` ei ole tyhjäarvo, `Culture` ohjaa joitakin muodon määrittimiä. Esimerkiksi `"en-US"` `"MMM"` on `"Jan", "Feb", "Mar", ...` , kun olet `"ru-RU"` `"MMM"` on `"ррр", "ррр", "аар", ...` . Kun `Format` on `null`, `Culture` määrittää käytettävän oletusmuodon. Kun `Culture` on `tyhjäarvoinen` tai poistettu, `Culture.Current` on käytössä.

Vanhojen työnkulkujen tukemiseksi `options` ja `culture` voivat olla myös tekstiarvoja. Tämä toimii samalla tavalla kuin jos `options = [Format = options, Culture = culture]`.


## Examples

### Example #1
Muunna `#datetimezone(2010, 12, 31, 01, 30, 25, 2, 0)` `text`\-arvoksi. *Tulos voi vaihdella nykyisen maa-asetuksen mukaan.*
```powerquery
DateTimeZone.ToText(#datetimezone(2010, 12, 31, 01, 30, 25, 2, 0))
```

Result: 
```powerquery
"12/31/2010 1:30:25 AM +02:00"
```


### Example #2
Muunna käyttämällä mukautettua muotoa ja saksalaista maa-asetusta.
```powerquery
DateTimeZone.ToText(#datetimezone(2010, 12, 30, 2, 4, 50.36973, -8,0), [Format="dd MMM yyyy HH:mm:ss.ffffff zzz", Culture="de-DE"])
```

Result: 
```powerquery
"30 Dez 2010 02:04:50.369730 -08:00"
```


### Example #3
Muunna ISO 8601 -mallin avulla.
```powerquery
DateTimeZone.ToText(#datetimezone(2000, 2, 8, 3, 45, 12, 2, 0),[Format="O", Culture="en-US"])
```

Result: 
```powerquery
"2000-02-08T03:45:12.0000000+02:00"
```




## Category
DateTimeZone
