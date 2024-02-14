---
title: Time.FromText
---

# Time.FromText


Cria uma Hora a partir dos formatos de Hora locais, universais e personalizados.


## Syntax

```powerquery
Time.FromText(
    text as text,
    optional options as any
) as time
```


## Remarks

Cria um valor <code>time</code> a partir de uma representação textual, <code>text</code>. Pode ser fornecido um parâmetro <code>record</code> opcional, <code>options</code>, para especificar propriedades adicionais. O <code>record</code> pode conter os seguintes campos:<ul>   <li><code>Format</code>: Um valor de <code>text</code> que indica o formato a utilizar. Aceda a https://go.microsoft.com/fwlink/?linkid=2180104 e https://go.microsoft.com/fwlink/?linkid=2180105. Omitir este campo ou fornecer <code>null</code> resultará na análise da hora com o melhor esforço.</li>   <li><code>Culture</code>: Quando o <code>Format</code> não é nulo, a <code>Culture</code> controla alguns especificadores de formato. Por exemplo, em <code>"en-US"</code>, <code>"tt"</code> é <code>"AM" ou "PM"</code>, ao passo que em <code>"ar-EG"</code>, <code>"tt"</code> é <code>"ص" ou "م"</code>. Quando <code>Format</code> é <code>null</code>, <code>Culture</code> controla o formato a utilizar. Quando <code>Culture</code> é <code>null</code> ou omitido, é utilizado <code>Culture.Current</code>.</li></ul>Para suportar fluxos de trabalho legados, <code>options</code> poderá também ser um valor de texto. O comportamento é idêntico ao caso em que <code>options</code><code> = [Format = null, Culture = <code>options</code>]</code>.


## Examples

### Example #1 
Converter &lt;code&gt;&#34;10:12:31am&#34;&lt;/code&gt; num valor de Hora.
```powerquery
Time.FromText("10:12:31am")
```

Result: 
```powerquery
#time(10, 12, 31)
```


### Example #2 
Converter &lt;code&gt;&#34;1012&#34;&lt;/code&gt; num valor de hora (Time).
```powerquery
Time.FromText("1012")
```

Result: 
```powerquery
#time(10, 12, 00)
```


### Example #3 
Converter &lt;code&gt;&#34;10&#34;&lt;/code&gt; num valor de hora (Time).
```powerquery
Time.FromText("10")
```

Result: 
```powerquery
#time(10, 00, 00)
```




## Category
Time
