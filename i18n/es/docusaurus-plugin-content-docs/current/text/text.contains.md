---
title: Text.Contains
---

# Text.Contains


Devuelve si el texto contiene la subcadena.


## Syntax

```powerquery
Text.Contains(
    text as text,
    substring as text,
    optional comparer as function
) as logical
```


## Remarks

Detecta si `text` contiene el valor `substring`. Devuelve true si se encuentra el valor. Esta función no admite caracteres comodín ni expresiones regulares.  
  
El argumento opcional `comparer` se puede usar para especificar comparaciones que no distinguen mayúsculas de minúsculas o referencias culturales y que reconocen la configuración regional. Los siguientes comparadores integrados están disponibles en el lenguaje de fórmulas:

-   `Comparer.Ordinal`: se usa para realizar una comparación ordinal con distinción entre mayúsculas y minúsculas
-   `Comparer.OrdinalIgnoreCase`: se usa para realizar una comparación ordinal sin distinción entre mayúsculas y minúsculas
-   `Comparer.FromCulture`: se usa para realizar una comparación compatible con la referencia cultural

Si el primer argumento es null, esta función devuelve null.  
  
Todos los caracteres se tratan literalmente. Por ejemplo, "DR", " DR", "DR " y " DR " no se consideran iguales entre sí.


## Examples

### Example #1
Buscar si el texto "Hola mundo" contiene "Hola".
```powerquery
Text.Contains("Hello World", "Hello")
```

Result: 
```powerquery
true
```


### Example #2
Buscar si el texto "Hola mundo" contiene "hola".
```powerquery
Text.Contains("Hello World", "hello")
```

Result: 
```powerquery
false
```


### Example #3
Permite buscar si el texto "Hola mundo" contiene "hola", usando un comparador que no distingue mayúsculas de minúsculas.
```powerquery
Text.Contains("Hello World", "hello", Comparer.OrdinalIgnoreCase)
```

Result: 
```powerquery
true
```


### Example #4
Busque las filas de una tabla que contengan "A-" o "7" en el código de la cuenta.
```powerquery
let
    Source = #table(type table [Account Code = text, Posted Date = date, Sales = number],
    {
        {"US-2004", #date(2023,1,20), 580},
        {"CA-8843", #date(2023,7,18), 280},
        {"PA-1274", #date(2022,1,12), 90},
        {"PA-4323", #date(2023,4,14), 187},
        {"US-1200", #date(2022,12,14), 350},
        {"PTY-507", #date(2023,6,4), 110}
    }),
    #"Filtered rows" = Table.SelectRows(
        Source,
        each Text.Contains([Account Code], "A-") or
            Text.Contains([Account Code], "7"))
in
    #"Filtered rows"
    
```

Result: 
```powerquery
#table(type table [Account Code = text, Posted Date = date, Sales = number],
{
    {"CA-8843", #date(2023,7,18), 280},
    {"PA-1274", #date(2022,1,12), 90},
    {"PA-4323", #date(2023,4,14), 187},
    {"PTY-507", #date(2023,6,4), 110}
})
    
```




## Category
Text.Membership
