---
title: Time.FromText
---

# Time.FromText


## Description

Luo aika paikallisista, yleisistä ja mukautetuista aikamuodoista.


## Syntax

```powerquery
Time.FromText(
    text as text,
    optional options as any
) as time
```


## Details

Luo <code>time</code>-arvon tekstimuotoisesta esityksestä <code>text</code>. Lisäominaisuuksien määrittämiseen voidaan antaa valinnainen <code>record</code>-parametri <code>options</code>. Parametri <code>record</code> voi sisältää seuraavat kentät:<ul>   <li><code>Format</code>: <code>text</code>-arvo, joka ilmaisee käytettävän muodon. Siirry osoitteeseen https://go.microsoft.com/fwlink/?linkid=2180104 ja https://go.microsoft.com/fwlink/?linkid=2180105. Jos jätät tämän kentän pois tai annat <code>tyhjäarvoisen</code> päivämäärän, se johtaa päivämäärän parhaaseen mahdolliseen muotoiluun.</li>   <li><code>Culture</code>: Kun <code>Format</code> ei ole tyhjäarvo, <code>Culture</code> ohjaa joitakin muodon määrittimiä. Esimerkiksi <code>"en-US"</code> <code>"tt"</code> on <code>"AM" tai "PM"</code>, kun taas <code>"ar-EG"</code> <code>"tt"</code> on <code>"ص" tai "م"</code>. Kun <code>Format</code> on <code>tyhjäarvoinen</code>, <code>Culture</code> määrittää käytettävän oletusmuodon. Kun <code>Culture</code> on <code>tyhjäarvoinen</code> tai poistettu, <code>Culture.Current</code> on käytössä.</li></ul>Vanhojen työnkulkujen tukemiseksi <code>options</code> voi olla myös tekstiarvo. Tämä toimii samalla tavalla, kuin jos <code>options</code><code> = [Format = null, Culture = <code>options</code>]</code>.


## Examples

### Example #1 
Muunna &lt;code&gt;&#34;10:12:31am&#34;&lt;/code&gt; Time-arvoksi.
```powerquery
Time.FromText("10:12:31am")
```

Result: 
```powerquery
#time(10, 12, 31)
```


### Example #2 
Muunna &lt;code&gt;&#34;1012&#34;&lt;/code&gt; Time-arvoksi.
```powerquery
Time.FromText("1012")
```

Result: 
```powerquery
#time(10, 12, 00)
```


### Example #3 
Muunna &lt;code&gt;&#34;10&#34;&lt;/code&gt; Time-arvoksi.
```powerquery
Time.FromText("10")
```

Result: 
```powerquery
#time(10, 00, 00)
```




## Category
Time
