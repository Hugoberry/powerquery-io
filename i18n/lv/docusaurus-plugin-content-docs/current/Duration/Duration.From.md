---
title: Duration.From
---

# Duration.From


## Description

Izveido ilgumu no sniegtās vērtības.


## Syntax

```powerquery
Duration.From(
    value as any
) as duration
```


## Details

Atgriež <code>duration</code> vērtību no norādītās vērtības <code>value</code>. Ja norādītā vērtība <code>value</code> ir <code>Null</code>, <code>Duration.From</code> atgriež <code>Null</code>.  Ja norādītā vērtība <code>value</code> ir <code>duration</code>, tiek atgriezts <code>value</code>. Tālāk minēto tipu vērtības var pārvērst par <code>duration</code> vērtību.      <ul>        <li><code>text</code>: <code>duration</code> vērtība no teksta pagājušā laika formām (d.h:m:s). Papildinformāciju skatiet sadaļā <code>Duration.FromText</code>.</li>        <li><code>number</code>: <code>duration</code> ekvivalents veselam un daļējam dienu skaitam, kas izteikts ar <code>value</code>.</li>      </ul>Ja vērtībai <code>value</code> ir jebkāds cits tips, tiek atgriezta kļūda.


## Examples

### Example #1 
Pārveidojiet &lt;code&gt;2.525&lt;/code&gt; par &lt;code&gt;duration&lt;/code&gt; vērtību.
```powerquery
Duration.From(2.525)
```

Result: 
```powerquery
#duration(2, 12, 36, 0)
```




## Category
Duration
