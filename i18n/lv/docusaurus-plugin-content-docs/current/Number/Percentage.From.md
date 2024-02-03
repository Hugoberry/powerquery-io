---
title: Percentage.From
---

# Percentage.From


## Description

Atgriež dotās vērtības procentuālo vērtību.


## Syntax

```powerquery
Percentage.From(
    value as any,
    optional culture as text
) as number
```


## Details

Atgriež dotās izteiksmes <code>value</code> vērtību <code>percentage</code>. Ja dotā izteiksme <code>value</code> ir <code>Null</code>, komanda <code>Percentage.From</code> atgriež vērtību <code>Null</code>. Ja dotā izteiksme <code>value</code> ir formātā <code>text</code> ar noslēdzošu procentu zīmi, tiek atgriezts pārveidotais decimāldaļskaitlis. Citos gadījumos vērtība tiks konvertēta <code>number</code>, izmantojot <code>Number.From</code>. Var norādīt arī neobligātu parametru <code>culture</code> (piemēram, "lv-LV").


## Examples

### Example #1 
Iegūstiet izteiksmes &lt;code&gt;&#34;12.3%&#34;&lt;/code&gt; vērtību &lt;code&gt;percentage&lt;/code&gt;.
```powerquery
Percentage.From("12.3%")
```

Result: 
```powerquery
0.123
```




## Category
Number.Conversion and formatting
