---
title: Time.FromText
---

# Time.FromText


Hiermee maakt u een tijd op basis van lokale en universele en aangepaste tijdnotaties.


## Syntax

```powerquery
Time.FromText(
    text as text,
    optional options as any
) as time
```


## Remarks

Hiermee wordt een <code>tijd</code>-waarde van een tekstweergave <code>text</code> gemaakt. Er kan een optionele <code>record</code>-parameter, <code>options</code>, worden opgegeven om aanvullende eigenschappen op te geven. De <code>record</code> kan de volgende velden bevatten:<ul>   <li><code>Format</code>: een <code>tekst</code>-waarde die de indeling aangeeft die moet worden gebruikt. Ga naar https://go.microsoft.com/fwlink/?linkid=2180104 en https://go.microsoft.com/fwlink/?linkid=2180105 voor meer informatie. Als u dit veld weglaat of <code>nul</code> opgeeft, zal het tijdstip naar beste vermogen worden geparseerd.</li>   <li><code>Culture</code>: als <code>Format</code> niet nul is, worden bepaalde indelingsaanduidingen bepaald door <code>Culture</code>. Voor <code>'en-US'</code> staat <code>"tt"</code> bijvoorbeeld voor <code>'AM' of 'PM'</code>, terwijl voor <code>'ar-EG'</code> <code>"tt"</code> staat voor <code>'ص' of 'م'</code>. Als <code>Format</code> gelijk is aan <code>nul</code>, bepaalt <code>Culture</code> de standaardindeling die moet worden gebruikt. Als <code>Culture</code> de waarde <code>nul</code> heeft of wordt weggelaten, wordt <code>Culture.Current</code> gebruikt.</li></ul>Als u oudere werkstromen wilt ondersteunen, kan <code>options</code> ook een tekstwaarde zijn. Dit vertoont hetzelfde gedrag als <code>options</code><code> = [Format = nul, Culture = <code>options</code>]</code>.


## Examples

### Example #1 
&lt;code&gt;&#34;10:12:31am&#34;&lt;/code&gt; converteren naar een tijdwaarde.
```powerquery
Time.FromText("10:12:31am")
```

Result: 
```powerquery
#time(10, 12, 31)
```


### Example #2 
&lt;code&gt;&#34;1012&#34;&lt;/code&gt; converteren naar een tijdwaarde.
```powerquery
Time.FromText("1012")
```

Result: 
```powerquery
#time(10, 12, 00)
```


### Example #3 
&lt;code&gt;&#34;10&#34;&lt;/code&gt; converteren naar een tijdwaarde.
```powerquery
Time.FromText("10")
```

Result: 
```powerquery
#time(10, 00, 00)
```




## Category
Time
