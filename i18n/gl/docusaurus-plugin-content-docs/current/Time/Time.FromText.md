---
title: Time.FromText
---

# Time.FromText


## Description

Crea unha hora a partir de formatos de hora locais e universais e personalizados.


## Syntax

```powerquery
Time.FromText(
    text as text,
    optional options as any
) as time
```


## Details

Crea un valor <code>time</code> a partir dunha representación textual, <code>text</code>. Pódese fornecer un parámetro <code>record</code> opcional, <code>options</code> para especificar propiedades adicionais. <code>record</code> pode conter os seguintes campos:<ul>   <li><code>Format</code>: Un valor de <code>text</code> que indica o formato a utilizar. Para obter máis información, visita https://go.microsoft.com/fwlink/?linkid=2180104 e https://go.microsoft.com/fwlink/?linkid=2180105. Omitir este campo ou fornecer <code>null</code> dará lugar a analizar a hora facendo o todo o posible.</li>   <li><code>Culture</code>: Cando <code>Format</code> non é nulo, <code>Culture</code> controla algúns especificadores de formato. Por exemplo, en <code>"en-US"</code> <code>"tt"</code> é <code>"AM" ou "PM"</code>, mentres que en <code>"ar-EG"</code> <code>"tt"</code> is <code>"ص" ou "م"</code>. Cando <code>Format</code> é <code>null</code>, <code>Culture</code> controla o formato predefinido a utilizar. Cando <code>Culture</code> é <code>null</code> ou se omite, utilízase <code>Culture.Current</code>.</li></ul>Para admitir fluxos de traballo herdados, <code>options</code> tamén pode ser un valor de texto. Ten o mesmo comportamento coma se <code>options</code><code> = [Format = null, Culture = <code>options</code>]</code>.


## Examples

### Example #1 
Converter &lt;code&gt;&#34;10:12:31am&#34;&lt;/code&gt; nun valor de hora.
```powerquery
Time.FromText("10:12:31am")
```

Result: 
```powerquery
#time(10, 12, 31)
```


### Example #2 
Converte &lt;code&gt;&#34;1012&#34;&lt;/code&gt; nun valor de Hora.
```powerquery
Time.FromText("1012")
```

Result: 
```powerquery
#time(10, 12, 00)
```


### Example #3 
Converte &lt;code&gt;&#34;10&#34;&lt;/code&gt; nun valor de Hora.
```powerquery
Time.FromText("10")
```

Result: 
```powerquery
#time(10, 00, 00)
```




## Category
Time
