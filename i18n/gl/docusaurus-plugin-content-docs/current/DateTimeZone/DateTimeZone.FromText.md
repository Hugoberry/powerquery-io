---
title: DateTimeZone.FromText
---

# DateTimeZone.FromText


## Description

Crea unha datetimezone a partir de formatos de datetimezone locais, universais e personalizados.


## Syntax

```powerquery
DateTimeZone.FromText(
    text as text,
    optional options as any
) as datetimezone
```


## Details

Crea un valor <code>datetimezone</code> a partir dunha representación textual, <code>text</code>. Pódese fornecer un parámetro <code>record</code> opcional, <code>options</code> para especificar propiedades adicionais. <code>record</code> pode conter os seguintes campos:<ul>   <li><code>Format</code>: Un valor de <code>text</code> que indica o formato a utilizar. Para obter máis información, visita https://go.microsoft.com/fwlink/?linkid=2180104 e https://go.microsoft.com/fwlink/?linkid=2180105. Omitir este campo ou fornecer <code>null</code> dará lugar a analizar a data facendo o todo o posible.</li>   <li><code>Culture</code>: Cando <code>Format</code> non é nulo, <code>Culture</code> controla algúns especificadores de formato. Por exemplo, en <code>"en-US"</code> <code>"MMM"</code> é <code>"Jan", "Feb", "Mar", ...</code>, mentres que en <code>"ru-RU"</code> <code>"MMM"</code> é <code>"янв", "фев", "мар", ...</code>. Cando <code>Format</code> é <code>null</code>, <code>Culture</code> controla o formato predefinido a utilizar. Cando <code>Culture</code> é <code>null</code> ou se omite, utilízase <code>Culture.Current</code>.</li></ul>Para admitir fluxos de traballo herdados, <code>options</code> tamén pode ser un valor de texto. Ten o mesmo comportamento coma se <code>options</code><code> = [Format = null, Culture = <code>options</code>]</code>.


## Examples

### Example #1 
Converter &lt;code&gt;&#34;2010-12-31T01:30:00-08:00&#34;&lt;/code&gt; nun valor &lt;code&gt;datetimezone&lt;/code&gt;.
```powerquery
DateTimeZone.FromText("2010-12-31T01:30:00-08:00")
```

Result: 
```powerquery
#datetimezone(2010, 12, 31, 1, 30, 0, -8, 0)
```


### Example #2 
Converter usando un formato personalizado e a cultura alemá.
```powerquery
DateTimeZone.FromText("30 Dez 2010 02:04:50.369730 +02:00", [Format="dd MMM yyyy HH:mm:ss.ffffff zzz", Culture="de-DE"])
```

Result: 
```powerquery
#datetimezone(2010, 12, 30, 2, 4, 50.36973, 2, 0)
```


### Example #3 
Converter usando ISO 8601.
```powerquery
DateTimeZone.FromText("2009-06-15T13:45:30.0000000-07:00", [Format="O", Culture="en-US"])
```

Result: 
```powerquery
#datetimezone(2009, 6, 15, 13, 45, 30, -7, 0)
```




## Category
DateTimeZone
