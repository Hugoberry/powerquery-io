---
title: DateTimeZone.ToText
---

# DateTimeZone.ToText


## Description

Devolve unha representación textual do valor de data, hora e fuso.


## Syntax

```powerquery
DateTimeZone.ToText(
    dateTimeZone as datetimezone,
    optional options as any,
    optional culture as text
) as text
```


## Details

Devolve unha representación textual de <code>dateTimeZone</code>. Pódese fornecer un parámetro <code>record</code> opcional, <code>options</code>, para especificar propiedades adicionais. <code>culture</code> utilízase só para fluxos de traballo herdados. O <code>record</code> pode conter os seguintes campos:<ul>   <li><code>Format</code>: Un valor de <code>text</code> que indica o formato a utilizar. Para obter máis información, visita https://go.microsoft.com/fwlink/?linkid=2180104 e https://go.microsoft.com/fwlink/?linkid=2180105. Omitir este campo ou fornecer <code>null</code> dará lugar a formatar a data usando o valor predeterminado definido por <code>Culture</code></li>.   <li><code>Culture</code>: Cando <code>Format</code> non é nulo, <code>Culture</code> controla algúns especificadores de formato. Por exemplo, en <code>"en-US"</code> <code>"MMM"</code> é <code>"Jan", "Feb", "Mar", ...</code>, mentres que en <code>"ru-RU"</code> <code>"MMM"</code> é <code>"янв", "фев", "мар", ...</code>. Cando <code>Format</code> é <code>null</code>, <code>Culture</code> controla o formato predefinido a utilizar. Cando <code>Culture</code> é <code>null</code> ou se omite, utilízase <code>Culture.Current</code>.</li></ul>Para admitir fluxos de traballo herdados, <code>options</code> e <code>culture</code> tamén poden ser valores de texto. Ten o mesmo comportamento coma se <code>options</code><code> = [Format = <code>options</code>, Culture = <code>culture</code>]</code>.


## Examples

### Example #1 
Converter &lt;code&gt;#datetimezone(2010, 12, 31, 01, 30, 25, 2, 0)&lt;/code&gt; nun valor de &lt;code&gt;text&lt;/code&gt;. &lt;i&gt;O resultado pode variar dependendo da cultura actual.&lt;/i&gt;
```powerquery
DateTimeZone.ToText(#datetimezone(2010, 12, 31, 01, 30, 25, 2, 0))
```

Result: 
```powerquery
"12/31/2010 1:30:25 AM +02:00"
```


### Example #2 
Converter usando un formato personalizado e a cultura alemá.
```powerquery
DateTimeZone.ToText(#datetimezone(2010, 12, 30, 2, 4, 50.36973, -8,0), [Format="dd MMM yyyy HH:mm:ss.ffffff zzz", Culture="de-DE"])
```

Result: 
```powerquery
"30 Dez 2010 02:04:50.369730 -08:00"
```


### Example #3 
Converter usando o padrón ISO 8601.
```powerquery
DateTimeZone.ToText(#datetimezone(2000, 2, 8, 3, 45, 12, 2, 0),[Format="O", Culture="en-US"])
```

Result: 
```powerquery
"2000-02-08T03:45:12.0000000+02:00"
```




## Category
DateTimeZone
