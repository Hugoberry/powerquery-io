---
title: DateTimeZone.FromText
---

# DateTimeZone.FromText


## Description

Opretter en datetimezone fra lokale, universelle og brugerdefinerede datetimezone-formater.


## Syntax

```powerquery
DateTimeZone.FromText(
    text as text,
    optional options as any
) as datetimezone
```


## Details

Opretter en værdi af typen <code>datetimezone</code> ud fra en tekstrepræsentation, <code>text</code>. En valgfri <code>record</code> parameter <code>options</code> kan leveres for at specificere yderligere egenskaber. <code>The record</code> kan indeholde følgende felter:<ul>   <li><code>Format</code>: En <code>tekstværdi</code> angiver det format, der skal bruges. Gå til https://go.microsoft.com/fwlink/?linkid=2180104 og https://go.microsoft.com/fwlink/?linkid=2180105 for at få flere oplysninger. Hvis du udelader dette felt eller angiver <code>null</code> vil resultere i parsing af datoen efter bedste evne.</li>   <li><code>Culture</code> : Når <code>Format</code> ikke er null, kontrollerer <code>Culture</code> nogle formatspecifikationer. For eksempel i <code>"en-US"</code> er <code>"MMM"</code> <code>"januar", "februar", "marts", ...</code>, mens i <code>"ru-RU"</code> er <code>"MMM"</code> <code>"янв", "фев", "мар", ...</code>. Når <code>Format</code> er <code>null</code>, kontrollerer <code>Culture</code> standardformatet, der skal bruges. Når <code>Culture</code> er <code>null</code> eller udeladt, bruges <code>Culture Current</code>.</li></ul>Hvis du vil understøtte ældre arbejdsprocesser, kan <code>options</code> også være en tekstværdi. Dette har den samme funktionsmåde som hvis <code>options</code><code> = [Format = null, Culture = <code>options</code>]</code>.


## Examples

### Example #1 
Konvertér &lt;code&gt;&#34;2010-12-31T01:30:00-08:00&#34;&lt;/code&gt; til en værdi af typen &lt;code&gt;datetimezone&lt;/code&gt;.
```powerquery
DateTimeZone.FromText("2010-12-31T01:30:00-08:00")
```

Result: 
```powerquery
#datetimezone(2010, 12, 31, 1, 30, 0, -8, 0)
```


### Example #2 
Konverter ved hjælp af et brugerdefineret format og den tyske kultur.
```powerquery
DateTimeZone.FromText("30 Dez 2010 02:04:50.369730 +02:00", [Format="dd MMM yyyy HH:mm:ss.ffffff zzz", Culture="de-DE"])
```

Result: 
```powerquery
#datetimezone(2010, 12, 30, 2, 4, 50.36973, 2, 0)
```


### Example #3 
Konvertér ved hjælp af ISO 8601.
```powerquery
DateTimeZone.FromText("2009-06-15T13:45:30.0000000-07:00", [Format="O", Culture="en-US"])
```

Result: 
```powerquery
#datetimezone(2009, 6, 15, 13, 45, 30, -7, 0)
```




## Category
DateTimeZone
