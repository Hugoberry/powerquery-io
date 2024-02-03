---
title: DateTimeZone.ToText
---

# DateTimeZone.ToText


## Description

Retorna uma representação textual do valor datetimezone.


## Syntax

```powerquery
DateTimeZone.ToText(
    dateTimeZone as datetimezone,
    optional options as any,
    optional culture as text
) as text
```


## Details

Retorna uma representação textual de <code>dateTimeZone</code>. Um parâmetro <code>record</code> opcional, <code>options</code>, pode ser fornecido para especificar propriedades adicionais. <code>culture</code> só é usado para fluxos de trabalho herdados. O <code>record</code> pode conter os seguintes campos:<ul>   <li><code>Format</code>: Um valor <code>text</code> que indica o formato a ser usado. Para obter mais detalhes, acesse https://go.microsoft.com/fwlink/?linkid=2180104 e https://go.microsoft.com/fwlink/?linkid=2180105. Omitir este campo ou fornecer <code>null</code> resultará na formatação da data usando o padrão definido por  <code>Culture</code>. </li>   <li><code>Culture</code>: Quando <code>Format</code> não é nulo, <code>Culture</code> controla alguns especificadores de formato. Por exemplo, em <code>"en-US"</code> <code>"MMM"</code> é <code>"Jan", "Feb", "Mar", ...</code>, enquanto em <code>"ru-RU"</code> <code>"MMM"</code> é <code>"янв", "фев", "мар", ...</code>. Quando <code>Format</code> é <code>null</code>, <code>Culture</code> controla o formato padrão a ser usado. Quando <code>Culture</code> é <code>null</code> ou omitido,  <code>Culture.Current</code> é usado.</li></ul>Para dar suporte a fluxos de trabalho herdados, <code>options</code> e <code>culture</code> também podem ser valores de texto. Isso tem o mesmo comportamento como se <code>options</code><code> = [Format = <code>options</code>, Culture = <code>culture</code>]</code>.


## Examples

### Example #1 
Converta &lt;code&gt;#datetimezone(2010, 12, 31, 01, 30, 25, 2, 0)&lt;/code&gt; em um valor &lt;code&gt;text&lt;/code&gt;. &lt;i&gt;O resultado pode variar dependendo da cultura atual.&lt;/i&gt;
```powerquery
DateTimeZone.ToText(#datetimezone(2010, 12, 31, 01, 30, 25, 2, 0))
```

Result: 
```powerquery
"12/31/2010 1:30:25 AM +02:00"
```


### Example #2 
Converta usando um formato personalizado e a cultura alemã.
```powerquery
DateTimeZone.ToText(#datetimezone(2010, 12, 30, 2, 4, 50.36973, -8,0), [Format="dd MMM yyyy HH:mm:ss.ffffff zzz", Culture="de-DE"])
```

Result: 
```powerquery
"30 Dez 2010 02:04:50.369730 -08:00"
```


### Example #3 
Converta usando o padrão ISO 8601.
```powerquery
DateTimeZone.ToText(#datetimezone(2000, 2, 8, 3, 45, 12, 2, 0),[Format="O", Culture="en-US"])
```

Result: 
```powerquery
"2000-02-08T03:45:12.0000000+02:00"
```




## Category
DateTimeZone
