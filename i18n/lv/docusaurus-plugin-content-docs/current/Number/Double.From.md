---
title: Double.From
---

# Double.From


## Description

Izveido dubultprecizitātes skaitli no dotās vērtības.


## Syntax

```powerquery
Double.From(
    value as any,
    optional culture as text
) as number
```


## Details

Atgriež dubulto <code>number</code> vērtību no dotā <code>value</code>. Ja dotais <code>value</code> ir <code>null</code>, <code>Double.From</code> atgriež <code>null</code>.  Ja dotais <code>value</code> ir <code>number</code> dubultā diapazonā, tiek atgriezts <code>value</code>, bet pretējā gadījumā tiek atgriezta kļūda. Ja <code>value</code> ir jebkura cita tipa, tas vispirms tiks konvertēts par <code>number</code> using <code>Number.FromText</code>. Ir iespējams nodrošināt arī papildu <code>culture</code> (piemēram, “lv-LV”).


## Examples

### Example #1 
Iegūt &lt;code&gt;&#34;4&#34;&lt;/code&gt; dubultprecizitātes &lt;code&gt;number&lt;/code&gt; vērtību.
```powerquery
Double.From("4.5")
```

Result: 
```powerquery
4.5
```




## Category
Number.Conversion and formatting
