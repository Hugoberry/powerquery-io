---
title: DateTimeZone.ToText
---

# DateTimeZone.ToText


Devolve uma representação textual do valor datetimezone.


## Syntax

```powerquery
DateTimeZone.ToText(
    dateTimeZone as datetimezone,
    optional options as any,
    optional culture as text
) as text
```


## Remarks

Devolve uma representação de texto de <code>dateTimeZone</code>. Um parâmetro opcional <code>record</code> <code>options</code>, poderá ser fornecido para especificar propriedades adicionais. <code>culture</code> é apenas utilizado para fluxos de trabalho de legado. O <code>record</code> pode conter os seguintes campos:<ul>   <li><code>Format</code>: Um valor <code>text</code> que indica o formato a utilizar. Para mais detalhes, aceda a https://go.microsoft.com/fwlink/?linkid=2180104 e https://go.microsoft.com/fwlink/?linkid=2180105. Omitir este campo ou fornecer <code>null</code> irá resultar na formatação da data utilizando a predifinição fornecida por <code>Culture</code>.</li>   <li><code>Culture</code>: Quando <code>Format</code> não é nulo, <code>Culture</code> controla algumas especificações de formatos. Por exemplo, em <code>"en-US"</code> <code>"MMM"</code> é <code>"Jan", "Feb", "Mar", ...</code>, enquanto que em <code>"ru-RU"</code> <code>"MMM"</code> é <code>"янв", "фев", "мар", ...</code>. Quando <code>Format</code> é <code>null</code>, <code>Culture</code> controla o formato predefindo a utilizar. Quando <code>Culture</code> é <code>null</code> ou omitido, <code>Culture.Current</code> é utilizado.</li></ul>Para suportar fluxos de trabalho de legado, <code>options</code> e <code>culture</code> também poderão ser valores de texto. Isto tem o mesmo comportamento que se <code>options</code><code> = [Format = <code>options</code>, Culture = <code>culture</code>]</code>.


## Examples

### Example #1 
Converter &lt;code&gt;#datetimezone(2010, 12, 31, 01, 30, 25, 2, 0)&lt;/code&gt; num valor de &lt;code&gt;text&lt;/code&gt;. &lt;i&gt;O resultado pode variar dependendo da cultura atual.&lt;/i&gt;
```powerquery
DateTimeZone.ToText(#datetimezone(2010, 12, 31, 01, 30, 25, 2, 0))
```

Result: 
```powerquery
"12/31/2010 1:30:25 AM +02:00"
```


### Example #2 
Converter com um formato personalizado e a cultura alemã.
```powerquery
DateTimeZone.ToText(#datetimezone(2010, 12, 30, 2, 4, 50.36973, -8,0), [Format="dd MMM yyyy HH:mm:ss.ffffff zzz", Culture="de-DE"])
```

Result: 
```powerquery
"30 Dez 2010 02:04:50.369730 -08:00"
```


### Example #3 
Converter com o padrão ISO 8601.
```powerquery
DateTimeZone.ToText(#datetimezone(2000, 2, 8, 3, 45, 12, 2, 0),[Format="O", Culture="en-US"])
```

Result: 
```powerquery
"2000-02-08T03:45:12.0000000+02:00"
```




## Category
DateTimeZone
