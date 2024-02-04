---
title: DateTimeZone.From
---

# DateTimeZone.From


## Description

Cria um datetimezone a partir do valor especificado.


## Syntax

```powerquery
DateTimeZone.From(
    value as any,
    optional culture as text
) as datetimezone
```


## Details

Devolve um valor <code>datetimezone</code> a partir do <code>value</code> especificado. Pode também ser fornecida um <code>culture</code> opcional (por exemplo, "en-US").Se o <code>value</code> especificado for <code>null</code>, <code>DateTimeZone.From</code> devolverá <code>null</code>. Se o <code>value</code> especificado for <code>datetimezone</code>, será devolvido <code>value</code>. É possível converter os seguintes tipos de valor num valor <code>datetimezone</code>:      <ul>        <li><code>text</code>: um valor <code>datetimezone</code> a partir da representação textual. Consulte <code>DateTimeZone.FromText</code> para obter detalhes.</li>        <li><code>date</code>: um <code>datetimezone</code> com <code>value</code> como componente de data, <code>12:00:00 AM</code> como componente de hora e o desfasamento correspondente ao fuso horário local.</li>        <li><code>datetime</code>: um <code>datetimezone</code> com <code>value</code> como datetime e o desfasamento correspondente ao fuso horário local.</li>        <li><code>time</code>: um <code>datetimezone</code> com o equivalente de data da Data de Automatização OLE <code>0</code> como componente de data, <code>value</code> como componente de hora e o desfasamento correspondente ao fuso horário local.</li>        <li><code>number</code>: um <code>datetimezone</code> com o equivalente de datetime da Data de Automatização de OLE expresso por <code>value</code> e o desfasamento correspondente ao fuso horário local.</li>      </ul>Se <code>value</code> for de qualquer outro tipo, será devolvido um erro.


## Examples

### Example #1 
Converter &lt;code&gt;&#34;2020-10-30T01:30:00-08:00&#34;&lt;/code&gt; num valor &lt;code&gt;datetimezone&lt;/code&gt;.
```powerquery
DateTimeZone.From("2020-10-30T01:30:00-08:00")
```

Result: 
```powerquery
#datetimezone(2020, 10, 30, 01, 30, 00, -8, 00)
```




## Category
DateTimeZone
