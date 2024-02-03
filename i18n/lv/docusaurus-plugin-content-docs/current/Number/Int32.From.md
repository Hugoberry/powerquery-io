---
title: Int32.From
---

# Int32.From


## Description

Izveido veselu 32 bitu skaitli no dotās vērtības.


## Syntax

```powerquery
Int32.From(
    value as any,
    optional culture as text,
    optional roundingMode as RoundingMode.Type
) as number
```


## Details

Atgriež 32 bitu veselā skaitļa <code>number</code> vērtību no dotā <code>value</code>. Ja dotais <code>value</code> ir <code>null</code>, <code>Int32.From</code> atgriež <code>null</code>. Ja dotais <code>value</code> ir <code>number</code> 32 bitu veselā skaitļa diapazonā bez daļskaitļa, tad tiek atgriezts <code>value</code>. Ja skaitlis ir daļskaitlis, tad skaitlis tiek noapaļots atbilstoši norādītajam noapaļošanas režīmam. Noklusējuma noapaļošanas režīms ir <code>RoundingMode.ToEven</code>. Ja <code>value</code> ir jebkura cita veida, tad vispirms tas tiks konvertēts par <code>skaitli</code>, izmantojot <code>Number.FromText</code>. Skatiet <code>Number.Round</code>, lai uzzinātu par pieejamajiem noapaļošanas režīmiem. Ir iespējams izmantot papildu <code>culture</code> (piemēram, “lv-LV”).


## Examples

### Example #1 
Iegūt &lt;code&gt;&#34;4&#34;&lt;/code&gt; vesela 32 bitu skaitļa &lt;code&gt;number&lt;/code&gt; vērtību.
```powerquery
Int32.From("4")
```

Result: 
```powerquery
4
```


### Example #2 
Iegūt &lt;code&gt;&#34;4.5&#34;&lt;/code&gt; vesela 32 bitu skaitļa &lt;code&gt;number&lt;/code&gt; vērtību, izmantojot &lt;code&gt;RoundingMode.AwayFromZero&lt;/code&gt;.
```powerquery
Int32.From("4.5", null, RoundingMode.AwayFromZero)
```

Result: 
```powerquery
5
```




## Category
Number.Conversion and formatting