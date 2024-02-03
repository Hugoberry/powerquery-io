---
title: Date.From
---

# Date.From


## Description

Izveido datumu no sniegtās vērtības.


## Syntax

```powerquery
Date.From(
    value as any,
    optional culture as text
) as date
```


## Details

Atgriež <code>date</code> vērtību no norādītās vērtības <code>value</code>. Var norādīt arī neobligātu parametru <code>culture</code> (piemēram, "lv-LV").Ja norādītā vērtība <code>value</code> ir <code>Null</code>, <code>Date.From</code> atgriež <code>Null</code>. Ja norādītā vērtība <code>value</code> ir <code>date</code>, tiek atgriezts <code>value</code>. Tālāk minēto tipu vērtības var pārvērst par <code>date</code> vērtību.      <ul>        <li><code>text</code>: <code>date</code> vērtība no teksta atveidojuma. Papildinformāciju skatiet sadaļā <code>Date.FromText</code>.</li>        <li><code>datetime</code>: <code>value</code> datuma komponents.</li>        <li><code>datetimezone</code>: <code>value</code> vietējā datetime ekvivalenta datuma komponents.</li>        <li><code>number</code>: datetime ekvivalenta datuma komponents OLE automatizācijas datumam, kas izteikts ar <code>value</code>.</li>      </ul>Ja vērtībai <code>value</code> ir jebkāds cits tips, tiek atgriezta kļūda.


## Examples

### Example #1 
Pārveidojiet &lt;code&gt;43910&lt;/code&gt; par &lt;code&gt;date&lt;/code&gt; vērtību.
```powerquery
Date.From(43910)
```

Result: 
```powerquery
#date(2020, 3, 20)
```


### Example #2 
Pārveidojiet &lt;code&gt;#datetime(1899, 12, 30, 06, 45, 12)&lt;/code&gt; par &lt;code&gt;date&lt;/code&gt; vērtību.
```powerquery
Date.From(#datetime(1899, 12, 30, 06, 45, 12))
```

Result: 
```powerquery
#date(1899, 12, 30)
```




## Category
Date
