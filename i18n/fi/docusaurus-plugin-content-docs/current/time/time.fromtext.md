---
title: Time.FromText
---

# Time.FromText


Luo aika paikallisista, yleisistä ja mukautetuista aikamuodoista.


## Syntax

```powerquery
Time.FromText(
    text as text,
    optional options as any
) as time
```


## Remarks

Luo `time`\-arvon tekstimuotoisesta esityksestä `text`. Lisäominaisuuksien määrittämiseksi voidaan antaa valinnainen `record`\-parametri `options`. Parametri `record` voi sisältää seuraavat kentät:

-   `Format`: `text` -arvo, joka ilmaisee käytettävän muodon. Siirry osoitteeseen https://go.microsoft.com/fwlink/?linkid=2180104 ja https://go.microsoft.com/fwlink/?linkid=2180105. Jos jätät tämän kentän pois tai annat `tyhjäarvoisen` päivämäärän, se johtaa päivämäärän parhaaseen mahdolliseen muotoiluun.
-   `Culture`: Kun `Format` ei ole tyhjäarvo, `Culture` ohjaa joitakin muodon määrittimiä. Esimerkiksi `"en-US"` `"tt"` on `"AM" tai "PM"`, kun taas `"ar-EG"` `"tt"` on `"ص" tai "م"`. Kun `Format` on `null`, `Culture` määrittää käytettävän oletusmuodon. Kun `Culture` on `tyhjäarvoinen` tai poistettu, `Culture.Current` on käytössä.

Vanhojen työnkulkujen tukemiseksi `options` voi olla myös tekstiarvo. Tämä toimii samalla tavalla kuin jos `options = [Format = null, Culture = options]`.


## Examples

### Example #1
Muunna `"10:12:31am"` Time-arvoksi.
```powerquery
Time.FromText("10:12:31am")
```

Result: 
```powerquery
#time(10, 12, 31)
```


### Example #2
Muunna `"1012"` Time-arvoksi.
```powerquery
Time.FromText("1012")
```

Result: 
```powerquery
#time(10, 12, 00)
```


### Example #3
Muunna `"10"` Time-arvoksi.
```powerquery
Time.FromText("10")
```

Result: 
```powerquery
#time(10, 00, 00)
```




## Category
Time
