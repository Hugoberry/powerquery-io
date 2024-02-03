---
title: Text.Combine
---

# Text.Combine


## Description

Teksta vērtību saraksts tiek savienots vienā teksta vērtībā.


## Syntax

```powerquery
Text.Combine(
    texts as list,
    optional separator as text
) as text
```


## Details

Tiek atgriezts rezultāts, kas iegūts, apvienojot <code>texts</code> teksta vērtību sarakstu vienā teksta vērtībā. Visas <code>null</code> vērtības, kas ir <code>texts</code>, tiek ignorētas.    Var norādīt neobligātu <code>separator</code>, kas tiek izmantots galīgajā kombinētajā tekstā.


## Examples

### Example #1 
Apvienojiet teksta vērtības Seattle un WA.
```powerquery
Text.Combine({"Seattle", "WA"})
```

Result: 
```powerquery
"SeattleWA"
```


### Example #2 
Apvienojiet teksta vērtības Seattle un WA, kas atdalītas ar komatu un atstarpi.
```powerquery
Text.Combine({"Seattle", "WA"}, ", ")
```

Result: 
```powerquery
"Seattle, WA"
```


### Example #3 
Apvienojiet vērtības Seattle, &lt;code&gt;null&lt;/code&gt; un WA, kas atdalītas ar komatu un atstarpi. (Ņemiet vērā, ka &lt;code&gt;null&lt;/code&gt; ir ignorēta.)
```powerquery
Text.Combine({"Seattle", null, "WA"}, ", ")
```

Result: 
```powerquery
"Seattle, WA"
```




## Category
Text.Transformations
