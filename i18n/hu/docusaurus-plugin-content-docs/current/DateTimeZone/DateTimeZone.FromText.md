---
title: DateTimeZone.FromText
---

# DateTimeZone.FromText


## Description

Egy datetimezone értéket hoz létre helyi, univerzális és egyéni datetimezone formátumokból.


## Syntax

```powerquery
DateTimeZone.FromText(
    text as text,
    optional options as any
) as datetimezone
```


## Details

Egy <code>datetimezone</code> típusú értéket hoz létre egy szöveges alakból (<code>text</code>). Megadható egy nem kötelező <code>record</code> paraméter (<code>options</code>) további tulajdonságok megadásához. A <code>record</code> az alábbi mezőket tartalmazhatja:<ul>   <li><code>Format</code>: A használandó formátumot jelző <code>text</code> érték. További részletek: https://go.microsoft.com/fwlink/?linkid=2180104 és https://go.microsoft.com/fwlink/?linkid=2180105. A mező kihagyása vagy <code>null</code> érték megadása esetén a dátum elemzése a legjobb lehetőség alapján történik.</li>   <li><code>Culture</code>: Ha a <code>Format</code> nem null értékű, a <code>Culture</code> vezérel egyes formátummegadókat. Az <code>"en-US"</code> esetén például az <code>"MMM"</code> <code>"Jan", "Feb", "Mar", ...</code> lehet, míg a <code>"ru-RU"</code> esetén az <code>"MMM"</code> <code>"янв", "фев", "мар", ...</code> lehet. Ha a <code>Format</code> <code>null</code> értékű, a <code>Culture</code> paraméter vezérli a használandó alapértelmezett formátumot. Ha a <code>Culture</code> <code>null</code> értékű vagy ki lett hagyva, a <code>Culture.Current</code> paramétert használja a rendszer.</li></ul>Az örökölt munkafolyamatok támogatásához a(z) <code>options</code> szöveges érték is lehet. Ez ugyanazt a működést eredményezi, mintha a(z) <code>options</code><code> = [Format = null, Culture = <code>options</code>]</code> értékű lenne.


## Examples

### Example #1 
A &lt;code&gt;&#34;2010-12-31T01:30:00-08:00&#34;&lt;/code&gt; érték konvertálása &lt;code&gt;datetimezone&lt;/code&gt; típusú értékre.
```powerquery
DateTimeZone.FromText("2010-12-31T01:30:00-08:00")
```

Result: 
```powerquery
#datetimezone(2010, 12, 31, 1, 30, 0, -8, 0)
```


### Example #2 
Konvertálás egyéni formátummal és a német kulturális környezet használatával.
```powerquery
DateTimeZone.FromText("30 Dez 2010 02:04:50.369730 +02:00", [Format="dd MMM yyyy HH:mm:ss.ffffff zzz", Culture="de-DE"])
```

Result: 
```powerquery
#datetimezone(2010, 12, 30, 2, 4, 50.36973, 2, 0)
```


### Example #3 
Konvertálás az ISO 8601 használatával.
```powerquery
DateTimeZone.FromText("2009-06-15T13:45:30.0000000-07:00", [Format="O", Culture="en-US"])
```

Result: 
```powerquery
#datetimezone(2009, 6, 15, 13, 45, 30, -7, 0)
```




## Category
DateTimeZone
