---
title: DateTimeZone.ToText
---

# DateTimeZone.ToText


Retorna uma representação textual do valor datetimezone.


## Syntax

```powerquery
DateTimeZone.ToText(
    dateTimeZone as datetimezone,
    optional options as any,
    optional culture as text
) as text
```


## Remarks

Retorna uma representação textual de `dateTimeZone`. Um parâmetro `record` opcional, `options`, pode ser fornecido para especificar propriedades adicionais. `culture` é usado somente para fluxos de trabalho herdados. O `record` pode conter os seguintes campos:

-   `Format`: um valor `text` que indica o formato a ser usado. Para obter mais detalhes, acesse https://go.microsoft.com/fwlink/?linkid=2180104 e https://go.microsoft.com/fwlink/?linkid=2180105. Omitir este campo ou fornecer `null` resultará na formatação da data usando o padrão definido por `Culture`.
-   `Culture`: Quando `Format` não é nulo, `Culture` controla alguns especificadores de formato. Por exemplo, em `"en-US"` `"MMM"` é `"Jan", "Feb", "Mar", ...`, enquanto que em `"ru-RU"` `"MMM"` é `"янв", "фев", "мар", ...`. Quando `Format` é `null`, `Culture` controla o formato padrão a ser usado. Quando `Culture` é `null` ou omitido, `Culture.Current` é usado.

Para oferecer suporte a fluxos de trabalho herdados, `options` e `culture` também podem ser valores de texto. Isso tem o mesmo comportamento como se `options = [Format = options, Culture = culture]`.


## Examples

### Example #1
Converta `#datetimezone(2010, 12, 31, 01, 30, 25, 2, 0)` em um valor `text`. *O resultado pode variar dependendo da cultura atual.*
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
