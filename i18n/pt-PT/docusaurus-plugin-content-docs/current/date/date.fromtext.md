---
title: Date.FromText
---

# Date.FromText


Cria uma Data a partir de formatos de Data locais, universais e personalizados.


## Syntax

```powerquery
Date.FromText(
    text as text,
    optional options as any
) as date
```


## Remarks

Cria um valor <code>date</code> a partir de uma representação textual, <code>text</code>. Um parâmetro <code>record</code> opcional, <code>options</code> pode ser fornecido para especificar propriedades adicionais. O <code>record</code> pode conter os seguintes campos:<ul>   <li><code>Format</code>: Um valor de <code>text</code> que indica o formato a utilizar. Para mais detalhes, aceda a https://go.microsoft.com/fwlink/?linkid=2180104 e https://go.microsoft.com/fwlink/?linkid=2180105. Omitir este campo ou fornecer <code>null</code> resultará na análise da data com o melhor esforço.</li>   <li><code>Culture</code>: Quando o <code>Format</code> não é nulo, a <code>Culture</code> controla alguns especificadores de formato.. Por exemplo, em <code>"en-US"</code> <code>"MMM"</code> é <code>"Jan", "Feb", "Mar", ...</code>, enquanto que <code>"ru-RU"</code> <code>"MMM"</code> é <code>"янв", "фев", "мар", ...</code>. Quando <code>Format</code> é <code>null</code>, <code>Culture</code> controla o formato a utilizar. Quando <code>Culture</code> é <code>null</code> ou omitido <code>Culture.Current</code> é utilizado.</li></ul>Para apoiar fluxos de trabalho de legado, <code>options</code> poderá também ser um valor de texto. Isto tem o mesmo comportamento que se <code>options</code><code> = [Format = null, Culture = <code>options</code>]</code>.


## Examples

### Example #1 
Converter &lt;code&gt;&#34;2010-12-31&#34;&lt;/code&gt; num valor &lt;code&gt;date&lt;/code&gt;.
```powerquery
Date.FromText("2010-12-31")
```

Result: 
```powerquery
#date(2010, 12, 31)
```


### Example #2 
Converter com um formato personalizado e a cultura alemã.
```powerquery
Date.FromText("30 Dez 2010", [Format="dd MMM yyyy", Culture="de-DE"])
```

Result: 
```powerquery
#date(2010, 12, 30)
```


### Example #3 
Encontrar a data no calendário gregoriano que corresponde ao início de 1400 no calendário hijri.
```powerquery
Date.FromText("1400", [Format="yyyy", Culture="ar-SA"])
```

Result: 
```powerquery
#date(1979, 11, 20)
```




## Category
Date
