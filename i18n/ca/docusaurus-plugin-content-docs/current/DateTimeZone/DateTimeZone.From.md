---
title: DateTimeZone.From
---

# DateTimeZone.From


## Description

Crea un valor datetimezone a partir del valor donat.


## Syntax

```powerquery
DateTimeZone.From(
    value as any,
    optional culture as text
) as datetimezone
```


## Details

Retorna un valor <code>datetimezone</code> a partir del valor <code>value</code> proporcionat. També es pot proporcionar un valor <code>culture</code> (per exemple, "en-US").Si el valor <code>value</code> proporcionat és <code>null</code>, <code>DateTimeZone.From</code> retorna <code>null</code>. Si el valor <code>value</code> proporcionat és <code>datetimezone</code>, es retorna el valor <code>value</code>. Els valors dels tipus que s'indiquen a continuació es poden convertir en un valor <code>datetimezone</code>:      <ul>        <li><code>text</code>: valor <code>datetimezone</code> a partir d'una representació textual. Consulteu <code>DateTimeZone.FromText</code> per obtenir-ne informació.</li>        <li><code>date</code>: valor <code>datetimezone</code> amb l'element <code>value</code> com a component de data, <code>12:00:00 AM</code> com a component d'hora i el desplaçament corresponent al fus horari local.</li>        <li><code>datetime</code>: valor <code>datetimezone</code> amb l'element <code>value</code> com a data i hora i el desplaçament corresponent al fus horari local.</li>        <li><code>time</code>: valor <code>datetimezone</code> amb l'equivalent de la data d'automatització OLE <code>0</code> com a component de data, l'element <code>value</code> com a component d'hora i el desplaçament corresponent al fus horari local.</li>        <li><code>number</code>: valor <code>datetimezone</code> amb l'equivalent del datetime de la data d'automatització OLE expressada per l'element <code>value</code> i el desplaçament corresponent al fus horari local.</li>      </ul>Si el valor <code>value</code> és de qualsevol altre tipus, es retorna un error.


## Examples

### Example #1 
Converteix &lt;code&gt;&#34;2020-10-30T01:30:00-08:00&#34;&lt;/code&gt; en un valor &lt;code&gt;datetimezone&lt;/code&gt;.
```powerquery
DateTimeZone.From("2020-10-30T01:30:00-08:00")
```

Result: 
```powerquery
#datetimezone(2020, 10, 30, 01, 30, 00, -8, 00)
```




## Category
DateTimeZone
