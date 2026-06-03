---
title: Date.FromText
---

# Date.FromText


Crea una fecha a partir de formatos de fecha locales, universales y personalizados.


## Syntax

```powerquery
Date.FromText(
    text as text,
    optional options as any
) as date
```


## Remarks

Crea un valor de fecha a partir de una representación textual.

-   `text`: un valor de texto que se va a ocultar a una fecha.
-   `options`: un `registro` opcional que se puede proporcionar para especificar propiedades adicionales. El `registro` puede contener los campos siguientes:
    -   `Format`: un valor de `text` que indica el formato que se va a usar. Para más información, vaya a https://go.microsoft.com/fwlink/?linkid=2180104 y https://go.microsoft.com/fwlink/?linkid=2180105. Si se omite este campo o se proporciona `null` se analiza la fecha de la mejor manera posible.
    -   `Culture`: cuando `Format` no es null, `Culture` controla algunos especificadores de formato. Por ejemplo, en `"en-US"` `"MMM"` es `"Jan", "Feb", "Mar", ...`, mientras que en `"ru-RU"` `"MMM"` es `"янв", "фев", "мар", ...`. Cuando `Format` es `null`, `Culture` controla el formato predeterminado que se va a usar. Cuando `Culture` es `null` o se omite, se usa `Culture.Current`.

Para admitir flujos de trabajo heredados, `options` también puede ser un valor de texto. Tiene el mismo comportamiento que si `options = [Format = null, Culture = options]`.


## Examples

### Example #1
Convertir `"2010-12-31"` en un valor `date`.
```powerquery
Date.FromText("2010-12-31")
```

Result: 
```powerquery
#date(2010, 12, 31)
```


### Example #2
Convertir con un formato personalizado y la referencia cultural alemana.
```powerquery
Date.FromText("30 Dez 2010", [Format="dd MMM yyyy", Culture="de-DE"])
```

Result: 
```powerquery
#date(2010, 12, 30)
```


### Example #3
Busque la fecha en el calendario gregoriano que corresponde al principio de 1400 en el calendario Hijri.
```powerquery
Date.FromText("1400", [Format="yyyy", Culture="ar-SA"])
```

Result: 
```powerquery
#date(1979, 11, 20)
```


### Example #4
Convierta las fechas de texto en italiano con meses abreviados en la columna Fecha de publicación en valores de fecha.
```powerquery
let
    Source = #table(type table [Account Code = text, Posted Date = text, Sales = number],
    {
        {"US-2004", "20 gen. 2023", 580},
        {"CA-8843", "18 lug. 2024", 280},
        {"PA-1274", "12 gen. 2023", 90},
        {"PA-4323", "14 apr. 2023", 187},
        {"US-1200", "14 dic. 2023", 350},
        {"PTY-507", "4 giu. 2024", 110}
    }),
    #"Converted Date" = Table.TransformColumns(
        Source,
        {"Posted Date", each Date.FromText(_, [Culture = "it-IT"]), type date}
    )
in
    #"Converted Date"
```

Result: 
```powerquery
#table(type table [Account Code = text, Posted Date = date, Sales = number],
{
    {"US-2004", #date(2023, 1, 20), 580},
    {"CA-8843", #date(2024, 7, 18), 280},
    {"PA-1274", #date(2023, 1, 12), 90},
    {"PA-4323", #date(2023, 4, 14), 187},
    {"US-1200", #date(2023, 12, 14), 350},
    {"PTY-507", #date(2024, 6, 4), 110}
})
```




## Category
Date
