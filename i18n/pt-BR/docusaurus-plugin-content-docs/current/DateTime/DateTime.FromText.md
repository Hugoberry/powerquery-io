---
title: DateTime.FromText
---

# DateTime.FromText


## Description

Cria um valor datetimezone com formatos de data e hora locais e universais.


## Syntax

```powerquery
DateTime.FromText(
    text as text,
    optional options as any
) as datetime
```


## Details

Cria um valor <code>datetime</code> a partir de uma representação textual, <code>text</code>. Um parâmetro <code>record</code> opcional, <code>options</code>, pode ser fornecido para especificar propriedades adicionais. O <code>record</code> pode conter os seguintes campos:<ul>   <li><code>Format</code>: Um valor <code>text</code> indicando o formato a ser usado. Para mais detalhes, acesse https://go.microsoft.com/fwlink/?linkid=2180104 e https://go.microsoft.com/fwlink/?linkid=2180105. Omitir este campo ou fornecer <code>null</code> resultará na análise da data usando o melhor esforço.</li>   <li><code>Culture</code>: Quando o <code>Format</code> não for nulo, <code>Culture</code> controla alguns especificadores de formato. Por exemplo, em <code>"en-US"</code> o <code>"MMM"</code> é <code>"Jan", "Feb", "Mar", ...</code>, enquanto em <code>"ru-RU"</code> o <code>"MMM"</code> é <code>"янв", "фев", "мар", ...</code>. Quando o <code>Format</code> for <code>null</code>, <code>Culture</code> controla o formato padrão a ser usado. Quando <code>Culture</code> for <code>null</code> ou omitido, <code>Culture.Current</code> é usado.</li></ul>Para suportar fluxos de trabalho herdados, <code>options</code> também pode ser um valor de texto. Isso tem o mesmo comportamento como se <code>options</code><code> = [Format = null, Culture = <code>options</code>]</code>.


## Examples

### Example #1 
Converta &lt;code&gt;&#34;2010-12-31T01:30:00&#34;&lt;/code&gt; em um valor datetime.
```powerquery
DateTime.FromText("2010-12-31T01:30:25")
```

Result: 
```powerquery
#datetime(2010, 12, 31, 1, 30, 25)
```


### Example #2 
Converta &lt;code&gt;&#34;2010-12-31T01:30:00.121212&#34;&lt;/code&gt; em um valor datetime.
```powerquery
DateTime.FromText("30 Dez 2010 02:04:50.369730", [Format="dd MMM yyyy HH:mm:ss.ffffff", Culture="de-DE"])
```

Result: 
```powerquery
#datetime(2010, 12, 30, 2, 4, 50.36973)
```


### Example #3 
Converta &lt;code&gt;&#34;2010-12-31T01:30:00&#34;&lt;/code&gt; em um valor datetime.
```powerquery
DateTime.FromText("2000-02-08T03:45:12Z", [Format="yyyy-MM-dd'T'HH:mm:ss'Z'", Culture="en-US"])
```

Result: 
```powerquery
#datetime(2000, 2, 8, 3, 45, 12)
```


### Example #4 
Converta &lt;code&gt;&#34;20101231T013000&#34;&lt;/code&gt; em um valor datetime.
```powerquery
DateTime.FromText("20101231T013000", [Format="yyyyMMdd'T'HHmmss", Culture="en-US"])
```

Result: 
```powerquery
#datetime(2010, 12, 31, 1, 30, 0)
```




## Category
DateTime
