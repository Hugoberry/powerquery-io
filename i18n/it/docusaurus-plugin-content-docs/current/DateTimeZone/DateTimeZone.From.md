---
title: DateTimeZone.From
---

# DateTimeZone.From


## Description

Crea un elemento datetimezone dal valore specificato.


## Syntax

```powerquery
DateTimeZone.From(
    value as any,
    optional culture as text
) as datetimezone
```


## Details

Restituisce un valore <code>datetimezone</code> dall'elemento <code>value</code> specificato. È anche possibile specificare un valore <code>culture</code> facoltativo, ad esempio "it-IT".Se l'elemento specificato <code>value</code> è <code>Null</code>, <code>DateTimeZone.From</code> restituisce <code>Null</code>. Se l'elemento specificato <code>value</code> è <code>datetimezone</code>, viene restituito <code>value</code>. I valori dei tipi seguenti possono essere convertiti in un valore <code>datetimezone</code>:      <ul>        <li><code>text</code>: Un valore <code>datetimezone</code> dalla rappresentazione testuale. Per informazioni, vedere <code>DateTimeZone.FromText</code>.</li>        <li><code>date</code>: un valore <code>datetimezone</code> con <code>value</code> come componente data, <code>12:00:00 AM</code> come componente ora e la differenza corrispondente al fuso orario locale.</li>        <li><code>datetime</code>: un valore <code>datetimezone</code> con <code>value</code> come valore datetime e la differenza corrispondente al fuso orario locale.</li>        <li><code>time</code>: valore <code>datetimezone</code> con l'equivalente data della data di automazione OLE di <code>0</code> come componente data, <code>value</code> come componente ora e la differenza corrispondente al fuso orario locale.</li>        <li><code>numero</code>: Un valore <code>datetimezone</code> con l'equivalente datetime della data di automazione OLE espressa da <code>value</code> e la differenza corrispondente al fuso orario locale.</li>      </ul>Se <code>value</code> è di altro tipo, viene restituito un errore.


## Examples

### Example #1 
Converte &lt;code&gt;&#34;2020-10-30T01:30:00-08:00&#34;&lt;/code&gt; in un valore &lt;code&gt;datetimezone&lt;/code&gt;.
```powerquery
DateTimeZone.From("2020-10-30T01:30:00-08:00")
```

Result: 
```powerquery
#datetimezone(2020, 10, 30, 01, 30, 00, -8, 00)
```




## Category
DateTimeZone
