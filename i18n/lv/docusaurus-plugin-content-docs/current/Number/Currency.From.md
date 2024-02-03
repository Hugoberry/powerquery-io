---
title: Currency.From
---

# Currency.From


## Description

Atgriež valūtas vērtību no dotās vērtības.


## Syntax

```powerquery
Currency.From(
    value as any,
    optional culture as text,
    optional roundingMode as RoundingMode.Type
) as number
```


## Details

Tiek atgriezta tipa <code>currency</code> vērtība, kas ir iegūta no norādītās parametra <code>value</code> vērtības. Ja norādītā parametra <code>value</code> vērtība ir <code>null</code>, funkcija <code>Currency.From</code> atgriež vērtību <code>null</code>.  Ja norādītās parametra <code>value</code> vērtības tips ir <code>number</code> un tā ir valūtas vērtību diapazonā, parametra <code>value</code> vērtības daļa aiz komata tiek noapaļota līdz 4 cipariem un tā tiek atgriezta. Ja <code>value</code> ir jebkura cita veida, tas vispirms tiks konvertēts par <code>number</code>, izmantojot <code>Number.FromText</code>. Derīgs valūtas vērtību diapazons ir no <code>-922337203685477,5808</code> līdz <code>922337203685477,5807</code>. Informāciju par pieejamajiem noapaļošanas režīmiem skatiet funkcijas <code>Number.Round</code> aprakstā. Pēc noklusējuma tiek izmantots režīms <code>RoundingMode.ToEven</code>. Ir iespējams nodrošināt arī papildu <code>culture</code> (piemēram, “lv-LV”).


## Examples

### Example #1 
Iegūt &lt;code&gt;&#34;1.23455&#34;&lt;/code&gt; vērtību &lt;code&gt;currency&lt;/code&gt;.
```powerquery
Currency.From("1.23455")
```

Result: 
```powerquery
1.2346
```


### Example #2 
Iegūstiet tipa &lt;code&gt;currency&lt;/code&gt; vērtību &lt;code&gt;&#34;1.23455&#34;&lt;/code&gt;, izmantojot funkciju &lt;code&gt;RoundingMode.Down&lt;/code&gt;.
```powerquery
Currency.From("1.23455", "en-US", RoundingMode.Down)
```

Result: 
```powerquery
1.2345
```




## Category
Number.Conversion and formatting
