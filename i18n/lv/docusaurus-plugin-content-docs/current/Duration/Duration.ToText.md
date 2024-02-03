---
title: Duration.ToText
---

# Duration.ToText


## Description

Atgriež tekstu formā d.h:m:s.


## Syntax

```powerquery
Duration.ToText(
    duration as duration,
    optional format as text
) as text
```


## Details

Atgriež norādītās ilguma vērtības <code>duration</code> teksta izteiksmi formātā “dienas:stundas:minūtes:sekundes”. <ul>        <li><code>duration</code>: vērtība formātā <code>duration</code>, no kuras tiek aprēķināta teksta izteiksme.</li>  <li><code>format</code>: <i>[Neobligāti]</i> Novecojis. Tiks atgriezta kļūda, ja šī parametra vērtība nebūs Null.</li>      </ul>


## Examples

### Example #1 
Pārveidojiet &lt;code&gt;#duration(2, 5, 55, 20)&lt;/code&gt; par teksta vērtību.
```powerquery
Duration.ToText(#duration(2, 5, 55, 20))
```

Result: 
```powerquery
"2.05:55:20"
```




## Category
Duration
