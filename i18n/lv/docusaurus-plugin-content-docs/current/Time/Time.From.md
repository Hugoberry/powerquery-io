---
title: Time.From
---

# Time.From


## Description

Tiek izveidots laiks no sniegtās vērtības.


## Syntax

```powerquery
Time.From(
    value as any,
    optional culture as text
) as time
```


## Details

Atgriež tipa <code>time</code> vērtību, kas ir iegūta no norādītās vērtības <code>value</code>. Var norādīt arī neobligātu parametru <code>culture</code> (piemēram, "lv-LV").Ja norādītā vērtība <code>value</code> ir <code>Null</code>, funkcija <code>Time.From</code> atgriež vērtību <code>Null</code>. Ja norādītās vērtības <code>value</code> tips ir <code>time</code>, tiek atgriezta vērtība <code>value</code>. Par tipa <code>time</code> vērtību var pārvērst tālāk norādīto tipu vērtības.      <ul>        <li><code>text</code>: <code>time</code> vērtība no teksta atveidojuma. Papildinformāciju skatiet sadaļā <code>Time.FromText</code>.</li>        <li><code>datetime</code>: <code>value</code> laika komponents.</li>        <li><code>datetimezone</code>: <code>value</code> vietējā datetime ekvivalenta laika komponents.</li>        <li><code>number</code>: <code>time</code> ekvivalents dienu daļu skaitam, kas izteikts ar <code>value</code>. Ja <code>value</code> ir negatīvs vai lielāks par vai vienāds ar1, tiek atgriezta kļūda.</li>      </ul><code>value</code>Ja vērtībai  ir jebkāds cits tips, tiek atgriezta kļūda.


## Examples

### Example #1 
Pārvērtiet vērtību &lt;code&gt;0.7575&lt;/code&gt; par tipa &lt;code&gt;time&lt;/code&gt; vērtību.
```powerquery
Time.From(0.7575)
```

Result: 
```powerquery
#time(18, 10, 48)
```


### Example #2 
Pārvērtiet vērtību &lt;code&gt;#datetime(1899, 12, 30, 06, 45, 12)&lt;/code&gt; par tipa &lt;code&gt;time&lt;/code&gt; vērtību.
```powerquery
Time.From(#datetime(1899, 12, 30, 06, 45, 12))
```

Result: 
```powerquery
#time(06, 45, 12)
```




## Category
Time
