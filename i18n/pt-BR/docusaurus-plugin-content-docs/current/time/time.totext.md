---
title: Time.ToText
---

# Time.ToText


Retorna uma representação textual do valor temporal.


## Syntax

```powerquery
Time.ToText(
    time as time,
    optional options as any,
    optional culture as text
) as text
```


## Remarks

Retorna uma representação textual de `time`. Um parâmetro `record` opcional, `options`, pode ser fornecido para especificar propriedades adicionais. `culture` é usado somente para fluxos de trabalho herdados. O `record` pode conter os seguintes campos:

-   `Format`: um valor `text` que indica o formato a ser usado. Para obter mais detalhes, acesse https://go.microsoft.com/fwlink/?linkid=2180104 e https://go.microsoft.com/fwlink/?linkid=2180105. Omitir este campo ou fornecer `null` resultará na formatação da data usando o padrão definido por `Culture`.
-   `Culture`: Quando `Format` não é nulo, `Culture` controla alguns especificadores de formato. Por exemplo, em `"en-US"` `"tt"` é `"AM" ou "PM"`, enquanto em `"ar- EG"` `"tt"` é `"ص" ou "م"`. Quando `Format` é `null`, `Culture` controla o formato padrão a ser usado. Quando `Culture` é `null` ou omitido, `Culture.Current` é usado.

Para oferecer suporte a fluxos de trabalho herdados, `options` e `culture` também podem ser valores de texto. Isso tem o mesmo comportamento como se `options = [Format = options, Culture = culture]`.


## Examples

### Example #1
Converta `#time(01, 30, 25)` em um valor `text`. *O resultado pode variar dependendo da cultura atual.*
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
