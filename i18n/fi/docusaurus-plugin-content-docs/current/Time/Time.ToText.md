---
title: Time.ToText
---

# Time.ToText


## Description

Palauttaa aika-arvon tekstiesityksen.


## Syntax

```powerquery
Time.ToText(
    time as time,
    optional options as any,
    optional culture as text
) as text
```


## Details

Palauttaa tekstimuotoisen esityksen kohteesta <code>time</code>. Lisäominaisuuksien määrittämiseksi voidaan antaa valinnainen <code>record</code>-parametri <code>options</code>. Parametri <code>culture</code> on käytössä vain vanhoissa työnkuluissa. Parametri <code>record</code> voi sisältää seuraavat kentät:<ul>   <li><code>Format</code>: <code>text</code>-arvo, joka ilmaisee käytettävän muodon. Siirry kohtaan https://go.microsoft.com/fwlink/?linkid=2180104 ja https://go.microsoft.com/fwlink/?linkid=2180105. Jos jätät tämän kentän pois tai annat <code>tyhjäarvoisen</code> päivämäärän, se johtaa päivämäärän oletusarvoiseen muotoiluun, jonka määrittää <code>Culture</code>.</li>   <li><code>Culture</code>: Kun <code>Format</code> ei ole tyhjäarvo, <code>Culture</code> ohjaa joitakin muodon määrittimiä. Esimerkiksi <code>"en-US"</code> <code>"tt"</code> on <code>"AM" tai "PM"</code>, kun taas <code>"ar-EG"</code> <code>"tt"</code> on <code>"ص" tai "م"</code>. Kun <code>Format</code> on <code>tyhjäarvoinen</code>, <code>Culture</code> määrittää käytettävän oletusmuodon. Kun <code>Culture</code> on <code>tyhjäarvoinen</code> tai poistettu, <code>Culture.Current</code> on käytössä.</li></ul>Vanhojen työnkulkujen tukemiseksi <code>options</code> ja <code>culture</code> voivat olla myös tekstiarvoja. Tämä toimii samalla tavalla, kuin jos <code>options</code><code> = [Format = <code>options</code>, Culture = <code>culture</code>]</code>.


## Examples

### Example #1 
Muunna &lt;code&gt;#time(01, 30, 25)&lt;/code&gt; &lt;code&gt;text&lt;/code&gt;-arvoksi. &lt;i&gt;Tulos voi vaihdella nykyisen maa-asetuksen mukaan.&lt;/i&gt;
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
