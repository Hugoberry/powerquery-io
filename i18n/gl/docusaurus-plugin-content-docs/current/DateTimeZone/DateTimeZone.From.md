---
title: DateTimeZone.From
---

# DateTimeZone.From


## Description

Crea un data, hora e fuso a partir do valor indicado.


## Syntax

```powerquery
DateTimeZone.From(
    value as any,
    optional culture as text
) as datetimezone
```


## Details

Devolve un valor <code>datetimezone</code> a partir do <code>value</code> indicado. Tamén se pode fornecer unha <code>culture</code> opcional (por exemplo, "gl-ES").Se o valor <code>value</code> é <code>null</code>, <code>DateTimeZone.From</code> devolve <code>null</code>. Se o valor <code>value</code> é <code>datetimezone</code>, devólvese <code>value</code>. Pódense converter a un valor <code>datetimezone</code> os valores dos seguintes tipos:      <ul>        <li><code>text</code>: un valor <code>datetimezone</code> a partir da representación textual. Consulte <code>DateTimeZone.FromText</code> para obter máis información.</li>        <li><code>date</code>: un valor <code>datetimezone</code> con <code>value</code> como o compoñente de data, <code>12:00:00 AM</code> como o compoñente de hora e o desprazamento correspondente ao fuso horario local.</li>        <li><code>datetime</code>: un valor <code>datetimezone</code> con <code>value</code> como data e hora e o desprazamento correspondente ao fuso horario local.</li>        <li><code>time</code>: un valor <code>datetimezone</code> coa data equivalente da data de OLE Automation de <code>0</code> como o compoñente de data, <code>value</code> como o compoñente de hora e o desprazamento correspondente ao fuso horario local.</li>        <li><code>number</code>: un valor <code>datetimezone</code> coa data e hora equivalente da data de OLE Automation expresado por <code>value</code> e o desprazamento correspondente ao fuso horario local.</li>      </ul>Se <code>value</code> é de calquera outro tipo, devólvese un erro.


## Examples

### Example #1 
Converter &lt;code&gt;&#34;2020-10-30T01:30:00-08:00&#34;&lt;/code&gt; nun valor &lt;code&gt;datetimezone&lt;/code&gt;.
```powerquery
DateTimeZone.From("2020-10-30T01:30:00-08:00")
```

Result: 
```powerquery
#datetimezone(2020, 10, 30, 01, 30, 00, -8, 00)
```




## Category
DateTimeZone
