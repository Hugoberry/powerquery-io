---
title: Date.ToText
---

# Date.ToText


## Description

Devolve uma representação textual do valor de data.


## Syntax

```powerquery
Date.ToText(
    date as date,
    optional options as any,
    optional culture as text
) as text
```


## Details

Devolve uma representação de texto de <code>date</code>. Um parâmetro opcional <code>record</code> <code>options</code>, poderá ser fornecido para especificar propriedades adicionais. <code>culture</code> é apenas utilizado para fluxos de trabalho de legado. O <code>record</code> pode conter os seguintes campos:<ul>   <li><code>Format</code>: Um valor <code>text</code> que indica o formato a utilizar. Para mais detalhes, aceda a https://go.microsoft.com/fwlink/?linkid=2180104 e https://go.microsoft.com/fwlink/?linkid=2180105. Omitir este campo ou fornecer <code>null</code> irá resultar na formatação da data utilizando a predifinição fornecida por <code>Culture</code>.</li>   <li><code>Culture</code>: Quando <code>Format</code> não é nulo, <code>Culture</code> controla algumas especificações de formatos. Por exemplo, em <code>"en-US"</code> <code>"MMM"</code> é <code>"Jan", "Feb", "Mar", ...</code>, enquanto que em <code>"ru-RU"</code> <code>"MMM"</code> é <code>"янв", "фев", "мар", ...</code>. Quando <code>Format</code> é <code>null</code>, <code>Culture</code> controla o formato predefindo a utilizar. Quando <code>Culture</code> é <code>null</code> ou omitido, <code>Culture.Current</code> é utilizado.</li></ul>Para suportar fluxos de trabalho de legado, <code>options</code> e <code>culture</code> também poderão ser valores de texto. Isto tem o mesmo comportamento que se <code>options</code><code> = [Format = <code>options</code>, Culture = <code>culture</code>]</code>.


## Examples

### Example #1 
Converter &lt;code&gt;#date(2010, 12, 31)&lt;/code&gt; num valor de &lt;code&gt;text&lt;/code&gt;. &lt;i&gt;O resultado pode variar dependendo da cultura atual.&lt;/i&gt;
```powerquery
Date.ToText(#date(2010, 12, 31))
```

Result: 
```powerquery
"12/31/2010"
```


### Example #2 
Converter com um formato personalizado e a cultura alemã.
```powerquery
Date.ToText(#date(2010, 12, 31), [Format="dd MMM yyyy", Culture="de-DE"])
```

Result: 
```powerquery
"31 Dez 2010"
```


### Example #3 
Encontrar o ano no calendário hijri que corresponde a 1 de janeiro de 2000 no calendário gregoriano.
```powerquery
Date.ToText(#date(2000, 1, 1), [Format="yyyy", Culture="ar-SA"])
```

Result: 
```powerquery
"1420"
```




## Category
Date
