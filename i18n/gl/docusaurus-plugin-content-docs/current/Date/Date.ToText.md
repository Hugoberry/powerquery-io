---
title: Date.ToText
---

# Date.ToText


## Description

Devolve unha representación textual do valor de data.


## Syntax

```powerquery
Date.ToText(
    date as date,
    optional options as any,
    optional culture as text
) as text
```


## Details

Devolve unha representación textual de <code>date</code>. Pódese fornecer un parámetro <code>record</code> opcional, <code>options</code>, para especificar propiedades adicionais. <code>culture</code> utilízase só para fluxos de traballo herdados. O <code>record</code> pode conter os seguintes campos:<ul>   <li><code>Format</code>: Un valor de <code>text</code> que indica o formato a utilizar. Para obter máis información, visita https://go.microsoft.com/fwlink/?linkid=2180104 e https://go.microsoft.com/fwlink/?linkid=2180105. Omitir este campo ou fornecer <code>null</code> dará lugar a formatar a data usando o valor predeterminado definido por <code>Culture</code></li>.   <li><code>Culture</code>: Cando <code>Format</code> non é nulo, <code>Culture</code> controla algúns especificadores de formato. Por exemplo, en <code>"en-US"</code> <code>"MMM"</code> é <code>"Jan", "Feb", "Mar", ...</code>, mentres que en <code>"ru-RU"</code> <code>"MMM"</code> é <code>"янв", "фев", "мар", ...</code>. Cando <code>Format</code> é <code>null</code>, <code>Culture</code> controla o formato predefinido a utilizar. Cando <code>Culture</code> é <code>null</code> ou se omite, utilízase <code>Culture.Current</code>.</li></ul>Para admitir fluxos de traballo herdados, <code>options</code> e <code>culture</code> tamén poden ser valores de texto. Ten o mesmo comportamento coma se <code>options</code><code> = [Format = <code>options</code>, Culture = <code>culture</code>]</code>.


## Examples

### Example #1 
Converter &lt;code&gt;#date(2010, 12, 31)&lt;/code&gt; nun valor de &lt;code&gt;text&lt;/code&gt;. &lt;i&gt;O resultado pode variar dependendo da cultura actual.&lt;/i&gt;
```powerquery
Date.ToText(#date(2010, 12, 31))
```

Result: 
```powerquery
"12/31/2010"
```


### Example #2 
Converter usando un formato personalizado e a cultura alemá.
```powerquery
Date.ToText(#date(2010, 12, 31), [Format="dd MMM yyyy", Culture="de-DE"])
```

Result: 
```powerquery
"31 Dez 2010"
```


### Example #3 
Busca o ano no calendario Hijri que corresponde ao 1 de xaneiro de 2000 no calendario gregoriano.
```powerquery
Date.ToText(#date(2000, 1, 1), [Format="yyyy", Culture="ar-SA"])
```

Result: 
```powerquery
"1420"
```




## Category
Date
