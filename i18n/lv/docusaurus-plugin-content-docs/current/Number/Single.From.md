---
title: Single.From
---

# Single.From


## Description

Izveido vienkāršās precizitātes skaitli no dotās vērtības.


## Syntax

```powerquery
Single.From(
    value as any,
    optional culture as text
) as number
```


## Details

Atgriež atsevišķo <code>number</code> vērtību no dotā <code>value</code>. Ja dotais <code>value</code> ir <code>null</code>, <code>Single.From</code> atgriež <code>null</code>.  Ja dotais <code>value</code> ir <code>number</code> atsevišķa diapazonā, tiek atgriezts <code>value</code>, bet pretējā gadījumā tiek atgriezta kļūda. Ja <code>value</code> ir jebkura cita tipa, tas vispirms tiks konvertēts par <code>number</code> using <code>Number.FromText</code>. Ir iespējams nodrošināt arī papildu <code>culture</code> (piemēram, “lv-LV”).


## Examples

### Example #1 
Iegūt &lt;code&gt;&#34;1.5&#34;&lt;/code&gt; vienkāršās precizitātes &lt;code&gt;number&lt;/code&gt; vērtību.
```powerquery
Single.From("1.5")
```

Result: 
```powerquery
1.5
```




## Category
Number.Conversion and formatting
