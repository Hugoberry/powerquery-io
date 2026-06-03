---
title: Date.ToText
---

# Date.ToText


Retorna uma representação textual do valor da data.


## Syntax

```powerquery
Date.ToText(
    date as date,
    optional options as any,
    optional culture as text
) as text
```


## Remarks

Retorna uma representação textual de `date`. Um parâmetro `record` opcional, `options`, pode ser fornecido para especificar propriedades adicionais. `culture` é usado somente para fluxos de trabalho herdados. O `record` pode conter os seguintes campos:

-   `Format`: um valor `text` que indica o formato a ser usado. Para obter mais detalhes, acesse https://go.microsoft.com/fwlink/?linkid=2180104 e https://go.microsoft.com/fwlink/?linkid=2180105. Omitir este campo ou fornecer `null` resultará na formatação da data usando o padrão definido por `Culture`.
-   `Culture`: Quando `Format` não é nulo, `Culture` controla alguns especificadores de formato. Por exemplo, em `"en-US"` `"MMM"` é `"Jan", "Feb", "Mar", ...`, enquanto que em `"ru-RU"` `"MMM"` é `"янв", "фев", "мар", ...`. Quando `Format` é `null`, `Culture` controla o formato padrão a ser usado. Quando `Culture` é `null` ou omitido, `Culture.Current` é usado.

Para oferecer suporte a fluxos de trabalho herdados, `options` e `culture` também podem ser valores de texto. Isso tem o mesmo comportamento como se `options = [Format = options, Culture = culture]`.


## Examples

### Example #1
Converta `#date(2010, 12, 31)` em um valor `text`. *O resultado pode variar dependendo da cultura atual.*
```powerquery
Date.ToText(#date(2010, 12, 31))
```

Result: 
```powerquery
"12/31/2010"
```


### Example #2
Converta usando um formato personalizado e a cultura alemã.
```powerquery
Date.ToText(#date(2010, 12, 31), [Format="dd MMM yyyy", Culture="de-DE"])
```

Result: 
```powerquery
"31 Dez 2010"
```


### Example #3
Localize o ano no calendário islâmico que corresponde a 1° de janeiro de 2000 no calendário gregoriano.
```powerquery
Date.ToText(#date(2000, 1, 1), [Format="yyyy", Culture="ar-SA"])
```

Result: 
```powerquery
"1420"
```




## Category
Date
