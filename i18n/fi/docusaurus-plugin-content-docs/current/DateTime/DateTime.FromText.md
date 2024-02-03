---
title: DateTime.FromText
---

# DateTime.FromText


## Description

Luo datetimezone-arvon paikallisista ja yleisistä datetime-muodoista.


## Syntax

```powerquery
DateTime.FromText(
    text as text,
    optional options as any
) as datetime
```


## Details

Luo <code>datetime</code>-arvon tekstimuotoisesta esityksestä <code>text</code>. Lisäominaisuuksien määrittämiseen voidaan antaa valinnainen <code>record</code>-parametri <code>options</code>. Parametri <code>record</code> voi sisältää seuraavat kentät:<ul>   <li><code>Format</code>: <code>text</code>-arvo, joka ilmaisee käytettävän muodon. Siirry osoitteeseen https://go.microsoft.com/fwlink/?linkid=2180104 ja https://go.microsoft.com/fwlink/?linkid=2180105. Jos jätät tämän kentän pois tai annat <code>tyhjäarvoisen</code> päivämäärän, se johtaa päivämäärän parhaaseen mahdolliseen muotoiluun.</li>   <li><code>Culture</code>: Kun <code>Format</code> ei ole tyhjäarvo, <code>Culture</code> ohjaa joitakin muodon määrittimiä. Esimerkiksi <code>"en-US"</code> <code>"MMM"</code> on <code>"Jan", "Feb", "Mar", ... </code>, kun taas <code>"ru-RU"</code> <code>"MMM"</code> on <code>"янв", "фев", "мар", ...</code>. Kun <code>Format</code> on <code>tyhjäarvoinen</code>, <code>Culture</code> määrittää käytettävän oletusmuodon. Kun <code>Culture</code> on <code>tyhjäarvoinen</code> tai poistettu, <code>Culture.Current</code> on käytössä.</li></ul>Vanhojen työnkulkujen tukemiseksi <code>options</code> voi olla myös tekstiarvo. Tämä toimii samalla tavalla, kuin jos <code>options</code><code> = [Format = null, Culture = <code>options</code>]</code>.


## Examples

### Example #1 
Muunna &lt;code&gt;&#34;2010-12-31T01:30:00&#34;&lt;/code&gt; datetime-arvoksi.
```powerquery
DateTime.FromText("2010-12-31T01:30:25")
```

Result: 
```powerquery
#datetime(2010, 12, 31, 1, 30, 25)
```


### Example #2 
Muunna &lt;code&gt;&#34;2010-12-31T01:30:00.121212&#34;&lt;/code&gt; datetime-arvoksi.
```powerquery
DateTime.FromText("30 Dez 2010 02:04:50.369730", [Format="dd MMM yyyy HH:mm:ss.ffffff", Culture="de-DE"])
```

Result: 
```powerquery
#datetime(2010, 12, 30, 2, 4, 50.36973)
```


### Example #3 
Muunna &lt;code&gt;&#34;2010-12-31T01:30:00&#34;&lt;/code&gt; datetime-arvoksi.
```powerquery
DateTime.FromText("2000-02-08T03:45:12Z", [Format="yyyy-MM-dd'T'HH:mm:ss'Z'", Culture="en-US"])
```

Result: 
```powerquery
#datetime(2000, 2, 8, 3, 45, 12)
```


### Example #4 
Muunna &lt;code&gt;&#34;20101231T013000&#34;&lt;/code&gt; datetime-arvoksi.
```powerquery
DateTime.FromText("20101231T013000", [Format="yyyyMMdd'T'HHmmss", Culture="en-US"])
```

Result: 
```powerquery
#datetime(2010, 12, 31, 1, 30, 0)
```




## Category
DateTime
