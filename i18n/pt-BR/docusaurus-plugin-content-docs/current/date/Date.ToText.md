---
title: Date.ToText
---

# Date.ToText


Retorna uma representação textual do valor da data.


## Syntax

```powerquery
Date.ToText(
    date as date,
    optional options as any,
    optional culture as text
) as text
```


## Remarks

Retorna uma representação textual de <code>date</code>. Um parâmetro <code>record</code> opcional, <code>options</code>, pode ser fornecido para especificar propriedades adicionais. <code>culture</code> só é usado para fluxos de trabalho herdados. O <code>record</code> pode conter os seguintes campos:<ul>   <li><code>Format</code>: Um valor <code>text</code> que indica o formato a ser usado. Para obter mais detalhes, acesse https://go.microsoft.com/fwlink/?linkid=2180104 e https://go.microsoft.com/fwlink/?linkid=2180105. Omitir este campo ou fornecer <code>null</code> resultará na formatação da data usando o padrão definido por  <code>Culture</code>. </li>   <li><code>Culture</code>: Quando <code>Format</code> não é nulo, <code>Culture</code> controla alguns especificadores de formato. Por exemplo, em <code>"en-US"</code> <code>"MMM"</code> é <code>"Jan", "Feb", "Mar", ...</code>, enquanto em <code>"ru-RU"</code> <code>"MMM"</code> é <code>"янв", "фев", "мар", ...</code>. Quando <code>Format</code> é <code>null</code>, <code>Culture</code> controla o formato padrão a ser usado. Quando <code>Culture</code> é <code>null</code> ou omitido,  <code>Culture.Current</code> é usado.</li></ul>Para dar suporte a fluxos de trabalho herdados, <code>options</code> e <code>culture</code> também podem ser valores de texto. Isso tem o mesmo comportamento como se <code>options</code><code> = [Format = <code>options</code>, Culture = <code>culture</code>]</code>.


## Examples

### Example #1 
Converta &lt;code&gt;#date(2010, 12, 31)&lt;/code&gt; em um valor &lt;code&gt;text&lt;/code&gt;. &lt;i&gt;O resultado pode variar dependendo da cultura atual.&lt;/i&gt;
```powerquery
Date.ToText(#date(2010, 12, 31))
```

Result: 
```powerquery
"12/31/2010"
```


### Example #2 
Converta usando um formato personalizado e a cultura alemã.
```powerquery
Date.ToText(#date(2010, 12, 31), [Format="dd MMM yyyy", Culture="de-DE"])
```

Result: 
```powerquery
"31 Dez 2010"
```


### Example #3 
Localize o ano no calendário islâmico que corresponde a 1° de janeiro de 2000 no calendário gregoriano.
```powerquery
Date.ToText(#date(2000, 1, 1), [Format="yyyy", Culture="ar-SA"])
```

Result: 
```powerquery
"1420"
```




## Category
Date
