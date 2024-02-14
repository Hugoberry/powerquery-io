---
title: Date.FromText
---

# Date.FromText


Maakt een datum van lokale, universele en aangepaste datumnotaties.


## Syntax

```powerquery
Date.FromText(
    text as text,
    optional options as any
) as date
```


## Remarks

Hiermee wordt een <code>datum</code>-waarde van een tekstweergave <code>text</code> gemaakt. Er kan een optionele <code>record</code>-parameter, <code>options</code>, worden opgegeven om aanvullende eigenschappen op te geven. De <code>record</code> kan de volgende velden bevatten:<ul>   <li><code>Format</code>: een <code>tekst</code>-waarde die de indeling aangeeft die moet worden gebruikt. Ga naar https://go.microsoft.com/fwlink/?linkid=2180104 en https://go.microsoft.com/fwlink/?linkid=2180105 voor meer informatie. Als u dit veld weglaat of <code>nul</code> opgeeft, zal de datum naar beste vermogen worden geparseerd.</li>   <li><code>Culture</code>: als <code>Format</code> niet nul is, worden bepaalde indelingsaanduidingen bepaald door <code>Culture</code>. Voor <code>'en-US'</code> staat <code>'MMM'</code> bijvoorbeeld voor <code>'Jan', 'Feb', 'Mar', ...</code>, terwijl voor <code>'ru-RU'</code> <code>'MMM'</code> staat voor <code>'янв', 'фев', 'мар', ...</code>. Als <code>Format</code> gelijk is aan <code>nul</code>, bepaalt <code>Culture</code> de standaardindeling die moet worden gebruikt. Als <code>Culture</code> de waarde <code>nul</code> heeft of wordt weggelaten, wordt <code>Culture.Current</code> gebruikt.</li></ul>Als u oudere werkstromen wilt ondersteunen, kan <code>options</code> ook een tekstwaarde zijn. Dit vertoont hetzelfde gedrag als <code>options</code><code> = [Format = nul, Culture = <code>options</code>]</code>.


## Examples

### Example #1 
&lt;code&gt;&#39;2010-12-31&#39;&lt;/code&gt; converteren naar een &lt;code&gt;date&lt;/code&gt;-waarde.
```powerquery
Date.FromText("2010-12-31")
```

Result: 
```powerquery
#date(2010, 12, 31)
```


### Example #2 
Converteren met een aangepaste indeling en de Duitse cultuur.
```powerquery
Date.FromText("30 Dez 2010", [Format="dd MMM yyyy", Culture="de-DE"])
```

Result: 
```powerquery
#date(2010, 12, 30)
```


### Example #3 
Zoek de datum in de Gregoriaanse kalender die overeenkomt met het begin van 1400 in de Hijri-kalender.
```powerquery
Date.FromText("1400", [Format="yyyy", Culture="ar-SA"])
```

Result: 
```powerquery
#date(1979, 11, 20)
```




## Category
Date
