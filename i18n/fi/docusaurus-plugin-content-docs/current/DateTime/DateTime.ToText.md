---
title: DateTime.ToText
---

# DateTime.ToText


## Description

Palauttaa datetime-arvon tekstiesityksen.


## Syntax

```powerquery
DateTime.ToText(
    dateTime as datetime,
    optional options as any,
    optional culture as text
) as text
```


## Details

Palauttaa tekstimuotoisen esityksen kohteesta <code>dateTime</code>. Lisäominaisuuksien määrittämiseksi voidaan antaa valinnainen <code>record</code>-parametri <code>options</code>. Parametri <code>culture</code> on käytössä vain vanhoissa työnkuluissa. Parametri <code>record</code> voi sisältää seuraavat kentät:<ul>   <li><code>Format</code>: <code>text</code>-arvo, joka ilmaisee käytettävän muodon. Siirry kohtaan https://go.microsoft.com/fwlink/?linkid=2180104 ja https://go.microsoft.com/fwlink/?linkid=2180105. Jos jätät tämän kentän pois tai annat <code>tyhjäarvoisen</code> päivämäärän, se johtaa päivämäärän oletusarvoiseen muotoiluun, jonka määrittää <code>Culture</code>.</li>   <li><code>Culture</code>: Kun <code>Format</code> ei ole tyhjäarvo, <code>Culture</code> ohjaa joitakin muodon määrittimiä. Esimerkiksi <code>"en-US"</code> <code>"MMM"</code> on <code>"Jan", "Feb", "Mar", ... </code>, kun taas <code>"ru-RU"</code> <code>"MMM"</code> on <code>"янв", "фев", "мар", ...</code>. Kun <code>Format</code> on <code>tyhjäarvoinen</code>, <code>Culture</code> määrittää käytettävän oletusmuodon. Kun <code>Culture</code> on <code>tyhjäarvoinen</code> tai poistettu, <code>Culture.Current</code> on käytössä.</li></ul>Vanhojen työnkulkujen tukemiseksi <code>options</code> ja <code>culture</code> voivat olla myös tekstiarvoja. Tämä toimii samalla tavalla, kuin jos <code>options</code><code> = [Format = <code>options</code>, Culture = <code>culture</code>]</code>.


## Examples

### Example #1 
Muunna &lt;code&gt;#datetime(2010, 12, 31, 01, 30, 25)&lt;/code&gt; &lt;code&gt;text&lt;/code&gt;-arvoksi. &lt;i&gt;Tulos voi vaihdella nykyisen maa-asetuksen mukaan.&lt;/i&gt;
```powerquery
DateTime.ToText(#datetime(2010, 12, 31, 01, 30, 25))
```

Result: 
```powerquery
"12/31/2010 1:30:25 AM"
```


### Example #2 
Muunna käyttämällä mukautettua muotoa ja saksalaista maa-asetusta.
```powerquery
DateTime.ToText(#datetime(2010, 12, 30, 2, 4, 50.36973), [Format="dd MMM yyyy HH:mm:ss.ffffff", Culture="de-DE"])
```

Result: 
```powerquery
"30 Dez 2010 02:04:50.369730"
```


### Example #3 
Muunna ISO 8601 -mallin avulla.
```powerquery
DateTime.ToText(#datetime(2000, 2, 8, 3, 45, 12),[Format="yyyy-MM-dd'T'HH:mm:ss'Z'", Culture="en-US"])
```

Result: 
```powerquery
"2000-02-08T03:45:12Z"
```




## Category
DateTime
