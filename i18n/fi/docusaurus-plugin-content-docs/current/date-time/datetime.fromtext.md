---
title: DateTime.FromText
---

# DateTime.FromText


Luo datetimezone-arvon paikallisista ja yleisistä datetime-muodoista.


## Syntax

```powerquery
DateTime.FromText(
    text as text,
    optional options as any
) as datetime
```


## Remarks

Luo `datetime`\-arvon tekstimuotoisesta esityksestä `text`. Lisäominaisuuksien määrittämiseksi voidaan antaa valinnainen `record`\-parametri `options`. Parametri `record` voi sisältää seuraavat kentät:

-   `Format`: `text` -arvo, joka ilmaisee käytettävän muodon. Lisätietoja on osoitteissa https://go.microsoft.com/fwlink/?linkid=2180104 ja https://go.microsoft.com/fwlink/?linkid=2180105. Kentän jättäminen pois tai arvon asettaminen arvoon `null` johtaa siihen, että päivämäärä jäsennetään parhaalla mahdollisella tavalla.
-   `Culture`: Kun `Format` ei ole tyhjäarvo, `Culture` ohjaa joitakin muodon määrittimiä. Esimerkiksi `"en-US"` `"MMM"` on `"Jan", "Feb", "Mar", ...` , kun olet `"ru-RU"` `"MMM"` on `"ррр", "ррр", "аар", ...` . Kun `Format` on `null`, `Culture` määrittää käytettävän oletusmuodon. Kun `Culture` on `tyhjäarvoinen` tai poistettu, `Culture.Current` on käytössä.

Vanhojen työnkulkujen tukemiseksi `options` voi olla myös tekstiarvo. Tämä toimii samalla tavalla kuin jos `options = [Format = null, Culture = options]`.


## Examples

### Example #1
Muunna `"2010-12-31T01:30:00"` datetime-arvoksi.
```powerquery
DateTime.FromText("2010-12-31T01:30:25")
```

Result: 
```powerquery
#datetime(2010, 12, 31, 1, 30, 25)
```


### Example #2
Muunna `"2010-12-31T01:30:00.121212"` datetime-arvoksi.
```powerquery
DateTime.FromText("30 Dez 2010 02:04:50.369730", [Format="dd MMM yyyy HH:mm:ss.ffffff", Culture="de-DE"])
```

Result: 
```powerquery
#datetime(2010, 12, 30, 2, 4, 50.36973)
```


### Example #3
Muunna `"2010-12-31T01:30:00"` datetime-arvoksi.
```powerquery
DateTime.FromText("2000-02-08T03:45:12Z", [Format="yyyy-MM-dd'T'HH:mm:ss'Z'", Culture="en-US"])
```

Result: 
```powerquery
#datetime(2000, 2, 8, 3, 45, 12)
```


### Example #4
Muunna `"20101231T013000"` datetime-arvoksi.
```powerquery
DateTime.FromText("20101231T013000", [Format="yyyyMMdd'T'HHmmss", Culture="en-US"])
```

Result: 
```powerquery
#datetime(2010, 12, 31, 1, 30, 0)
```




## Category
DateTime
