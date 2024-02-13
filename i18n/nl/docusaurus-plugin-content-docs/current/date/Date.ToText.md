---
title: Date.ToText
---

# Date.ToText


Hiermee wordt een tekstweergave van de datumwaarde geretourneerd.


## Syntax

```powerquery
Date.ToText(
    date as date,
    optional options as any,
    optional culture as text
) as text
```


## Remarks

Hiermee wordt een tekstweergave van <code>date</code> geretourneerd. Er kan een optionele <code>record</code>-parameter, <code>options</code>, worden opgegeven om aanvullende eigenschappen op te geven. <code>culture</code> wordt alleen gebruikt voor verouderde werkstromen. De <code>record</code> kan de volgende velden bevatten:<ul>   <li><code>Format</code>: een <code>tekst</code>waarde die de indeling aangeeft die moet worden gebruikt. Ga naar https://go.microsoft.com/fwlink/?linkid=2180104 en https://go.microsoft.com/fwlink/?linkid=2180105 voor meer informatie. Als u dit veld weglaat of <code>nul</code> opgeeft, wordt de datum opgemaakt aan de hand van de standaardwaarde die is gedefinieerd door <code>Culture</code>.</li>   <li><code>Culture</code>: als <code>Format</code> niet nul is, worden bepaalde indelingsaanduidingen bepaald door <code>Culture</code>. Voor <code>'en-US'</code> staat <code>'MMM'</code> bijvoorbeeld voor <code>'Jan', 'Feb', 'Mar', ...</code>, terwijl voor <code>'ru-RU'</code> <code>'MMM'</code> staat voor <code>'янв', 'фев', 'мар', ...</code>. Als <code>Format</code> gelijk is aan <code>nul</code>, bepaalt <code>Culture</code> de standaardindeling die moet worden gebruikt. Als <code>Culture</code> de waarde <code>nul</code> heeft of niet wordt gebruikt, wordt <code>Culture.Current</code> gebruikt.</li></ul>Als u oudere werkstromen wilt ondersteunen, kunnen <code>options</code> en <code>culture</code> ook tekstwaarden zijn. Dit vertoont hetzelfde gedrag als <code>options</code><code> = [Format = <code>options</code>, Culture = <code>culture</code>]</code>.


## Examples

### Example #1 
&lt;code&gt;#date(2010, 12, 31)&lt;/code&gt; converteren naar een &lt;code&gt;text&lt;/code&gt;-waarde. &lt;i&gt;De uitvoer van resultaten kan variëren, afhankelijk van de huidige culture.&lt;/i&gt;
```powerquery
Date.ToText(#date(2010, 12, 31))
```

Result: 
```powerquery
"12/31/2010"
```


### Example #2 
Converteren met een aangepaste indeling en de Duitse cultuur.
```powerquery
Date.ToText(#date(2010, 12, 31), [Format="dd MMM yyyy", Culture="de-DE"])
```

Result: 
```powerquery
"31 Dez 2010"
```


### Example #3 
Zoek het jaar in de Hijri-kalender die overeenkomt met 1 januari 2000 in de Gregoriaanse kalender.
```powerquery
Date.ToText(#date(2000, 1, 1), [Format="yyyy", Culture="ar-SA"])
```

Result: 
```powerquery
"1420"
```




## Category
Date
