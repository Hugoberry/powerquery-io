---
title: Time.ToText
---

# Time.ToText


## Description

Devolve unha representación textual do valor de hora.


## Syntax

```powerquery
Time.ToText(
    time as time,
    optional options as any,
    optional culture as text
) as text
```


## Details

Devolve unha representación textual de <code>time</code>. Pódese fornecer un parámetro <code>record</code> opcional, <code>options</code>, para especificar propiedades adicionais. <code>culture</code> utilízase só para fluxos de traballo herdados. O <code>record</code> pode conter os seguintes campos:<ul>   <li><code>Format</code>: Un valor de <code>text</code> que indica o formato a utilizar. Para obter máis información, visita https://go.microsoft.com/fwlink/?linkid=2180104 e https://go.microsoft.com/fwlink/?linkid=2180105. Omitir este campo ou fornecer <code>null</code> dará lugar a formatar a data usando o valor predeterminado definido por <code>Culture</code>.</li>   <li><code>Culture</code>: Cando <code>Format</code> non é nulo, <code>Culture</code> controla algúns especificadores de formato. Por exemplo, en <code>"en-US"</code> <code>"tt"</code> é <code>"AM" ou "PM"</code>, mentres que en <code>"ar-EG"</code> <code>"tt"</code> is <code>"ص" ou "م"</code>. Cando <code>Format</code> é <code>null</code>, <code>Culture</code> controla o formato predefinida que se usa. Cando <code>Culture</code> é <code>null</code> ou se omite, úsase <code>Culture.Current</code>.</li></ul>Para admitir fluxos de traballo herdados, <code>options</code> e <code>culture</code> tamén poden ser valores de texto. Ten o mesmo comportamento coma se <code>options</code><code> = [Format = <code>options</code>, Culture = <code>culture</code>]</code>.


## Examples

### Example #1 
Converter &lt;code&gt;#time(01, 30, 25)&lt;/code&gt; nun valor de &lt;code&gt;text&lt;/code&gt;. &lt;i&gt;O resultado pode variar dependendo da cultura actual.&lt;/i&gt;
```powerquery
Time.ToText(#time(11, 56, 2))
```

Result: 
```powerquery
"11:56 AM"
```


### Example #2 
Converter usando un formato personalizado e a cultura alemá.
```powerquery
Time.ToText(#time(11, 56, 2), [Format="hh:mm", Culture="de-DE"])
```

Result: 
```powerquery
"11:56"
```


### Example #3 
Converter usando o formato de hora estándar.
```powerquery
Time.ToText(#time(11, 56, 2), [Format="T", Culture="de-DE"])
```

Result: 
```powerquery
"11:56:02"
```




## Category
Time
