---
title: DateTimeZone.From
---

# DateTimeZone.From


## Description

Crea un datetimezone a partir del valor dado.


## Syntax

```powerquery
DateTimeZone.From(
    value as any,
    optional culture as text
) as datetimezone
```


## Details

Devuelve un valor <code>datetimezone</code> del <code>value</code>especificado. También se puede proporcionar un <code>culture</code> opcional (por ejemplo, "en-US").Si el <code>value</code> especificado es <code>null</code>, <code>DateTimeZone.From</code> devuelve <code>null</code>. Si el <code>value</code> especificado es <code>datetimezone</code>, se devuelve <code>value</code>. Los valores de los tipos siguientes se pueden convertir en un valor <code>datetimezone</code>:      <ul>        <li><code>text</code>: un valor <code>datetimezone</code> de la representación textual. Consulte <code>DateTimeZone.FromText</code> para obtener más información.</li>        <li><code>date</code>: un <code>datetimezone</code> con <code>value</code> como componente de fecha, <code>12:00:00 AM</code> como el componente de hora y el desplazamiento correspondiente a la zona horaria local.</li>        <li><code>datetime</code>: un <code>datetimezone</code> con <code>value</code> como fecha y hora y el desplazamiento correspondiente a la zona horaria local.</li>        <li><code>time</code>: <code>datetimezone</code> con la fecha equivalente a la fecha de automatización OLE de <code>0</code> como el componente de fecha, <code>value</code> como el componente de hora y el desplazamiento correspondiente a la zona horaria local.</li>        <li><code>number</code>: un <code>datetimezone</code> con el equivalente datetime de la fecha de automatización OLE expresada por <code>value</code> y el desplazamiento correspondiente a la zona horaria local.</li>      </ul>Si <code>value</code> es de cualquier otro tipo, se devuelve un error.


## Examples

### Example #1 
Convertir &lt;code&gt;&#34;2020-10-30T01:30:00-08:00&#34;&lt;/code&gt;en un valor &lt;code&gt;datetimezone&lt;/code&gt;.
```powerquery
DateTimeZone.From("2020-10-30T01:30:00-08:00")
```

Result: 
```powerquery
#datetimezone(2020, 10, 30, 01, 30, 00, -8, 00)
```




## Category
DateTimeZone
