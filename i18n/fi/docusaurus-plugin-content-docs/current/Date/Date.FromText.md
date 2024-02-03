---
title: Date.FromText
---

# Date.FromText


## Description

Luo päivämäärän paikallisista, yleisistä ja mukautetuista päivämäärämuodoista.


## Syntax

```powerquery
Date.FromText(
    text as text,
    optional options as any
) as date
```


## Details

Luo <code>date</code>-arvon tekstimuotoisesta esityksestä <code>text</code>. Lisäominaisuuksien määrittämiseen voidaan antaa valinnainen <code>record</code>-parametri <code>options</code>. Parametri <code>record</code> voi sisältää seuraavat kentät:<ul>   <li><code>Format</code>: <code>text</code>-arvo, joka ilmaisee käytettävän muodon. Siirry osoitteeseen https://go.microsoft.com/fwlink/?linkid=2180104 ja https://go.microsoft.com/fwlink/?linkid=2180105. Jos jätät tämän kentän pois tai annat <code>null</code>-arvoisen päivämäärän, se johtaa päivämäärän parhaaseen mahdolliseen muotoiluun.</li>   <li><code>Culture</code>: Kun <code>Format</code> ei ole tyhjäarvo, <code>Culture</code> ohjaa joitakin muotomääritteitä. Esimerkiksi <code>"en-US"</code> <code>"MMM"</code> on <code>"Jan", "Feb", "Mar", ... </code>, kun taas <code>"ru-RU"</code> <code>"MMM"</code> on <code>"янв", "фев", "мар", ...</code>. Kun <code>Format</code> on <code>null</code>-arvoinen, <code>Culture</code> määrittää käytettävän oletusmuodon. Kun <code>Culture</code> on <code>null</code>-arvoinen tai poistettu, <code>Culture.Current</code> on käytössä.</li></ul>Vanhojen työnkulkujen tukemiseksi <code>options</code> voi olla myös tekstiarvo. Tämä toimii samalla tavalla, kuin jos <code>options</code><code> = [Format = null, Culture = <code>options</code>]</code>.


## Examples

### Example #1 
Muunna &lt;code&gt;&#34;2010-12-31&#34;&lt;/code&gt; &lt;code&gt;date&lt;/code&gt;-arvoksi.
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




## Category
Date
