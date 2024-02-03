---
title: Time.ToText
---

# Time.ToText


## Description

Retorna uma representação textual do valor temporal.


## Syntax

```powerquery
Time.ToText(
    time as time,
    optional options as any,
    optional culture as text
) as text
```


## Details

Retorna uma representação textual de <code>time</code>. Um parâmetro opcional <code>record</code>, <code>options</code>, pode ser fornecido para especificar propriedades adicionais. <code>culture</code> é usado apenas para fluxos de trabalho legados. O <code>record</code> pode conter os seguintes campos:<ul>   <li><code>Format</code>: Um valor <code>text</code> que indica o formato a ser usado. Para obter mais detalhes, acesse https://go.microsoft.com/fwlink/?linkid=2180104 e https://go.microsoft.com/fwlink/?linkid=2180105. Omitir este campo ou fornecer <code>null</code> resultará na formatação da data usando o padrão definido por <code>Culture</code>.</li> <li><code>Culture</code>: Quando <code>Format</code> não é nulo, <code>Culture</code> controla alguns especificadores de formato. Por exemplo, em <code>"en-US"</code> <code>"tt"</code> é <code>"AM" ou "PM"</code>, enquanto em <code>"ar- EG"</code> <code>"tt"</code> é <code>"ص" ou "م"</code>. Quando <code>Format</code> é <code>null</code>, <code>Culture</code> controla o formato padrão a ser usado. Quando <code>Culture</code> é <code>null</code> ou omitido, <code>Culture.Current</code> é usado.</li></ul>Para oferecer suporte a fluxos de trabalho legados, <code>options</code> e <code>culture</code> também podem ser valores de texto. Isso tem o mesmo comportamento como se <code>options</code><code> = [Format = <code>options</code>, Culture = <code>culture</code>]</code>.


## Examples

### Example #1 
Converta &lt;code&gt;#time(01, 30, 25)&lt;/code&gt; em um valor &lt;code&gt;text&lt;/code&gt;. &lt;i&gt;O resultado pode variar dependendo da cultura atual.&lt;/i&gt;
```powerquery
Time.ToText(#time(11, 56, 2))
```

Result: 
```powerquery
"11:56 AM"
```


### Example #2 
Converta usando um formato personalizado e a cultura alemã.
```powerquery
Time.ToText(#time(11, 56, 2), [Format="hh:mm", Culture="de-DE"])
```

Result: 
```powerquery
"11:56"
```


### Example #3 
Converta usando o formato de hora padrão.
```powerquery
Time.ToText(#time(11, 56, 2), [Format="T", Culture="de-DE"])
```

Result: 
```powerquery
"11:56:02"
```




## Category
Time
