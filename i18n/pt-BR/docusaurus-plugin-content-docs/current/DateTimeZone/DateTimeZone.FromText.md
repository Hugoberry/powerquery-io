---
title: DateTimeZone.FromText
---

# DateTimeZone.FromText


Cria uma datetimezone a partir de Formatos datetimezone locais, universais e personalizados.


## Syntax

```powerquery
DateTimeZone.FromText(
    text as text,
    optional options as any
) as datetimezone
```


## Remarks

Cria um valor <code>datetimezone</code> a partir de uma representação textual, <code>text</code>. Um parâmetro <code>record</code> opcional, <code>options</code>, pode ser fornecido para especificar propriedades adicionais. O <code>record</code> pode conter os seguintes campos:<ul>   <li><code>Format</code>: Um valor <code>text</code> indicando o formato a ser usado. Para mais detalhes, acesse https://go.microsoft.com/fwlink/?linkid=2180104 e https://go.microsoft.com/fwlink/?linkid=2180105. Omitir este campo ou fornecer <code>null</code> resultará na análise da data usando o melhor esforço.</li>   <li><code>Culture</code>: Quando o <code>Format</code> não for nulo, <code>Culture</code> controla alguns especificadores de formato. Por exemplo, em <code>"en-US"</code> o <code>"MMM"</code> é <code>"Jan", "Feb", "Mar", ...</code>, enquanto em <code>"ru-RU"</code> o <code>"MMM"</code> é <code>"янв", "фев", "мар", ...</code>. Quando o <code>Format</code> for <code>null</code>, <code>Culture</code> controla o formato padrão a ser usado. Quando <code>Culture</code> for <code>null</code> ou omitido, <code>Culture.Current</code> é usado.</li></ul>Para suportar fluxos de trabalho herdados, <code>options</code> também pode ser um valor de texto. Isso tem o mesmo comportamento como se <code>options</code><code> = [Format = null, Culture = <code>options</code>]</code>.


## Examples

### Example #1 
Converta &lt;code&gt;&#34;2010-12-31T01:30:00-08:00&#34;&lt;/code&gt; em um valor &lt;code&gt;datetimezone&lt;/code&gt;.
```powerquery
DateTimeZone.FromText("2010-12-31T01:30:00-08:00")
```

Result: 
```powerquery
#datetimezone(2010, 12, 31, 1, 30, 0, -8, 0)
```


### Example #2 
Converta usando um formato personalizado e a cultura alemã.
```powerquery
DateTimeZone.FromText("30 Dez 2010 02:04:50.369730 +02:00", [Format="dd MMM yyyy HH:mm:ss.ffffff zzz", Culture="de-DE"])
```

Result: 
```powerquery
#datetimezone(2010, 12, 30, 2, 4, 50.36973, 2, 0)
```


### Example #3 
Converter usando a ISO 8601.
```powerquery
DateTimeZone.FromText("2009-06-15T13:45:30.0000000-07:00", [Format="O", Culture="en-US"])
```

Result: 
```powerquery
#datetimezone(2009, 6, 15, 13, 45, 30, -7, 0)
```




## Category
DateTimeZone
