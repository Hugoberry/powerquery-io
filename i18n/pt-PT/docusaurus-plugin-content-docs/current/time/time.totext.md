---
title: Time.ToText
---

# Time.ToText


Devolve uma representação textual do valor de hora.


## Syntax

```powerquery
Time.ToText(
    time as time,
    optional options as any,
    optional culture as text
) as text
```


## Remarks

Devolve uma representação textual de `time`. Poderá ser fornecido um parâmetro `record` opcional, `options`, para especificar propriedades adicionais. `culture` é utilizado apenas para fluxos de trabalho legados. O `record` pode conter os seguintes campos:

-   `Format`: um valor `text` que indica o formato a utilizar. Para obter mais detalhes, aceda a https://go.microsoft.com/fwlink/?linkid=2180104 e https://go.microsoft.com/fwlink/?linkid=2180105. A omissão deste campo ou o fornecimento de `null` resultará na formatação da data com o formato predefinido por `Culture`.
-   `Culture`: quando `Format` não é nulo, `Culture` controla alguns especificadores de formato. Por exemplo, em `"en-US"` `"tt"` é `"AM" or "PM"`, enquanto em `"ar-EG"` `"tt"` é `"ص" or "م"`. Quando `Format` é `null`, `Culture` controla o formato predefinido a utilizar. Quando `Culture` é `null` ou é omitido, é utilizado `Culture.Current`.

Para suportar fluxos de trabalho legados, `options` e `culture` também poderão ser valores de texto. Tem o mesmo comportamento que `options = [Format = options, Culture = culture]`.


## Examples

### Example #1
Converter `#time(01, 30, 25)` num valor de `text`. *O resultado pode variar dependendo da cultura atual.*
```powerquery
Time.ToText(#time(11, 56, 2))
```

Result: 
```powerquery
"11:56 AM"
```


### Example #2
Converter com um formato personalizado e a cultura alemã.
```powerquery
Time.ToText(#time(11, 56, 2), [Format="hh:mm", Culture="de-DE"])
```

Result: 
```powerquery
"11:56"
```


### Example #3
Converter com o formato de hora padrão.
```powerquery
Time.ToText(#time(11, 56, 2), [Format="T", Culture="de-DE"])
```

Result: 
```powerquery
"11:56:02"
```




## Category
Time
