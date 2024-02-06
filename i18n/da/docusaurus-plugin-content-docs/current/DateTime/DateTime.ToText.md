---
title: DateTime.ToText
---

# DateTime.ToText


Returnerer en tekstrepræsentation for værdien af typen datetime.


## Syntax

```powerquery
DateTime.ToText(
    dateTime as datetime,
    optional options as any,
    optional culture as text
) as text
```


## Remarks

Returnerer en tekstrepræsentation af <code>dateTime</code>. Der kan angives en valgfri <code>record</code> parameter <code>options</code> for at angive yderligere egenskaber. <code>culture</code> bruges kun til ældre arbejdsprocesser. <code>The record</code> kan indeholde følgende felter:<ul>   <li><code>Format</code>: En <code>tekstværdi</code>, der angiver det format, der skal bruges. Du kan få flere oplysninger ved at gå til https://go.microsoft.com/fwlink/?linkid=2180104 og https://go.microsoft.com/fwlink/?linkid=2180105. Hvis du udelader dette felt eller angiver <code>null</code> vil det resultere i formatering af datoen ved hjælp af den standard, der er defineret af <code>Culture</code>.</li>   <li><code>Culture</code>: Når <code>Format</code> ikke er null, styrer <code>Culture</code> nogle formatangivelser. For eksempel i <code>"en-US"</code> <code>"MMM"</code> er <code>"januar", "februar", "marts", ... </code>, mens du er i <code>"ru-RU"</code> er <code>"MMM"</code> <code>"янв", "фев", "мар", ... </code>. Når <code>Format</code> er <code>null</code>, styrer <code>Culture</code> det standardformat, der skal bruges. Når <code>Culture</code> er <code>null</code> eller udelades, bruges <code>Culture.Current</code>.</li></ul>Hvis du vil understøtte ældre arbejdsprocesser, kan <code>options</code> og <code>culture</code> også være tekstværdier. Dette har samme funktionsmåde, som hvis <code>options</code><code> = [Format = <code>options</code>, Culture = <code>culture</code>]</code>.


## Examples

### Example #1 
Konverter &lt;code&gt;#datetime(2010, 12, 31, 01, 30, 25)&lt;/code&gt; til en værdi af typen &lt;code&gt;text&lt;/code&gt;. &lt;i&gt;Resultatoutput kan variere afhængigt af den aktuelle kultur.&lt;/i&gt;
```powerquery
DateTime.ToText(#datetime(2010, 12, 31, 01, 30, 25))
```

Result: 
```powerquery
"12/31/2010 1:30:25 AM"
```


### Example #2 
Konverter ved hjælp af et brugerdefineret format og den tyske kultur.
```powerquery
DateTime.ToText(#datetime(2010, 12, 30, 2, 4, 50.36973), [Format="dd MMM yyyy HH:mm:ss.ffffff", Culture="de-DE"])
```

Result: 
```powerquery
"30 Dez 2010 02:04:50.369730"
```


### Example #3 
Konverter ved hjælp af ISO 8601-mønsteret.
```powerquery
DateTime.ToText(#datetime(2000, 2, 8, 3, 45, 12),[Format="yyyy-MM-dd'T'HH:mm:ss'Z'", Culture="en-US"])
```

Result: 
```powerquery
"2000-02-08T03:45:12Z"
```




## Category
DateTime
