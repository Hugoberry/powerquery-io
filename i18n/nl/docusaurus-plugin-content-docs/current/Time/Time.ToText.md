---
title: Time.ToText
---

# Time.ToText


## Description

Retourneert een tekstweergave van de tijdwaarde.


## Syntax

```powerquery
Time.ToText(
    time as time,
    optional options as any,
    optional culture as text
) as text
```


## Details

Hiermee wordt een tekstweergave van <code>time</code> geretourneerd. Er kan een optionele <code>record</code>-parameter, <code>options</code>, worden opgegeven om aanvullende eigenschappen op te geven. <code>culture</code> wordt alleen gebruikt voor verouderde werkstromen. De <code>record</code> kan de volgende velden bevatten:<ul>   <li><code>Format</code>: een <code>tekst</code>waarde die de indeling aangeeft die moet worden gebruikt. Ga naar https://go.microsoft.com/fwlink/?linkid=2180104 en https://go.microsoft.com/fwlink/?linkid=2180105 voor meer informatie. Als u dit veld weglaat of <code>nul</code> opgeeft, wordt de datum opgemaakt aan de hand van de standaardwaarde die is gedefinieerd door <code>Culture</code>.</li>   <li><code>Culture</code>: als <code>Format</code> niet nul is, worden bepaalde indelingsaanduidingen bepaald door <code>Culture</code>. Voor <code>'en-US'</code> staat <code>"tt"</code> bijvoorbeeld voor <code>'AM' of 'PM'</code>, terwijl voor <code>'ar-EG'</code> <code>"tt"</code> staat voor <code>'ص' of 'م'</code>. Als <code>Format</code> gelijk is aan <code>nul</code>, bepaalt <code>Culture</code> de standaardindeling die moet worden gebruikt. Als <code>Culture</code> de waarde <code>nul</code> heeft of niet wordt gebruikt, wordt <code>Culture.Current</code> gebruikt.</li></ul>Als u oudere werkstromen wilt ondersteunen, kunnen <code>options</code> en <code>culture</code> ook tekstwaarden zijn. Dit vertoont hetzelfde gedrag als <code>options</code><code> = [Format = <code>options</code>, Culture = <code>culture</code>]</code>.


## Examples

### Example #1 
&lt;code&gt;#time(01, 30, 25)&lt;/code&gt; converteren naar een &lt;code&gt;text&lt;/code&gt;-waarde. &lt;i&gt;De uitvoer van resultaten kan variëren, afhankelijk van de huidige culture.&lt;/i&gt;
```powerquery
Time.ToText(#time(11, 56, 2))
```

Result: 
```powerquery
"11:56 AM"
```


### Example #2 
Converteren met een aangepaste indeling en de Duitse cultuur.
```powerquery
Time.ToText(#time(11, 56, 2), [Format="hh:mm", Culture="de-DE"])
```

Result: 
```powerquery
"11:56"
```


### Example #3 
Converteren met standaardtijdnotatie.
```powerquery
Time.ToText(#time(11, 56, 2), [Format="T", Culture="de-DE"])
```

Result: 
```powerquery
"11:56:02"
```




## Category
Time
