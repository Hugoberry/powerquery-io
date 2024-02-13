---
title: Time.FromText
---

# Time.FromText


Cria uma Hora com Formatos de hora locais, universais e personalizados.


## Syntax

```powerquery
Time.FromText(
    text as text,
    optional options as any
) as time
```


## Remarks

Cria um valor <code>time</code> a partir de uma representação textual, <code>text</code>. Um parâmetro opcional <code>record</code>, <code>options</code>, pode ser fornecido para especificar propriedades adicionais. O <code>record</code> pode conter os seguintes campos:<ul>   <li><code>Format</code>: Um valor <code>text</code> que indica o formato a ser usado. Para obter mais detalhes, acesse https://go.microsoft.com/fwlink/?linkid=2180104 e https://go.microsoft.com/fwlink/?linkid=2180105. Omitir este campo ou fornecer <code>null</code> resultará na análise do tempo usando o melhor esforço possível.</li> <li><code>Culture</code>: Quando <code>Format</code> não é nulo, <code>Culture</code> controla alguns especificadores de formato. Por exemplo, em <code>"en-US"</code> <code>"tt"</code> é <code>"AM" ou "PM"</code>, enquanto em <code>"ar- EG"</code> <code>"tt"</code> é <code>"ص" ou "م"</code>. Quando <code>Format</code> é <code>null</code>, <code>Culture</code> controla o formato padrão a ser usado. Quando <code>Culture</code> é <code>null</code> ou omitido, <code>Culture.Current</code> é usado.</li></ul>Para oferecer suporte a fluxos de trabalho legados, <code>options</code> também pode ser um valor de texto. Isso tem o mesmo comportamento como se <code>options</code><code> = [Format = null, Culture = <code>options</code>]</code>.


## Examples

### Example #1 
Converta &lt;code&gt;&#34;10:12:31am&#34;&lt;/code&gt; em um valor Time.
```powerquery
Time.FromText("10:12:31am")
```

Result: 
```powerquery
#time(10, 12, 31)
```


### Example #2 
Converta &lt;code&gt;&#34;1012&#34;&lt;/code&gt; em um valor Temporal.
```powerquery
Time.FromText("1012")
```

Result: 
```powerquery
#time(10, 12, 00)
```


### Example #3 
Converta &lt;code&gt;&#34;10&#34;&lt;/code&gt; em um valor Temporal.
```powerquery
Time.FromText("10")
```

Result: 
```powerquery
#time(10, 00, 00)
```




## Category
Time
