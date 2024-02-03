---
title: DateTimeZone.ToText
---

# DateTimeZone.ToText


## Description

Retourneert een tekstweergave van de datum-/tijdzonewaarde.


## Syntax

```powerquery
DateTimeZone.ToText(
    dateTimeZone as datetimezone,
    optional options as any,
    optional culture as text
) as text
```


## Details

Hiermee wordt een tekstweergave van <code>dateTimeZone</code> geretourneerd. Er kan een optionele <code>record</code>-parameter, <code>options</code>, worden opgegeven om aanvullende eigenschappen op te geven. <code>culture</code> wordt alleen gebruikt voor verouderde werkstromen. De <code>record</code> kan de volgende velden bevatten:<ul>   <li><code>Format</code>: een <code>tekst</code>waarde die de indeling aangeeft die moet worden gebruikt. Ga naar https://go.microsoft.com/fwlink/?linkid=2180104 en https://go.microsoft.com/fwlink/?linkid=2180105 voor meer informatie. Als u dit veld weglaat of <code>nul</code> opgeeft, wordt de datum opgemaakt aan de hand van de standaardwaarde die is gedefinieerd door <code>Culture</code>.</li>   <li><code>Culture</code>: als <code>Format</code> niet nul is, worden bepaalde indelingsaanduidingen bepaald door <code>Culture</code>. Voor <code>'en-US'</code> staat <code>'MMM'</code> bijvoorbeeld voor <code>'Jan', 'Feb', 'Mar', ...</code>, terwijl voor <code>'ru-RU'</code> <code>'MMM'</code> staat voor <code>'янв', 'фев', 'мар', ...</code>. Als <code>Format</code> gelijk is aan <code>nul</code>, bepaalt <code>Culture</code> de standaardindeling die moet worden gebruikt. Als <code>Culture</code> de waarde <code>nul</code> heeft of niet wordt gebruikt, wordt <code>Culture.Current</code> gebruikt.</li></ul>Als u oudere werkstromen wilt ondersteunen, kunnen <code>options</code> en <code>culture</code> ook tekstwaarden zijn. Dit vertoont hetzelfde gedrag als <code>options</code><code> = [Format = <code>options</code>, Culture = <code>culture</code>]</code>.


## Examples

### Example #1 
Converteer &lt;code&gt;#datetimezone(2010, 12, 31, 01, 30, 25, 2, 0)&lt;/code&gt; naar een &lt;code&gt;text&lt;/code&gt;-waarde. &lt;i&gt;Uitvoer van resultaten kan variëren afhankelijk van de huidige culture.&lt;/i&gt;
```powerquery
DateTimeZone.ToText(#datetimezone(2010, 12, 31, 01, 30, 25, 2, 0))
```

Result: 
```powerquery
"12/31/2010 1:30:25 AM +02:00"
```


### Example #2 
Converteren met een aangepaste indeling en de Duitse cultuur.
```powerquery
DateTimeZone.ToText(#datetimezone(2010, 12, 30, 2, 4, 50.36973, -8,0), [Format="dd MMM yyyy HH:mm:ss.ffffff zzz", Culture="de-DE"])
```

Result: 
```powerquery
"30 Dez 2010 02:04:50.369730 -08:00"
```


### Example #3 
Converteren met het ISO 8601-patroon.
```powerquery
DateTimeZone.ToText(#datetimezone(2000, 2, 8, 3, 45, 12, 2, 0),[Format="O", Culture="en-US"])
```

Result: 
```powerquery
"2000-02-08T03:45:12.0000000+02:00"
```




## Category
DateTimeZone
