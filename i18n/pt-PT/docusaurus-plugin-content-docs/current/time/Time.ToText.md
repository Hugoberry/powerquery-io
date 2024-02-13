---
title: Time.ToText
---

# Time.ToText


Devolve uma representação textual do valor de hora.


## Syntax

```powerquery
Time.ToText(
    time as time,
    optional options as any,
    optional culture as text
) as text
```


## Remarks

Devolve uma representação textual de <code>time</code>. Um parâmetro <code>record</code> opcional, <code>options</code>, pode ser fornecido para especificar propriedades adicionais. <code>culture</code> é utilizado apenas para fluxos de trabalho legados. O <code>record</code> pode conter os seguintes campos:<ul>   <li><code>Format</code>: Um valor de <code>text</code> que indica o formato a utilizar. Aceda a https://go.microsoft.com/fwlink/?linkid=2180104 e https://go.microsoft.com/fwlink/?linkid=2180105. Omitir este campo ou fornecer <code>null</code> resultará na formatação da data utilizando a predefinição definida pela <code>Culture</code>.</li>   <li><code>Culture</code>: Quando o <code>Format</code> não é null, a <code>Culture</code> controla alguns especificadores de formato. Por exemplo, em <code>"en-US"</code>, <code>"tt"</code> é <code>"AM" ou "PM"</code>, ao passo que em <code>"ar-EG"</code>, <code>"tt"</code> é <code>"ص" ou "م"</code>. Quando o <code>Format</code> é <code>null</code>, a <code>Culture</code> controla o formato predefinido a utilizar. Quando <code>Culture</code> é <code>null</code> ou omitida, é utilizado <code>Culture.Current</code>.</li></ul>Para suportar fluxos de trabalho legados, <code>options</code> e <code>culture</code> também podem ser valores de texto. O comportamento é idêntico ao caso em que <code>options</code><code> = [Format = <code>options</code>, Culture = <code>culture</code>]</code>.


## Examples

### Example #1 
Converter &lt;code&gt;#time(01, 30, 25)&lt;/code&gt; num valor de &lt;code&gt;text&lt;/code&gt;. &lt;i&gt;O resultado pode variar dependendo da cultura atual.&lt;/i&gt;
```powerquery
Time.ToText(#time(11, 56, 2))
```

Result: 
```powerquery
"11:56 AM"
```


### Example #2 
Converter com um formato personalizado e a cultura alemã.
```powerquery
Time.ToText(#time(11, 56, 2), [Format="hh:mm", Culture="de-DE"])
```

Result: 
```powerquery
"11:56"
```


### Example #3 
Converter com o formato de hora padrão.
```powerquery
Time.ToText(#time(11, 56, 2), [Format="T", Culture="de-DE"])
```

Result: 
```powerquery
"11:56:02"
```




## Category
Time
