---
title: Date.ToText
---

# Date.ToText


Devolve unha representación textual do valor de data.


## Syntax

```powerquery
Date.ToText(
    date as date,
    optional options as any,
    optional culture as text
) as text
```


## Remarks

Devolve unha representación textual de `date`. Pode proporcionarse un parámetro \``record`\` opcional, `options`, para especificar propiedades adicionais. \``culture`\` só se usa para fluxos de traballo herdados. O `record` pode conter os seguintes campos:

-   `format`: Un valor de `text` que indica o formato a usar. Para obter máis detalles, visite https://go.microsoft.com/fwlink/?linkid=2180104 e https://go.microsoft.com/fwlink/?linkid=2180105. Se omite este campo ou proporciona `null`, a data formatarase co valor predeterminado definido por `Culture`.
-   `Culture`: Cando `Format` non é null, `Culture` controla algúns especificadores de formato. Por exemplo, en `"en-US"` `"MMM"` é `"Xan", "Feb", "Mar", ...`, mentres que en `"ru-RU"` `"MMM"` é `"янв", "фев", "мар",...`. Cando `Format` é `null`, `Culture` controla o formato predeterminado que se usa. Cando `Culture` é `null` ou se omite, úsase `Culture.Current`.

Para soportar fluxos de traballo herdados, `options` e `culture` tamén poden ser valores de texto. Isto ten o mesmo comportamento que se `options = [Format = options, Culture = culture]`.


## Examples

### Example #1
Converter `#date(2010, 12, 31)` nun valor de `text`. *O resultado pode variar dependendo da cultura actual.*
```powerquery
Date.ToText(#date(2010, 12, 31))
```

Result: 
```powerquery
"12/31/2010"
```


### Example #2
Converter usando un formato personalizado e a cultura alemá.
```powerquery
Date.ToText(#date(2010, 12, 31), [Format="dd MMM yyyy", Culture="de-DE"])
```

Result: 
```powerquery
"31 Dez 2010"
```


### Example #3
Busca o ano no calendario Hijri que corresponde ao 1 de xaneiro de 2000 no calendario gregoriano.
```powerquery
Date.ToText(#date(2000, 1, 1), [Format="yyyy", Culture="ar-SA"])
```

Result: 
```powerquery
"1420"
```




## Category
Date
