---
title: DateTime.FromText
---

# DateTime.FromText


## Description

Crea unha data, hora e fuso a partir de formatos de data e hora universal e local.


## Syntax

```powerquery
DateTime.FromText(
    text as text,
    optional options as any
) as datetime
```


## Details

Crea un valor <code>datetime</code> a partir dunha representación textual, <code>text</code>. Pódese fornecer un parámetro <code>record</code> opcional, <code>options</code> para especificar propiedades adicionais. <code>record</code> pode conter os seguintes campos:<ul>   <li><code>Format</code>: Un valor de <code>text</code> que indica o formato a utilizar. Para obter máis información, visita https://go.microsoft.com/fwlink/?linkid=2180104 e https://go.microsoft.com/fwlink/?linkid=2180105. Omitir este campo ou fornecer <code>null</code> dará lugar a analizar a data facendo o todo o posible.</li>   <li><code>Culture</code>: Cando <code>Format</code> non é nulo, <code>Culture</code> controla algúns especificadores de formato. Por exemplo, en <code>"en-US"</code> <code>"MMM"</code> é <code>"Jan", "Feb", "Mar", ...</code>, mentres que en <code>"ru-RU"</code> <code>"MMM"</code> é <code>"янв", "фев", "мар", ...</code>. Cando <code>Format</code> é <code>null</code>, <code>Culture</code> controla o formato predefinido a utilizar. Cando <code>Culture</code> é <code>null</code> ou se omite, utilízase <code>Culture.Current</code>.</li></ul>Para admitir fluxos de traballo herdados, <code>options</code> tamén pode ser un valor de texto. Ten o mesmo comportamento coma se <code>options</code><code> = [Format = null, Culture = <code>options</code>]</code>.


## Examples

### Example #1 
Converter &lt;code&gt;&#34;2010-12-31T01:30:00&#34;&lt;/code&gt; nun valor de data e hora.
```powerquery
DateTime.FromText("2010-12-31T01:30:25")
```

Result: 
```powerquery
#datetime(2010, 12, 31, 1, 30, 25)
```


### Example #2 
Converter &lt;code&gt;&#34;2010-12-31T01:30:00.121212&#34;&lt;/code&gt; nun valor de data e hora.
```powerquery
DateTime.FromText("30 Dez 2010 02:04:50.369730", [Format="dd MMM yyyy HH:mm:ss.ffffff", Culture="de-DE"])
```

Result: 
```powerquery
#datetime(2010, 12, 30, 2, 4, 50.36973)
```


### Example #3 
Converter &lt;code&gt;&#34;2010-12-31T01:30:00&#34;&lt;/code&gt; nun valor de data e hora.
```powerquery
DateTime.FromText("2000-02-08T03:45:12Z", [Format="yyyy-MM-dd'T'HH:mm:ss'Z'", Culture="en-US"])
```

Result: 
```powerquery
#datetime(2000, 2, 8, 3, 45, 12)
```


### Example #4 
Converter &lt;code&gt;&#34;20101231T013000&#34;&lt;/code&gt; nun valor de data e hora.
```powerquery
DateTime.FromText("20101231T013000", [Format="yyyyMMdd'T'HHmmss", Culture="en-US"])
```

Result: 
```powerquery
#datetime(2010, 12, 31, 1, 30, 0)
```




## Category
DateTime
