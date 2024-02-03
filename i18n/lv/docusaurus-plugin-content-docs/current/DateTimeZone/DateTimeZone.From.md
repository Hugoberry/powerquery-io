---
title: DateTimeZone.From
---

# DateTimeZone.From


## Description

Izveido datetimezone vērtību no sniegtās vērtības.


## Syntax

```powerquery
DateTimeZone.From(
    value as any,
    optional culture as text
) as datetimezone
```


## Details

Atgriež <code>datetimezone</code> vērtību no norādītās vērtības <code>value</code>. Var norādīt arī neobligātu parametru <code>culture</code> (piemēram, "lv-LV").Ja norādītā vērtība <code>value</code> ir <code>Null</code>, <code>DateTimeZone.From</code> atgriež <code>Null</code>. Ja norādītā vērtība <code>value</code> ir <code>datetimezone</code>, tiek atgriezts <code>value</code>. Tālāk minēto tipu vērtības var pārvērst par <code>datetimezone</code> vērtību.      <ul>        <li><code>text</code>: <code>datetimezone</code> vērtība no teksta atveidojuma. Papildinformāciju skatiet sadaļā <code>DateTimeZone.FromText</code>.</li>        <li><code>date</code>: <code>datetimezone</code> vērtība ar <code>value</code> kā datuma komponentu, <code>12:00:00 AM</code> kā laika komponentu un vietējai laika joslai atbilstošo nobīdi.</li>        <li><code>datetime</code>: <code>datetimezone</code> vērtība ar <code>value</code> kā datetime vērtību un vietējai laika joslai atbilstošo nobīdi.</li>        <li><code>time</code>: <code>datetimezone</code> vērtība, kuras datuma komponents ir OLE automatizācijas datuma <code>0</code> ekvivalents, kuras laika komponents ir <code>value</code> un kuras nobīde atbilst vietējai laika joslai.</li>        <li><code>number</code>: <code>datetimezone</code> vērtība ar OLE automatizācijas datuma datetime ekvivalentu, kas izteikts ar <code>value</code>, un vietējai laika joslai atbilstošo nobīdi.</li>      </ul>Ja vērtībai <code>value</code> ir jebkāds cits tips, tiek atgriezta kļūda.


## Examples

### Example #1 
Pārveidojiet &lt;code&gt;&#34;2020-10-30T01:30:00-08:00&#34;&lt;/code&gt; par &lt;code&gt;datetimezone&lt;/code&gt; vērtību.
```powerquery
DateTimeZone.From("2020-10-30T01:30:00-08:00")
```

Result: 
```powerquery
#datetimezone(2020, 10, 30, 01, 30, 00, -8, 00)
```




## Category
DateTimeZone
