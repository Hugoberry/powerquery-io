---
title: DateTime.FromText
---

# DateTime.FromText


## Description

Maakt een datum-/tijdzone van lokale en universele datum-/tijdindelingen.


## Syntax

```powerquery
DateTime.FromText(
    text as text,
    optional options as any
) as datetime
```


## Details

Hiermee wordt een <code>datum/tijd</code>-waarde van een tekstweergave <code>text</code> gemaakt. Er kan een optionele <code>record</code>-parameter, <code>options</code>, worden opgegeven om aanvullende eigenschappen op te geven. De <code>record</code> kan de volgende velden bevatten:<ul>   <li><code>Format</code>: een <code>tekst</code>-waarde die de indeling aangeeft die moet worden gebruikt. Ga naar https://go.microsoft.com/fwlink/?linkid=2180104 en https://go.microsoft.com/fwlink/?linkid=2180105 voor meer informatie. Als u dit veld weglaat of <code>nul</code> opgeeft, zal de datum naar beste vermogen worden geparseerd.</li>   <li><code>Culture</code>: als <code>Format</code> niet nul is, worden bepaalde indelingsaanduidingen bepaald door <code>Culture</code>. Voor <code>'en-US'</code> staat <code>'MMM'</code> bijvoorbeeld voor <code>'Jan', 'Feb', 'Mar', ...</code>, terwijl voor <code>'ru-RU'</code> <code>'MMM'</code> staat voor <code>'янв', 'фев', 'мар', ...</code>. Als <code>Format</code> gelijk is aan <code>nul</code>, bepaalt <code>Culture</code> de standaardindeling die moet worden gebruikt. Als <code>Culture</code> de waarde <code>nul</code> heeft of wordt weggelaten, wordt <code>Culture.Current</code> gebruikt.</li></ul>Als u oudere werkstromen wilt ondersteunen, kan <code>options</code> ook een tekstwaarde zijn. Dit vertoont hetzelfde gedrag als <code>options</code><code> = [Format = nul, Culture = <code>options</code>]</code>.


## Examples

### Example #1 
&lt;code&gt;&#39;2010-12-31T01:30:00&#39;&lt;/code&gt; converteren naar een datum/tijd-waarde.
```powerquery
DateTime.FromText("2010-12-31T01:30:25")
```

Result: 
```powerquery
#datetime(2010, 12, 31, 1, 30, 25)
```


### Example #2 
&lt;code&gt;&#39;2010-12-31T01:30:00.121212&#39;&lt;/code&gt; converteren naar een datum/tijd-waarde.
```powerquery
DateTime.FromText("30 Dez 2010 02:04:50.369730", [Format="dd MMM yyyy HH:mm:ss.ffffff", Culture="de-DE"])
```

Result: 
```powerquery
#datetime(2010, 12, 30, 2, 4, 50.36973)
```


### Example #3 
&lt;code&gt;&#39;2010-12-31T01:30:00&#39;&lt;/code&gt; converteren naar een datum/tijd-waarde.
```powerquery
DateTime.FromText("2000-02-08T03:45:12Z", [Format="yyyy-MM-dd'T'HH:mm:ss'Z'", Culture="en-US"])
```

Result: 
```powerquery
#datetime(2000, 2, 8, 3, 45, 12)
```


### Example #4 
&lt;code&gt;&#39;20101231T013000&#39;&lt;/code&gt; converteren naar een datum/tijd-waarde.
```powerquery
DateTime.FromText("20101231T013000", [Format="yyyyMMdd'T'HHmmss", Culture="en-US"])
```

Result: 
```powerquery
#datetime(2010, 12, 31, 1, 30, 0)
```




## Category
DateTime
