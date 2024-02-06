---
title: Time.FromText
---

# Time.FromText


Opretter et klokkeslæt ud fra lokale og universelle samt brugerdefinerede klokkeslætsformater.


## Syntax

```powerquery
Time.FromText(
    text as text,
    optional options as any
) as time
```


## Remarks

Opretter en værdi af typen <code>time</code> ud fra en tekstrepræsentation <code>text</code>. Der kan angives en valgfri <code>record</code> parameter, <code>options</code>, for at angive yderligere egenskaber. <code>record</code> kan indeholde følgende felter:<ul>   <li><code>Format</code>: En <code>text</code>, der angiver det format, der skal bruges. Du kan få flere oplysninger ved at gå til https://go.microsoft.com/fwlink/?linkid=2180104 og https://go.microsoft.com/fwlink/?linkid=2180105. Hvis du udelader dette felt eller angiver <code>null</code> vil det resultere i, at tiden opdeles bedst muligt.</li>   <li><code>Culture</code>: Når <code>Format</code> ikke er null, <code>Culture</code> styrer nogle formatangivelser. I <code>"en-US"</code> <code>"tt"</code> <code>"AM" eller "PM"</code> i <code>"ar-EG"</code> <code>"tt"</code> er <code>"ص" eller "م"</code>. Når <code>Format</code> er <code>null</code>, styrer <code>Culture</code> det standardformat, der skal bruges. Når <code>Culture</code> <code>null</code> eller udelades, bruges <code>Culture.Current</code>.</li></ul>Hvis du vil understøtte ældre arbejdsprocesser kan <code>options</code> også være en tekstværdi. Dette har samme funktionsmåde, som hvis <code>options</code><code> = [Format = null, Culture = <code>options</code>]</code>.


## Examples

### Example #1 
Konvertér &lt;code&gt;&#34;10:12:31am&#34;&lt;/code&gt; til en klokkeslætsværdi.
```powerquery
Time.FromText("10:12:31am")
```

Result: 
```powerquery
#time(10, 12, 31)
```


### Example #2 
Konvertér &lt;code&gt;&#34;1012&#34;&lt;/code&gt; til en værdi af typen Time.
```powerquery
Time.FromText("1012")
```

Result: 
```powerquery
#time(10, 12, 00)
```


### Example #3 
Konvertér &lt;code&gt;&#34;10&#34;&lt;/code&gt; til en værdi af typen Time.
```powerquery
Time.FromText("10")
```

Result: 
```powerquery
#time(10, 00, 00)
```




## Category
Time
