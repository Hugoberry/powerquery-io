---
title: Date.FromText
---

# Date.FromText


## Description

Crea unha data a partir de formatos de data locais, universais e personalizados.


## Syntax

```powerquery
Date.FromText(
    text as text,
    optional options as any
) as date
```


## Details

Crea un valor <code>date</code> a partir dunha representación textual, <code>text</code>. Pódese fornecer un parámetro <code>record</code> opcional, <code>options</code> para especificar propiedades adicionais. <code>record</code> pode conter os seguintes campos:<ul>   <li><code>Format</code>: Un valor de <code>text</code> que indica o formato a utilizar. Para obter máis información, visita https://go.microsoft.com/fwlink/?linkid=2180104 e https://go.microsoft.com/fwlink/?linkid=2180105. Omitir este campo ou fornecer <code>null</code> dará lugar a analizar a data facendo o todo o posible.</li>   <li><code>Culture</code>: Cando <code>Format</code> non é nulo, <code>Culture</code> controla algúns especificadores de formato. Por exemplo, en <code>"en-US"</code> <code>"MMM"</code> é <code>"Jan", "Feb", "Mar", ...</code>, mentres que en <code>"ru-RU"</code> <code>"MMM"</code> é <code>"янв", "фев", "мар", ...</code>. Cando <code>Format</code> é <code>null</code>, <code>Culture</code> controla o formato predefinido a utilizar. Cando <code>Culture</code> é <code>null</code> ou se omite, utilízase <code>Culture.Current</code>.</li></ul>Para admitir fluxos de traballo herdados, <code>options</code> tamén pode ser un valor de texto. Ten o mesmo comportamento coma se <code>options</code><code> = [Format = null, Culture = <code>options</code>]</code>.


## Examples

### Example #1 
Converter &lt;code&gt;&#34;2010-12-31&#34;&lt;/code&gt; nun valor &lt;code&gt;date&lt;/code&gt;.
```powerquery
Date.FromText("2010-12-31")
```

Result: 
```powerquery
#date(2010, 12, 31)
```


### Example #2 
Converter usando un formato personalizado e a cultura alemá.
```powerquery
Date.FromText("30 Dez 2010", [Format="dd MMM yyyy", Culture="de-DE"])
```

Result: 
```powerquery
#date(2010, 12, 30)
```


### Example #3 
Busca a data no calendario gregoriano que corresponde a principios de 1400 no calendario Hijri.
```powerquery
Date.FromText("1400", [Format="yyyy", Culture="ar-SA"])
```

Result: 
```powerquery
#date(1979, 11, 20)
```




## Category
Date
