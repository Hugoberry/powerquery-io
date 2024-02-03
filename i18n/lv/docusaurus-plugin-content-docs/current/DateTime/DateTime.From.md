---
title: DateTime.From
---

# DateTime.From


## Description

Izveido datetime vērtību no sniegtās vērtības.


## Syntax

```powerquery
DateTime.From(
    value as any,
    optional culture as text
) as datetime
```


## Details

Atgriež <code>datetime</code> vērtību no norādītās vērtības <code>value</code>. Var norādīt arī neobligātu parametru <code>culture</code> (piemēram, "lv-LV").Ja norādītā vērtība <code>value</code> ir <code>Null</code>, <code>DateTime.From</code> atgriež <code>Null</code>. Ja norādītā vērtība <code>value</code> ir <code>datetime</code>, tiek atgriezts <code>value</code>. Tālāk minēto tipu vērtības var pārvērst par <code>datetime</code> vērtību.      <ul>        <li><code>text</code>: <code>datetime</code> vērtība no teksta atveidojuma. Papildinformāciju skatiet sadaļā <code>DateTime.FromText</code>.</li>        <li><code>date</code>: <code>datetime</code> vērtība ar <code>value</code> kā datuma komponentu un <code>12:00:00 AM</code> kā laika komponentu.</li>        <li><code>datetimezone</code>: vietējais <code>datetime</code> ekvivalents vērtībai <code>value</code>.</li>        <li><code>time</code>: <code>datetime</code> vērtība, kuras datuma komponents ir OLE automatizācijas datuma <code>0</code> ekvivalents un kuras laika komponents ir <code>value</code>.</li>        <li><code>number</code>: <code>datetime</code> vērtības ekvivalents OLE automatizācijas datumam, kas izteikts ar <code>value</code>. </li>      </ul>Ja vērtībai <code>value</code> ir jebkāds cits tips, tiek atgriezta kļūda.


## Examples

### Example #1 
Pārveidojiet &lt;code&gt;#time(06, 45, 12)&lt;/code&gt; par &lt;code&gt;datetime&lt;/code&gt; vērtību.
```powerquery
DateTime.From(#time(06, 45, 12))
```

Result: 
```powerquery
#datetime(1899, 12, 30, 06, 45, 12)
```


### Example #2 
Pārveidojiet &lt;code&gt;#date(1975, 4, 4)&lt;/code&gt; par &lt;code&gt;datetime&lt;/code&gt; vērtību.
```powerquery
DateTime.From(#date(1975, 4, 4))
```

Result: 
```powerquery
#datetime(1975, 4, 4, 0, 0, 0)
```




## Category
DateTime
