---
title: DateTime.FromText
---

# DateTime.FromText


## Description

Opretter en datetimezone ud fra lokale og universelle datetime-formater.


## Syntax

```powerquery
DateTime.FromText(
    text as text,
    optional options as any
) as datetime
```


## Details

Opretter en værdi af typen <code>datetimezone</code> ud fra en tekstrepræsentation, <code>text</code>. En valgfri <code>record</code> parameter <code>options</code> kan leveres for at specificere yderligere egenskaber. <code>The record</code> kan indeholde følgende felter:<ul>   <li><code>Format</code>: En <code>tekstværdi</code> angiver det format, der skal bruges. Gå til https://go.microsoft.com/fwlink/?linkid=2180104 og https://go.microsoft.com/fwlink/?linkid=2180105 for at få flere oplysninger. Udeladelse af dette felt eller angivelse af <code>null</code> vil resultere i parsing af datoen efter bedste evne.</li>   <li><code>Culture</code> : Når <code>Format</code> ikke er null, kontrollerer <code>Culture</code> nogle formatspecifikationer. For eksempel i <code>"en-US"</code> er <code>"MMM"</code> <code>"januar", "februar", "marts", ...</code>, mens i <code>"ru-RU"</code> er <code>"MMM"</code> <code>"янв", "фев", "мар", ...</code>. Når <code>Format</code> er <code>null</code>, kontrollerer <code>Culture</code> standardformatet, der skal bruges. Når <code>Culture</code> er <code>null</code> eller udeladt, bruges <code>Culture Current</code>.</li></ul>Hvis du vil understøtte ældre arbejdsprocesser, kan <code>options</code> også være en tekstværdi. Dette har den samme funktionsmåde som hvis <code>options</code><code> = [Format = null, Culture = <code>options</code>]</code>.


## Examples

### Example #1 
Konvertér &lt;code&gt;&#34;2010-12-31T01:30:00&#34;&lt;/code&gt; til en værdi af typen datetime.
```powerquery
DateTime.FromText("2010-12-31T01:30:25")
```

Result: 
```powerquery
#datetime(2010, 12, 31, 1, 30, 25)
```


### Example #2 
Konvertér &lt;code&gt;&#34;2010-12-31T01:30:00.121212&#34;&lt;/code&gt; til en værdi af typen datetime.
```powerquery
DateTime.FromText("30 Dez 2010 02:04:50.369730", [Format="dd MMM yyyy HH:mm:ss.ffffff", Culture="de-DE"])
```

Result: 
```powerquery
#datetime(2010, 12, 30, 2, 4, 50.36973)
```


### Example #3 
Konvertér &lt;code&gt;&#34;2010-12-31T01:30:00&#34;&lt;/code&gt; til en værdi af typen datetime.
```powerquery
DateTime.FromText("2000-02-08T03:45:12Z", [Format="yyyy-MM-dd'T'HH:mm:ss'Z'", Culture="en-US"])
```

Result: 
```powerquery
#datetime(2000, 2, 8, 3, 45, 12)
```


### Example #4 
Konvertér &lt;code&gt;&#34;20101231T013000&#34;&lt;/code&gt; til en værdi af typen datetime.
```powerquery
DateTime.FromText("20101231T013000", [Format="yyyyMMdd'T'HHmmss", Culture="en-US"])
```

Result: 
```powerquery
#datetime(2010, 12, 31, 1, 30, 0)
```




## Category
DateTime
