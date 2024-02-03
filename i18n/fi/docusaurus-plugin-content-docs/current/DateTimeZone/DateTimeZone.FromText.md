---
title: DateTimeZone.FromText
---

# DateTimeZone.FromText


## Description

Luo datetimezone-arvon paikallisista, yleisistä ja mukautetuista datetimezone-muodoista.


## Syntax

```powerquery
DateTimeZone.FromText(
    text as text,
    optional options as any
) as datetimezone
```


## Details

Luo <code>datetimezone</code>-arvon tekstimuotoisesta esityksestä <code>text</code>. Lisäominaisuuksien määrittämiseen voidaan antaa valinnainen <code>record</code>-parametri <code>options</code>. Parametri <code>record</code> voi sisältää seuraavat kentät:<ul>   <li><code>Format</code>: <code>text</code>-arvo, joka ilmaisee käytettävän muodon. Siirry osoitteeseen https://go.microsoft.com/fwlink/?linkid=2180104 ja https://go.microsoft.com/fwlink/?linkid=2180105. Jos jätät tämän kentän pois tai annat <code>tyhjäarvoisen</code> päivämäärän, se johtaa päivämäärän parhaaseen mahdolliseen muotoiluun.</li>   <li><code>Culture</code>: Kun <code>Format</code> ei ole tyhjäarvo, <code>Culture</code> ohjaa joitakin muodon määrittimiä. Esimerkiksi <code>"en-US"</code> <code>"MMM"</code> on <code>"Jan", "Feb", "Mar", ... </code>, kun taas <code>"ru-RU"</code> <code>"MMM"</code> on <code>"янв", "фев", "мар", ...</code>. Kun <code>Format</code> on <code>tyhjäarvoinen</code>, <code>Culture</code> määrittää käytettävän oletusmuodon. Kun <code>Culture</code> on <code>tyhjäarvoinen</code> tai poistettu, <code>Culture.Current</code> on käytössä.</li></ul>Vanhojen työnkulkujen tukemiseksi <code>options</code> voi olla myös tekstiarvo. Tämä toimii samalla tavalla, kuin jos <code>options</code><code> = [Format = null, Culture = <code>options</code>]</code>.


## Examples

### Example #1 
Muunna &lt;code&gt;&#34;2010-12-31T01:30:00-08:00&#34;&lt;/code&gt; &lt;code&gt;datetimezone&lt;/code&gt;-arvoksi.
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
