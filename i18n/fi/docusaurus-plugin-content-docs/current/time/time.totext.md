---
title: Time.ToText
---

# Time.ToText


Palauttaa aika-arvon tekstiesityksen.


## Syntax

```powerquery
Time.ToText(
    time as time,
    optional options as any,
    optional culture as text
) as text
```


## Remarks

Palauttaa tekstimuotoisen esityksen kohteesta `time`. Lisäominaisuuksien määrittämiseksi voidaan antaa valinnainen `record`\-parametri `options`. `culture` käytetään vain vanhoissa työnkuluissa. Parametri `record` voi sisältää seuraavat kentät:

-   `Format`: `text` -arvo, joka ilmaisee käytettävän muodon. Siirry kohtaan https://go.microsoft.com/fwlink/?linkid=2180104 ja https://go.microsoft.com/fwlink/?linkid=2180105. Jos jätät tämän kentän pois tai annat `tyhjäarvoisen` päivämäärän, se johtaa päivämäärän oletusarvoiseen muotoiluun, jonka määrittää `Culture`.
-   `Culture`: Kun `Format` ei ole tyhjäarvo, `Culture` ohjaa joitakin muodon määrittimiä. Esimerkiksi `"en-US"` `"tt"` on `"AM" tai "PM"`, kun taas `"ar-EG"` `"tt"` on `"ص" tai "م"`. Kun `Format` on `null`, `Culture` määrittää käytettävän oletusmuodon. Kun `Culture` on `tyhjäarvoinen` tai poistettu, `Culture.Current` on käytössä.

Vanhojen työnkulkujen tukemiseksi `options` ja `culture` voivat olla myös tekstiarvoja. Tämä toimii samalla tavalla kuin jos `options = [Format = options, Culture = culture]`.


## Examples

### Example #1
Muunna `#time(01, 30, 25)` `text`\-arvoksi. *Tulos voi vaihdella nykyisen maa-asetuksen mukaan.*
```powerquery
Time.ToText(#time(11, 56, 2))
```

Result: 
```powerquery
"11:56 AM"
```


### Example #2
Muunna käyttämällä mukautettua muotoa ja saksalaista maa-asetusta.
```powerquery
Time.ToText(#time(11, 56, 2), [Format="hh:mm", Culture="de-DE"])
```

Result: 
```powerquery
"11:56"
```


### Example #3
Muunna käyttämällä vakioaikamuotoa.
```powerquery
Time.ToText(#time(11, 56, 2), [Format="T", Culture="de-DE"])
```

Result: 
```powerquery
"11:56:02"
```




## Category
Time
