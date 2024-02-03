---
title: DateTime.FromText
---

# DateTime.FromText


## Description

Létrehoz egy datetimezone értéket a helyi és univerzális datetime formátumokból.


## Syntax

```powerquery
DateTime.FromText(
    text as text,
    optional options as any
) as datetime
```


## Details

Egy <code>datetime</code> típusú értéket hoz létre egy szöveges alakból (<code>text</code>). Megadható egy nem kötelező <code>record</code> paraméter (<code>options</code>) további tulajdonságok megadásához. A <code>record</code> az alábbi mezőket tartalmazhatja:<ul>   <li><code>Format</code>: A használandó formátumot jelző <code>text</code> érték. További részletek: https://go.microsoft.com/fwlink/?linkid=2180104 és https://go.microsoft.com/fwlink/?linkid=2180105. A mező kihagyása vagy <code>null</code> érték megadása esetén a dátum elemzése a legjobb lehetőség alapján történik.</li>   <li><code>Culture</code>: Ha a <code>Format</code> nem null értékű, a <code>Culture</code> vezérel egyes formátummegadókat. Az <code>"en-US"</code> esetén például az <code>"MMM"</code> <code>"Jan", "Feb", "Mar", ...</code> lehet, míg a <code>"ru-RU"</code> esetén az <code>"MMM"</code> <code>"янв", "фев", "мар", ...</code> lehet. Ha a <code>Format</code> <code>null</code> értékű, a <code>Culture</code> paraméter vezérli a használandó alapértelmezett formátumot. Ha a <code>Culture</code> <code>null</code> értékű vagy ki lett hagyva, a <code>Culture.Current</code> paramétert használja a rendszer.</li></ul>Az örökölt munkafolyamatok támogatásához a(z) <code>options</code> szöveges érték is lehet. Ez ugyanazt a működést eredményezi, mintha a(z) <code>options</code><code> = [Format = null, Culture = <code>options</code>]</code> értékű lenne.


## Examples

### Example #1 
A &lt;code&gt;&#34;2010-12-31T01:30:00&#34;&lt;/code&gt; érték konvertálása datetime értékre.
```powerquery
DateTime.FromText("2010-12-31T01:30:25")
```

Result: 
```powerquery
#datetime(2010, 12, 31, 1, 30, 25)
```


### Example #2 
A &lt;code&gt;&#34;2010-12-31T01:30:00.121212&#34;&lt;/code&gt; érték konvertálása datetime értékre.
```powerquery
DateTime.FromText("30 Dez 2010 02:04:50.369730", [Format="dd MMM yyyy HH:mm:ss.ffffff", Culture="de-DE"])
```

Result: 
```powerquery
#datetime(2010, 12, 30, 2, 4, 50.36973)
```


### Example #3 
A &lt;code&gt;&#34;2010-12-31T01:30:00&#34;&lt;/code&gt; érték konvertálása datetime értékre.
```powerquery
DateTime.FromText("2000-02-08T03:45:12Z", [Format="yyyy-MM-dd'T'HH:mm:ss'Z'", Culture="en-US"])
```

Result: 
```powerquery
#datetime(2000, 2, 8, 3, 45, 12)
```


### Example #4 
A &lt;code&gt;&#34;20101231T013000&#34;&lt;/code&gt; érték konvertálása datetime értékre.
```powerquery
DateTime.FromText("20101231T013000", [Format="yyyyMMdd'T'HHmmss", Culture="en-US"])
```

Result: 
```powerquery
#datetime(2010, 12, 31, 1, 30, 0)
```




## Category
DateTime
