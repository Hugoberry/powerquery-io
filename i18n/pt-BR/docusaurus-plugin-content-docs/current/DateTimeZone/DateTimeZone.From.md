---
title: DateTimeZone.From
---

# DateTimeZone.From


Cria um valor datetimezone a partir do valor especificado.


## Syntax

```powerquery
DateTimeZone.From(
    value as any,
    optional culture as text
) as datetimezone
```


## Remarks

Retorna um valor <code>datetimezone</code> do <code>value</code> fornecido. Um <code>culture</code> opcional também pode ser fornecido (por exemplo, "en-US").Se o <code>value</code> fornecido for <code>null</code>, <code>DateTimeZone.From</code> retorna <code>null</code>. Se o <code>value</code> fornecido for <code>datetimezone</code>, <code>value</code> será retornado. Os valores dos seguintes tipos podem ser convertidos em um valor <code>datetimezone</code>:      <ul>        <li><code>text</code>: um valor <code>datetimezone</code> da representação textual. Consulte <code>DateTimeZone.FromText</code> para obter detalhes.</li>        <li><code>date</code>: um <code>datetimezone</code> com <code>value</code> como o componente de data, <code>12:00:00 AM</code> como o componente de hora e o deslocamento correspondente ao fuso horário local.</li>        <li><code>datetime</code>: um <code>datetimezone</code> com <code>value</code> como o datetime e o deslocamento correspondente ao fuso horário local.</li>        <li><code>time</code>: um <code>datetimezone</code> com o equivalente de data da Data de Automação OLE de <code>0</code> como o componente de data, <code>value</code> como o componente de hora e o deslocamento correspondente ao fuso horário local.</li>        <li><code>number</code>: um <code>datetimezone</code> com o equivalente datetime da Data de Automação OLE expresso por <code>value</code> e o deslocamento correspondente ao fuso horário local.</li>      </ul>Se <code>value</code> for de qualquer outro tipo, um erro será retornado.


## Examples

### Example #1 
Converta &lt;code&gt;&#34;2020-10-30T01:30:00-08:00&#34;&lt;/code&gt; em um valor &lt;code&gt;datetimezone&lt;/code&gt;.
```powerquery
DateTimeZone.From("2020-10-30T01:30:00-08:00")
```

Result: 
```powerquery
#datetimezone(2020, 10, 30, 01, 30, 00, -8, 00)
```




## Category
DateTimeZone
